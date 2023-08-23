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


//Access token
//eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzODBlZjEyZjk1ZjkxNmNhZDdhNGNlMzg4ZDJjMmMzYzIzMDJmZGUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQW5kcmV3IEZyYW5rbGluIFdhaWJpIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGVNeFNNMVBtTVhKOTFpaUVIZ2VNUkR0SVlhSXo5Rk5GalhyQnRiWXRXNj1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jcm93bi1jbG90aGluZy1kYi00MjdiOCIsImF1ZCI6ImNyb3duLWNsb3RoaW5nLWRiLTQyN2I4IiwiYXV0aF90aW1lIjoxNjkyNzY0NzE2LCJ1c2VyX2lkIjoiTTA5dmhaRUg2b1RuNWZlZTZlckkxVjZicVJ4MSIsInN1YiI6Ik0wOXZoWkVINm9UbjVmZWU2ZXJJMVY2YnFSeDEiLCJpYXQiOjE2OTI3NjQ3MTYsImV4cCI6MTY5Mjc2ODMxNiwiZW1haWwiOiJ3YWliaWFmNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMTk3NjgxMDYyNDY3MjQ0NzE0MCJdLCJlbWFpbCI6WyJ3YWliaWFmNUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.Ho4bhcrYr40N4oJn7qMGDacGi_b2Gjqj9zhYzuT6mx3exPKZSCpu2GVyqnl7EmXzwDNK9tlubf3tp8zucvcGbUkUwK4YXiQFr0EUYptpkRvHIm2m-ukHCNZzdaDEpsmNsAhDhjLeErOCdyV-o9Ez9kJISZpmwMlnikbaiAjF2BwdE-NOnay6kOgy_rFz7fdfW0IvyPieSlqK2K6eUD4JivcShdza9a4_jmaiKjg9VEI0SlKec495PCuW7mlzO19kMkbobgu-zEcALkevi93GeQysa5KWY79iBm9moMWYyVpQIMXuxKy2teoZdsqPE8x_wllrzV1VzYYxUCWG4gRohw

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

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