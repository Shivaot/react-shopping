import React from 'react';
import { Link } from 'react-router-dom';

import './Header.styles.scss';
const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/" >
                <i class="fas fa-shopping-basket fa-3x" id="shop-logo"></i>
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >SHOP</Link>
                <Link className="option" to="/shop" >CONTACT</Link>
            </div>
        </div>
    );
}; 

export default Header;