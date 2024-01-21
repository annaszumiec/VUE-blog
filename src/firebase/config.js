
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCv6cLaIp_XEZMaJo78zBQVCPEIiU1Qw2M",
    authDomain: "vue-sites-51612.firebaseapp.com",
    projectId: "vue-sites-51612",
    storageBucket: "vue-sites-51612.appspot.com",
    messagingSenderId: "447814642503",
    appId: "1:447814642503:web:ee547c466bfabacc5e3a62"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }
