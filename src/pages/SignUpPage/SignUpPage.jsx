import axios from 'axios'
import {Link} from 'react-router-dom'

import Logo from "../../components/Logo/Logo.jsx";

import './SignUpPage.scss'
import {useRef, useState} from "react";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        'username': '',
        'email': '',
        'password': '',
        'confirmPassword': '',
        'clickSubmit': false,
        'errorMessage': '',
        'successMessage': '',
    })
    const ref = useRef()

    function handleformchange(e) {
        setFormData(pre => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    function setErrorMessage(message) {
        setFormData(pre=> {
            return {
                ...pre,
                'errorMessage': message
            }})
    }

    function validateFormData() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(formData['email'])) {
            setErrorMessage('Invalid email address!')
        }
        else if (formData['password'] !== formData['confirmPassword']) {
            setErrorMessage('Passwords do not match!')
        }
        else if (!formData['username']) {
            setErrorMessage('Username cannot be empty!')
        }
        else {
            setErrorMessage('')
            return true
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormData(pre=> {
            return {
                ...pre,
                'clickSubmit': true
            }
        })
        if (validateFormData()) {
            console.log(formData)
            axios({
                method: 'post',
                url: '/api/user',
                data: formData,
                headers: {'Content-Type': 'application/json;'}
            })
                .then(res => {
                    console.log(res.data)
                    setFormData(pre=> {
                        return {
                            ...pre,
                            'successMessage': 'Sign up successfully!',
                        }
                    })
                })
                .catch(err => {
                console.log(err.response)
                setErrorMessage(err.message)
            })
        }
    }

    return (
        <div className="signup">
            <Logo />
            <form className={formData.clickSubmit ? 'invalid' : ''} method="post">
                <label>
                    <input type='text'
                           required
                           onChange={handleformchange}
                           name='username'
                           ref={ref}
                           value={formData.username}
                           placeholder='用户名'/>
                    <span className='input-label'>用户名</span>
                </label>
                <label>
                    <input type='email'
                           name='email'
                           required
                           onChange={handleformchange}
                           value={formData.email}
                           placeholder='验证邮箱'/>
                    <span className='input-label'>验证邮箱</span>
                </label>
                <label>
                    <input type='password'
                           name='password'
                           required
                           minLength='8'
                           onChange={handleformchange}
                           value={formData.password}
                           placeholder='密码'/>
                    <span className='input-label'>密码</span>
                </label>
                <label>
                    <input type='password'
                           name='confirmPassword'
                           required
                           minLength='8'
                           onChange={handleformchange}
                           value={formData.confirmPassword}
                           placeholder='确认密码'/>
                    <span className='input-label'>确认密码</span>
                </label>
                <div className='captcha'>
                    <label>
                        <input type='text' placeholder='验证码'/>
                        <span className='input-label'>验证码</span>
                    </label>
                </div>

                <button type='submit' onClick={handleSubmit}>注册</button>
                <Link to="/login" className='/login'>返回登录</Link>
                <small className='error-message'>{formData['errorMessage']}</small>
                <small className='success-message'>{formData['successMessage']}</small>
            </form>
        </div>
    )
}