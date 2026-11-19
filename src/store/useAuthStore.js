import { create } from 'zustand';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const ADMIN_EMAILS = [
  'raosumityadav420@gmail.com',
  'admin@yashtent.com',
  'raosahil8290@gmail.com'
];

const isAdminEmail = (email) => ADMIN_EMAILS.includes((email || '').toLowerCase().trim());

const toAppUser = (firebaseUser, profile = {}) => {
  const isAdmin = isAdminEmail(firebaseUser.email) || profile.role === 'admin';
  return {
    id: firebaseUser.uid,
    name: profile.name || firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Customer',
    email: firebaseUser.email,
    role: isAdmin ? 'admin' : (profile.role || 'customer'),
  };
};

let stopAuthListener;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isInitializing: true,

  getRateLimitStatus: () => ({ isLocked: false, secondsRemaining: 0, attempts: 0 }),

  initialize: () => {
    if (stopAuthListener) return stopAuthListener;

    stopAuthListener = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        set({ user: null, isAuthenticated: false, isInitializing: false });
        return;
      }

      try {
        const userRef = doc(db, 'users', firebaseUser.uid);
        const snapshot = await getDoc(userRef);
        let profile = snapshot.exists() ? snapshot.data() : null;

        if (!profile) {
          const role = isAdminEmail(firebaseUser.email) ? 'admin' : 'customer';
          profile = {
            name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Customer',
            email: firebaseUser.email,
            role,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };
          await setDoc(userRef, profile);
        }

        set({ user: toAppUser(firebaseUser, profile), isAuthenticated: true, isInitializing: false });
      } catch (error) {
        console.error('Unable to load Firebase user profile:', error);
        set({ user: toAppUser(firebaseUser), isAuthenticated: true, isInitializing: false });
      }
    });

    return stopAuthListener;
  },

  login: async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
    const profileSnapshot = await getDoc(doc(db, 'users', credential.user.uid));
    const user = toAppUser(credential.user, profileSnapshot.exists() ? profileSnapshot.data() : {});
    set({ user, isAuthenticated: true });
    return user;
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null, isAuthenticated: false });
  },

  register: async ({ name, email, password }) => {
    const credential = await createUserWithEmailAndPassword(auth, email.trim(), password);
    await updateProfile(credential.user, { displayName: name.trim() });

    const role = isAdminEmail(credential.user.email) ? 'admin' : 'customer';
    const profile = {
      name: name.trim(),
      email: credential.user.email,
      role,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(doc(db, 'users', credential.user.uid), profile);

    const user = toAppUser(credential.user, profile);
    set({ user, isAuthenticated: true });
    return user;
  },

  resetPassword: (email) => sendPasswordResetEmail(auth, email.trim()),
}));
