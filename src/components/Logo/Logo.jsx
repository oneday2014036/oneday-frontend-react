import {useNavigate} from 'react-router-dom'

import logo_t from '/logo_v2_t.png';
import logo from '/logo_v2.png'

export default function Logo({isWithTitle}) {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate('/')
    }
    return (
        <img onClick={handleLogoClick} src={isWithTitle ? logo_t : logo} className='logo' alt='oneday logo'/>
    )
}


