import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyCw2tGbnlvaBp6PFiF6b6VwGuhsWZCaMIA",
    authDomain: "password-manager-e57aa.firebaseapp.com",
    databaseURL: "https://password-manager-e57aa.firebaseio.com",
    projectId: "password-manager-e57aa",
    storageBucket: "password-manager-e57aa.appspot.com",
    messagingSenderId: "969285390412",
    appId: "1:969285390412:web:d71341992e603c517064e9"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout = () => {
        return this.auth.signOut();
    };

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);

        return this.auth.currentUser.updateProfile({
            displayName: name
        });
    }

    deleteUser = async () => {
        await this.db.collection('users').doc(this.auth.currentUser.uid).delete();

        return this.auth.currentUser.delete();
    };

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    }

    async getCurrentUserPasswords() {
        const passwords = await this.db.collection('users').doc(this.auth.currentUser.uid).get();

        return passwords.get('passwords');
    }

    setUserPasswords(passwords) {
        return this.db.collection('users').doc(this.auth.currentUser.uid).set(
            {passwords}
        )
    }
}

export default new Firebase();