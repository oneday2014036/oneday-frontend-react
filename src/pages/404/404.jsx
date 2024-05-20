import logo from '../../../public/logo_v2.png'

import './404.scss';

export default function NotFound() {
    return (
        <div className='not-found'>
            <img src={logo} alt='logo' />
            <div className='not-found-content'>
                <p>404 Not Found</p>
                <div className='excort'>
                    <h1>我为什么到这了？</h1>
                    <a><p>{'<-快带我回主页！'}</p></a>
                    <div className='music'>
                        <p>或者听首歌再走吧</p>
                        <span className='player'></span>
                    </div>
                </div>
            </div>

        </div>
    )
}