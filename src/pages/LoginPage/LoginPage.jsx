import {Link} from 'react-router-dom'

import Logo from "../../components/Logo/Logo.jsx";
import StatusReminder from "../../components/StatusReminder/StatusReminder.jsx";

import './LoginPage.scss'

export default function LoginPage() {
    return (
        <div className="login">
            <Logo />
            <StatusReminder status='LOGIN' />
            <form>
                <label>
                    <input type='email' placeholder='邮箱/用户名'/>
                </label>
                <label>
                    <input type='password' placeholder='密码'/>
                </label>
                <div className='captcha'>
                    <label>
                        <input type='text' placeholder='验证码'/>
                    </label>
                </div>
                <div className='options'>
                    <label className='remember'>
                        <input className='remember' type='checkbox'/>
                        记住我
                    </label>
                    <Link className='forget'>忘记密码</Link>
                </div>
                <button type='submit'>登录</button>
                <Link to="/signup" className='/login'>没有账号？去注册</Link>
            </form>
        </div>
    )
}