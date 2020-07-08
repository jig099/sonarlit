var app = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');
require('firebase/firestore');
require('firebase/functions');

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBC1ZYTy5yO4K62yvPJqB3ue80u1uY_iY",
    authDomain: "sonarlit-41184.firebaseapp.com",
    databaseURL: "https://sonarlit-41184.firebaseio.com",
    projectId: "sonarlit-41184",
    storageBucket: "sonarlit-41184.appspot.com",
    messagingSenderId: "460730671530",
    appId: "1:460730671530:web:08c32e7a68b0b224c4cbd3",
    measurementId: "G-8XP3Y7DZMS"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.database();
        this.storage = app.storage();
        this.cloud = app.firestore();
        this.functions = app.functions();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword(email, password){
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut(){
        return this.auth.signOut();
    }

    doPasswordReset(email){
        return this.auth.sendPasswordResetEmail(email);
    }

    doPasswordUpdate(password){
        return this.auth.currentUser.updatePassword(password);
    }

    // *** User API ***
    get_current_user(){
        return this.auth.currentUser;
    }
}
module.exports = Firebase;
