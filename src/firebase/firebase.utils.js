import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyK-eERbS5N0cX_0wjEXA6hQYxG93AQ_Q",
    authDomain: "crwn-db-7465b.firebaseapp.com",
    databaseURL: "https://crwn-db-7465b.firebaseio.com",
    projectId: "crwn-db-7465b",
    storageBucket: "crwn-db-7465b.appspot.com",
    messagingSenderId: "642613762010",
    appId: "1:642613762010:web:f20946746af1fdfbf252e3",
    measurementId: "G-QCMX2YVYGH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;