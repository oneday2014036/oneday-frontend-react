import {useContext} from "react";
import { NavLink } from 'react-router-dom'

import navContext from '../../context/navContext.jsx'
import './Navbar.scss'

export default function Navbar({isVertical}) {
    isVertical = isVertical ? isVertical: false
    const navItems = useContext(navContext)
    return (
        <nav className={isVertical ? 'vertical' : ''}>
            <ul>
                {Object.entries(navItems).map(item => {
                    const [name, path] = item;
                    return (<li key={path}><NavLink to={`/${path}`}>{name}</NavLink></li>)
                    })}
            </ul>
        </nav>
    )
}
