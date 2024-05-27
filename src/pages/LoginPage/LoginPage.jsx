import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate } from 'react-router-dom'
import axiosFetcher from "../../utils/Axios.js";
import {useSelector, useDispatch} from "react-redux";

import {fetchUserLoginStatus, setAuthStatus, setUserInfo} from "../../store/pageSlice.js";
import Logo from "../../components/Logo/Logo.jsx";
import StatusReminder from "../../components/StatusReminder/StatusReminder.jsx";

import './LoginPage.scss'

export default function LoginPage() {
    const pageState = useSelector(state => state.page)
    const dispatch = useDispatch();
    const [authData, setAuthData] = useState({
        'email': '',
        'password': '',
        'captcha': '',
        'isRemember': false,
        'authResult': false
    })

    const navigate = useNavigate()
    const from= useLocation().state?.from || '/'

    useEffect(() => {
        if (pageState.isAuthenticated) {
            dispatch(fetchUserLoginStatus())
            navigate(from, {replace: true})
        }
    }, [pageState.isAuthenticated])



    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setAuthData(pre => {
            return {
                ...pre,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        axiosFetcher({
            method: 'POST',
            url: `/api/users/auth/email`,
            data: authData,
        }).then((res) => {
            const token = res.data.token
            if (authData.isRemember) {
                localStorage.setItem('token', token)
            } else {
                sessionStorage.setItem('token', token)
            }
            dispatch(setAuthStatus(true))
            })
        .catch(err => console.log(err.response.data))
    }


    return (
        <div className="login">
            <Logo isWithTitle={true}/>
            {from !== '/' && <StatusReminder status='LOGIN'/>}
            <form>
                <label>
                    <input type='email'
                           name='email'
                           value={authData.email}
                           onChange={handleChange}
                           placeholder='邮箱'/>
                    <span className='input-label'>验证邮箱</span>
                </label>
                <label>
                    <input type='password'
                           name='password'
                           onChange={handleChange}
                           value={authData.password}
                           placeholder='密码'/>
                    <span className='input-label'>密码</span>
                </label>
                <div className='captcha'>
                    <label>
                        <input
                            type='text'
                            name='captcha'
                            value={authData.captcha}
                            onChange={handleChange}
                            placeholder='验证码'/>
                        <span className='input-label'>验证码</span>
                    </label>
                </div>
                <div className='options'>
                <label className='remember'>
                        <input className='remember'
                               name='isRemember'
                               checked={authData.isRemember}
                               onChange={handleChange}
                               type='checkbox'/>
                        记住我
                    </label>
                    <Link className='forget'>忘记密码</Link>
                </div>
                <button type='submit' onClick={handleSubmit}>登录</button>
                <Link to="/signup" className='/login'>没有账号？去注册</Link>
            </form>
        </div>
    )
}