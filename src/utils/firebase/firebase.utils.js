import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

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

/*Create an instance of Google auth provider*/
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

/*Create an instanace of getAuth*/
export const auth = getAuth();

/*Configuration to signup with google popup*/
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

/*Configuration to signup with google redirect*/
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

/*Configuration to signup with an email and a password*/
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth,email,password)
}

/*Sign in a user using and email and password*/
export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth,email,password)
}

/*A signout method from firebase -> signs out the current user*/
export const signOutUser = async () => await signOut(auth);

/*An auth observer to watch the changes happening in the singleton method from firebase/auth */
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

/*Initiating a database instance for firestore*/
export const db = getFirestore();

/*{
    hats: {
        title: 'Hats',
        items: [
            {},
            {}
        ]
    },
    sneakers: {
        title: 'Sneakers',
        items: [
            {},
            {}
        ]
    }
}*/

export const getCategoriesAndDocuments = async () =>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapShot = await getDocs(q);
    return querySnapShot.docs.map(docSnapshot => docSnapshot.data());
  /*  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
        const {title, items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc
    },{})*/

   /* return categoryMap;*/
}

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    })

    await batch.commit();
    console.log('done');
}

/*Create a user document in based on the authentication approach and save it into the db firestore instance*/
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


