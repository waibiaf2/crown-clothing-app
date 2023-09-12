import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
    } from './../../utils/firebase/firebase.utils'


import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
import SigninFormComponent from "../../components/sing-in-form/signin-form.component";

import './signin.styles.scss';

const SinginComponent = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const {userDocRef} = await createUserDocumentFromAuth(user);
        console.log(user);
    }
    
    return (
        <div className='signin-container'>
            <SigninFormComponent/>
            <SignUpFormComponent/>
        </div>
    );
};

export default SinginComponent;