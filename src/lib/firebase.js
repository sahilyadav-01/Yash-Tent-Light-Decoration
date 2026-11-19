import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAnqTkb4EImqFnHHGKqRVLPwPBTAnrY5fw',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'yash-tent-light-decoration.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'yash-tent-light-decoration',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'yash-tent-light-decoration.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '481813980916',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:481813980916:web:688c0a1d053053d677e0a1',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-WBDY75ZZ6M',
};

const missingKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingKeys.length) {
  throw new Error(`Missing Firebase configuration: ${missingKeys.join(', ')}`);
}

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
