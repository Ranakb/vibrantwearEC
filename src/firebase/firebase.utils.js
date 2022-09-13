import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCYKXsdleu5k0c0Zvl8XOq6VDnDsbCByUk',
  authDomain: 'vibrantwear-c7a44.firebaseapp.com',
  projectId: 'vibrantwear-c7a44',
  storageBucket: 'vibrantwear-c7a44.appspot.com',
  messagingSenderId: '871972342111',
  appId: '1:871972342111:web:fdd268d1f6442909a34eea',
  measurementId: 'G-3FL44CM9W5',
};
    
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
