import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'; //to store our images
import 'firebase/compat/firestore';//used as our db

//See here why firebase should be imported like that : 
// https://stackoverflow.com/questions/68946446/how-do-i-fix-a-firebase-9-0-import-error-attempted-import-error-firebase-app


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
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};