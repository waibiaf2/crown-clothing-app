import React from 'react';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
    } from './../../utils/firebase/firebase.utils'

const SingninComponent = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const {userDocRef} = await createUserDocumentFromAuth(user);
        
        console.log(user);
    }
    
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sing in with Google
            </button>
        </div>
    );
};

export default SingninComponent;