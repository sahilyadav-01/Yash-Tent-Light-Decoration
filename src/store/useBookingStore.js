import { create } from 'zustand';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

let stopBookingListener;
let activeUserId;

const mapBooking = (snapshot) => ({ id: snapshot.id, ...snapshot.data() });

export const useBookingStore = create((set, get) => ({
  bookings: [],
  isLoading: false,
  error: null,

  subscribe: (user) => {
    if (!user || activeUserId === `${user.id}:${user.role}`) return stopBookingListener;
    stopBookingListener?.();
    activeUserId = `${user.id}:${user.role}`;
    set({ isLoading: true, error: null });

    const bookingsRef = collection(db, 'bookings');
    const bookingsQuery = user.role === 'admin'
      ? bookingsRef
      : query(bookingsRef, where('userId', '==', user.id));

    stopBookingListener = onSnapshot(
      bookingsQuery,
      (snapshot) => {
        const bookings = snapshot.docs
          .map(mapBooking)
          .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
        set({ bookings, isLoading: false, error: null });
      },
      (error) => {
        console.error('Unable to load bookings:', error);
        set({ error: error.message, isLoading: false });
      },
    );

    return stopBookingListener;
  },

  clear: () => {
    stopBookingListener?.();
    stopBookingListener = undefined;
    activeUserId = undefined;
    set({ bookings: [], isLoading: false, error: null });
  },

  addBooking: async (bookingData) => {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) throw new Error('Please sign in before making a booking.');

    const amountByPackage = { Silver: 50000, Gold: 150000, Platinum: 300000, Custom: 0 };
    const booking = {
      name: bookingData.name.trim(),
      phone: bookingData.phone.trim(),
      email: bookingData.email.trim(),
      eventType: bookingData.eventType,
      package: bookingData.package,
      date: bookingData.eventDate,
      venue: bookingData.address?.trim() || 'To be confirmed',
      guests: bookingData.guests,
      requirements: bookingData.requirements?.trim() || '',
      userId: firebaseUser.uid,
      customerEmail: firebaseUser.email,
      status: 'Pending',
      amount: amountByPackage[bookingData.package] ?? 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const reference = await addDoc(collection(db, 'bookings'), booking);
    return { id: reference.id, ...booking };
  },

  getUserBookings: (email) => get().bookings.filter((booking) => booking.customerEmail === email),

  updateBookingStatus: async (id, status) => {
    await updateDoc(doc(db, 'bookings', id), { status, updatedAt: serverTimestamp() });
  },
}));
