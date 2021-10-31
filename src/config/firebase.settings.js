import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAGpG4zRYhsx5K3LFFhDF75fWDKiNYssGA',
    authDomain: 'single-page-app-778c8.firebaseapp.com',
    projectId: 'single-page-app-778c8',
    storageBucket: 'single-page-app-778c8.appspot.com',
    messagingSenderId: '692587699153',
    appId: '1:692587699153:web:0dd72533a8f43c84601ef0',
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
