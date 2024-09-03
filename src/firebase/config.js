import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnfSO349MqbbrS1phfpYIs3mEolZvLisw",
    authDomain: "course-app-edbd7.firebaseapp.com",
    projectId: "course-app-edbd7",
    storageBucket: "course-app-edbd7.appspot.com",
    messagingSenderId: "791895292156",
    appId: "1:791895292156:web:e1a5905379814c7716bf79"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
