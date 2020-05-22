import React from 'react';

import './AuthPage.styles.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const AuthPage = () => {
    return (
        <div className="auth-page">
            <SignIn />
            <SignUp />
        </div>
        
    );
};

export default AuthPage;