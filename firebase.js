import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4ipRYRGxqKsP0xzGiVH1GmA47K3AjxMM",
    authDomain: "chatty-next.firebaseapp.com",
    projectId: "chatty-next",
    storageBucket: "chatty-next.appspot.com",
    messagingSenderId: "70200063762",
    appId: "1:70200063762:web:2893c71377b5266b0725cb"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()


  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }