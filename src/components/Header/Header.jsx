import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './Header.styles.scss';
const Header = (props) => {
    
    const handleSignOut = () => {
        auth.signOut();
        props.history.push("/");
    }
    
    return (
        <div className="header">
            <Link className="logo-container" to="/" >
                <i className="fas fa-shopping-basket fa-3x" id="shop-logo"></i>
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >SHOP</Link>
                <Link className="option" to="/shop" >CONTACT</Link>
                {props.currentUser ? <div className="option" onClick={handleSignOut}>SIGN OUT</div> : <Link to='/signin' className="option">SIGN IN</Link>}
            </div>
        </div>
    );
}; 

export default withRouter(Header);