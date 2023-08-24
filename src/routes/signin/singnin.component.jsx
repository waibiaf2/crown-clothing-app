import React, {useEffect, useState} from 'react';
import {getRedirectResult} from 'firebase/auth'
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
    } from './../../utils/firebase/firebase.utils'

const SingninComponent = () => {
    const creatUser = async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
            console.log(response.user);
        }
        return () => {
        
        };
    }
    
    useEffect(() => {
        creatUser();
    }, []);
    
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
            <button onClick={signInWithGoogleRedirect}>
                Sing in with Google Redirect
            </button>
        </div>
    );
};

export default SingninComponent;