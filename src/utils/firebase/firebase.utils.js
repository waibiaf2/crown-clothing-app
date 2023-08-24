import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider } from 'firebase/auth'
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


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users',userAuth.uid);
    
    const userSnapShot = await getDoc(userDocRef);
    
    if (!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }catch (e) {
            console.log('Error creating user', e);
        }
    }
    return userDocRef;
}
