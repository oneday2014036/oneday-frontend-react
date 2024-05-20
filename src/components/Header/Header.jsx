import { Link, Outlet, useLocation } from "react-router-dom";
import Avatar from 'react-avatar'

import logo from '/logo_v2_t.png'
import handDownIcon from '../../assets/icons/hand-down.png'
import searchIcon from '../../assets/icons/search.svg'

import './Header.scss'
import Navbar from '../Navbar/Navbar.jsx'


export default function Header({ layout }) {

    const location = useLocation();
    const slash = location.pathname.split('/').length - 1


    if (location.pathname === '/' || (slash >=2 && !location.pathname.endsWith('/'))) {
        layout = 'horizon'
    } else {
        layout = 'vertical'
    }

    return (
        <div className={layout}>
            <header className={layout}>
                {layout === 'vertical' && <Avatar className='avatar'  alt='avatar' size={80} />}
                {layout === 'vertical' && <div className='welcome'>欢迎回来，Huzai！</div>}
                <img className='hand-down-nav' src={handDownIcon} alt='nav button'/>
                <Link to='/' className='logo'>
                    <img src={logo} alt="logo" className='logo'/>
                </Link>
                <Navbar className={layout} />
                <div className='function-area'>
                    <img src={searchIcon} alt='search icon'/>
                    <Avatar className='avatar' alt='avatar' id="avatar" size={40} />
                </div>
            </header>
            <Outlet/>
        </div>
    )
}