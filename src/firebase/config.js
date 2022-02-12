import * as firebase from 'firebase/app';
import 'firebase/storage'; //to store our images
import 'firebase/firestore';//used as our db


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGPHjkPrqzg_AQLS3Hiold7cqr4jJUXfI",
    authDomain: "firegram-fe277.firebaseapp.com",
    projectId: "firegram-fe277",
    storageBucket: "firegram-fe277.appspot.com",
    messagingSenderId: "251316834708",
    appId: "1:251316834708:web:d1e8b0b9f7f288ecdc3f81"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};