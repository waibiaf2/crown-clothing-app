import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDfnyDKf1FqG4hkFVUWfMitrfCx0kJMcc",
    authDomain: "crown-clothing-db-427b8.firebaseapp.com",
    projectId: "crown-clothing-db-427b8",
    storageBucket: "crown-clothing-db-427b8.appspot.com",
    messagingSenderId: "250639586687",
    appId: "1:250639586687:web:e75e9a910497985174f64a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => await signOut(auth);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if(!userAuth)  return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    
    const userSnapShot = await getDoc(userDocRef);
    // console.log(userSnapShot);
    // console.log(userSnapShot.exists());
    
    
    if (!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch (e) {
            console.log('Error creating user', e);
        }
    }
    return userDocRef;
}


