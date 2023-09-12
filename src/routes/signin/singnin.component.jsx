

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
    } from './../../utils/firebase/firebase.utils'
import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";

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
                Sing in with Google PopUp
            </button>
            <SignUpFormComponent/>
        </div>
    );
};

export default SingninComponent;