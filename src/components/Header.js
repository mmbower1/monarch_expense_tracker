import React from 'react';
import logo from '../img/monarch-logo2400.png'

const Header = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt='logo' className='logo' />
        </div>
        
    )
}

export default Header;