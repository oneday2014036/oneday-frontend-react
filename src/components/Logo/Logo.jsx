import {useNavigate} from 'react-router-dom'

import logo from '/logo_v2_t.png';

export default function Logo() {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate('/')
    }
    return (
        <img onClick={handleLogoClick} src={logo} className='logo' alt='oneday logo'/>
    )
}


