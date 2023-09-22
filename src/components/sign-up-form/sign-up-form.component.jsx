import React, {useState} from 'react';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

import './sign-up-form.styles.scss';
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
}

const SignUpFormComponent = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    let { displayName, email, password, confirmPassword  } = formFields;
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            // const response = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error',e);
            }
        }
    }
    
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInputComponent
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                
                <FormInputComponent
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                
                <FormInputComponent
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                
                <FormInputComponent
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <ButtonComponent type="submit">
                    Sing Up
                </ButtonComponent>
                
                {/* <FormInputComponent
                    label="Display Name"
                    inputOptions = {{
                        type:"text",
                        required:true,
                        onChange:handleChange,
                        name:displayName,
                        value:displayName
                    }}
                />
                
                <FormInputComponent
                    label="Email"
                    inputOptions = {{
                        type:"email",
                        required:true,
                        onChange:handleChange,
                        name:email,
                        value:email
                    }}
                />
                
                <FormInputComponent
                    label="Password"
                    inputOptions = {{
                        type:"password",
                        required:true,
                        onChange:handleChange,
                        name:password,
                        value:password
                    }}
                />
                
                <FormInputComponent
                    label="Password Confirm"
                    inputOptions = {{
                        type:"password",
                        required:true,
                        onChange:handleChange,
                        name:confirmPassword,
                        value:password
                    }}
                />
                <ButtonComponent
                    type="submit">
                    Sing Up
                </ButtonComponent>*/}
                
            </form>
        </div>
    );
}

export default SignUpFormComponent;


