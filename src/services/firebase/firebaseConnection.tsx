import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyCnOtbzmlG7iu6fffK-pQRFKq77JiePUPk",
  authDomain: "meuapp-c2e3c.firebaseapp.com",
  databaseURL: "https://meuapp-c2e3c.firebaseio.com",
  projectId: "meuapp-c2e3c",
  storageBucket: "meuapp-c2e3c.appspot.com",
  messagingSenderId: "410909676981",
  appId: "1:410909676981:web:fda0657916b4cd3e3ab5fc",
  measurementId: "G-ZFWKC7D6R5"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default firebase