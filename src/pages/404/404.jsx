import {Link} from "react-router-dom";

import Logo from "../../components/Logo/Logo.jsx";
import './404.scss';

export default function NotFound() {
    return (
        <div className='not-found'>
            <Logo />
            <div className='not-found-content'>
                <p>404 Not Found</p>
                <div className='excort'>
                    <h1>我为什么到这了？</h1>
                    <Link to='/'>
                        <p>{'<-快带我回主页！'}</p>
                    </Link>
                    <div className='music'>
                        <p>或者听首歌再走吧</p>
                        <span className='player'></span>
                    </div>
                </div>
            </div>

        </div>
    )
}