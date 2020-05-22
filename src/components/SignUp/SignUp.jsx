import React, { Component } from 'react';

import './SignUp.styles.scss';
import FormInput from '../UI/FormInput/FormInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    submitHandler = async (event) => {
        event.preventDefault();
        const { displayName } = this.state;
        if (this.state.password !== this.state.confirmPassword) {
            alert('passwords does not match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
            createUserProfileDocument(user, { displayName } );
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.log(error);
            
        }
    }
    
    inputChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value}); 
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.submitHandler}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} label="Display Name" onChange={this.inputChangeHandler} required></FormInput>
                    <FormInput type="email" name="email" value={this.state.email} label="Email" onChange={this.inputChangeHandler} required></FormInput>
                    <FormInput type="password" name="password" value={this.state.password} label="Password" onChange={this.inputChangeHandler} required></FormInput>
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} label="Confirm Password" onChange={this.inputChangeHandler} required></FormInput>
                    <CustomButton type="Submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}



export default SignUp;