import { Link, Outlet, useLocation } from "react-router-dom";

import {useSelector} from "react-redux";

import logo from '/logo_v2_t.png'

import handDownIcon from '../../assets/icons/hand-down.png'
import searchIcon from '../../assets/icons/search.svg'

import './Header.scss'
import Navbar from '../Navbar/Navbar.jsx'
import Avatar from '../Avatar/Avatar.jsx'
import {useEffect, useRef, useState} from "react";


function FunctionArea({avatar}) {
    return (
        <div className='function-area'>
            <img src={searchIcon} alt='search icon'/>
            <Link to='/dashboard'>
                <Avatar src={avatar}/>
            </Link>
        </div>
    )
}

function SideHeader({avatar}) {
    return (
        <div className='side-header'>
            <Navbar isVertical={true}/>
            <FunctionArea avatar={avatar}/>
        </div>
    )
}

export default function Header({layout}) {
    const location = useLocation();
    const pageState = useSelector(state => state.page);
    const [isFoldSideHeader, setSideHeaderFoldState] = useState(true)
    const ref = useRef()

    useEffect(() => {
        const handleClick = () => {
            setSideHeaderFoldState(true)
        }
            window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, []);

    const slash = location.pathname.split('/').length - 1
    if (location.pathname === '/' || (slash >=2 && !location.pathname.endsWith('/'))) {
        layout = 'horizon'
    } else {
        layout = 'vertical'
    }


    function handleNavClick(e) {
        e.stopPropagation()
        setSideHeaderFoldState(!isFoldSideHeader)
    }

    const {username, avatar} = pageState.userInfo
    return (
        <div className={layout}>
            <header className={layout}>
                {layout === 'vertical' && <Avatar src={avatar}/>}
                {layout === 'vertical' && <div className='welcome'>欢迎回来，{username ? username : '游客'}！</div>}
                {!isFoldSideHeader && <SideHeader avatar={avatar}/>}
                <img onClick={handleNavClick} ref={ref} className='hand-down-nav' src={handDownIcon} alt='nav button'/>
                <Link to='/' className='logo'>
                    <img src={logo} tabIndex='-1' alt="logo" className='logo'/>
                </Link>

                <Navbar isVertical={layout === 'vertical'}/>

                <FunctionArea avatar={avatar}/>
            </header>
            <Outlet/>
        </div>
    )
}