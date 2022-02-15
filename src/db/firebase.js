import firebase from "firebase/app";
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCckalAwLHn-y-CrnICtduHFzfuFahy7gA",
    authDomain: "tienda-child.firebaseapp.com",
    projectId: "tienda-child",
    storageBucket: "tienda-child.appspot.com",
    messagingSenderId: "220732294072",
    appId: "1:220732294072:web:7665a8424ed8fb7547454d",
    measurementId: "G-7YS6VJMZSR"
})

export function getFirebase(){
    return app;
}

export function getFireStore(){
    return firebase.firestore(app);
}