import React, {useState} from 'react';
import toast from 'react-hot-toast';


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect, signInAuthUserWithEmailAndPassword
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
    const SingInWithGoogle = async () => {
        await signInWithGooglePopup()
    }
    
    //TODO: Make authentication with google redirect work
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
           
            resetFormFields();
        } catch (e) {
            console.log(e);
            switch (e.code) {
                case 'auth/wrong-password':
                    toast.error('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    toast.error('User not found, ensure that the email is correct...');
                    break;
                default:
                    toast.error('Something went wrong');
            }
        }
    };
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
        // console.log(formFields);
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
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className='buttons-container'>
                    <ButtonComponent onClick={handleSubmit}>Sign In</ButtonComponent>
                    <ButtonComponent type="button" buttonType="google" onClick={SingInWithGoogle}>Sign In With Google</ButtonComponent>
                </div>
            </form>
        
        </div>
    );
};

export default SigninFormComponent;