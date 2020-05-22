import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCS_n3FIZ3e1d0FjLUn86zJneUXZ6VZhNs",
    authDomain: "react-shop-3a58a.firebaseapp.com",
    databaseURL: "https://react-shop-3a58a.firebaseio.com",
    projectId: "react-shop-3a58a",
    storageBucket: "react-shop-3a58a.appspot.com",
    messagingSenderId: "806327980762",
    appId: "1:806327980762:web:c9dbbd4be3e9fdc8630be3",
    measurementId: "G-50TQ6ZS9KY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();   
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();  

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;