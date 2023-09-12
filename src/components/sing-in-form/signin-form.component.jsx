import React, {useState} from 'react';
import FormInputComponent from "../form-input/form-input.component";
import {
    signInWithGoogleRedirect,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';

import ButtonComponent from "../button/button.component";
import './singin-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}


const SigninFormComponent = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields
    const handleSubmit = e => {
        e.preventDefault();
        
    };
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    };
    
    return (
        <div className="signin-form-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form action=''  onSubmit={handleSubmit}>
                <FormInputComponent
                    label="Email"
                    inputOptions={{
                        type:"email",
                        required:true,
                        onChange:handleChange,
                        name:email,
                        value:email
                    }}
                />
                <FormInputComponent
                    label="Password"
                    inputOptions={{
                        type:"Password",
                        required:true,
                        onChange:handleChange,
                        name:password,
                        value:password
                    }}
                />
                <div className='buttons-container'>
                    <ButtonComponent buttonType="inverted">Sign In</ButtonComponent>
                    <ButtonComponent buttonType="google">Sign In With Google</ButtonComponent>
                </div>
            </form>
        
        </div>
    );
};

export default SigninFormComponent;