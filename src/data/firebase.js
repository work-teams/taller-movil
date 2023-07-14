import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXgr3MrIv_cwa6O0L6DGZKyM24Nz3Wyk0",
    authDomain: "taller-movil-app.firebaseapp.com",
    projectId: "taller-movil-app",
    storageBucket: "taller-movil-app.appspot.com",
    messagingSenderId: "888427391833",
    appId: "1:888427391833:web:fefa3de5fd675739acfa48",
    measurementId: "G-X68ETRDSNF"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };