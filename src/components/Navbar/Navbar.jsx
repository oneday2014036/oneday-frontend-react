import {useContext} from "react";
import { NavLink } from 'react-router-dom'

import navContext from '../../context/navContext.jsx'
import './Navbar.scss'

export default function Navbar(props) {
    const navItems = useContext(navContext)
    return (
        <nav {...props}>
            <ul>
                {Object.entries(navItems).map(item => {
                    const [name, path] = item;
                    return (<li key={path}><NavLink to={`/${path}`}>{name}</NavLink></li>)
                    })}
            </ul>
        </nav>
    )
}

{/*<li><NavLink to='/front-end'>前端笔记</NavLink></li>*/}
{/*<li><NavLink to='/reading'>读书笔记</NavLink></li>*/}
{/*<li><NavLink to='/translation'>翻译文章</NavLink></li>*/}
{/*<li><NavLink to='/onespace'>One导航</NavLink></li>*/}
{/*<li><NavLink to='/onetools'>工具箱</NavLink></li>*/}