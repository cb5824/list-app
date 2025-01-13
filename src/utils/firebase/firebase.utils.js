import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOHVyyRJbmvbXx0wKPP572VvfN6colXGM",
    authDomain: "list-app-cc8fe.firebaseapp.com",
    projectId: "list-app-cc8fe",
    storageBucket: "list-app-cc8fe.firebasestorage.app",
    messagingSenderId: "728561425403",
    appId: "1:728561425403:web:bf3d9559941a601702095e"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore(firebaseApp);
