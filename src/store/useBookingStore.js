import { create } from 'zustand';

// Mock Bookings Data
const MOCK_BOOKINGS = [
  {
    id: 'BKG-1001',
    eventType: 'Wedding',
    date: '2026-12-15',
    venue: 'Royal Palace, Lucknow',
    status: 'Confirmed',
    package: 'Platinum',
    amount: 1500000,
    customerEmail: 'customer@example.com'
  },
  {
    id: 'BKG-1002',
    eventType: 'Corporate',
    date: '2026-11-20',
    venue: 'Taj Hotel',
    status: 'Pending',
    package: 'Gold',
    amount: 500000,
    customerEmail: 'customer@example.com'
  }
];

export const useBookingStore = create((set, get) => ({
  bookings: JSON.parse(localStorage.getItem('yash_bookings')) || MOCK_BOOKINGS,
  
  addBooking: (bookingData) => set((state) => {
    const newBooking = {
      ...bookingData,
      id: `BKG-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Pending',
      amount: Math.floor(Math.random() * 500000) + 50000 // Mock amount
    };
    const updatedBookings = [newBooking, ...state.bookings];
    localStorage.setItem('yash_bookings', JSON.stringify(updatedBookings));
    return { bookings: updatedBookings };
  }),

  getUserBookings: (email) => {
    return get().bookings.filter(b => b.customerEmail === email);
  },
  
  updateBookingStatus: (id, status) => set((state) => {
    const updatedBookings = state.bookings.map(b => 
      b.id === id ? { ...b, status } : b
    );
    localStorage.setItem('yash_bookings', JSON.stringify(updatedBookings));
    return { bookings: updatedBookings };
  }),
}));
