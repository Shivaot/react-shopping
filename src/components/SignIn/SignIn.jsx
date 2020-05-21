import React, { Component } from 'react';

import FormInput from '../UI/FormInput/FormInput';
import './SignIn.styles.scss';
import CustomButton from '../UI/CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    inputChangeHandler = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.inputChangeHandler} required />
                    <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.inputChangeHandler} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>{' '} Sign in with Google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;