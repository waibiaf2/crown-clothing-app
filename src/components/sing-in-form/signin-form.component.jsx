import React, {useState, useEffect} from 'react';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';

/*Components*/
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

/*Styles*/
import './singin-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SigninFormComponent = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields
    
    /*Using google popup*/
    const SingIn = async () => {
        const {user} = await signInWithGooglePopup()
        const {userDocRef} = await createUserDocumentFromAuth(user);
        console.log(user);
    }
    
    //TODO: Make signin with google redirect work
    /*Using google redirect*/
   /* const SingIn = async () => {
        const {user} = await signInWithGoogleRedirect();
        if (user) {
            const {userDocRef} = await createUserDocumentFromAuth(user);
            console.log(user);
        }
    }
    useEffect(() => {
        SingIn();
    }, []);*/
    
    const handleSubmit = e => {
        e.preventDefault();
    };
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields);
    };
    
    return (
        <div className="signin-form-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form action=''  onSubmit={handleSubmit}>
                <FormInputComponent
                    label="Email"
                    type="text"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInputComponent
                    label="Password"
                    type="text"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className='buttons-container'>
                    <ButtonComponent>Sign In</ButtonComponent>
                    <ButtonComponent buttonType="google" onClick={SingIn}>Sign In With Google</ButtonComponent>
                </div>
            </form>
        
        </div>
    );
};

export default SigninFormComponent;