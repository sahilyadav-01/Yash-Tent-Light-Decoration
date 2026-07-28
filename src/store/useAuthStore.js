import { create } from 'zustand';

// Mock User Data
const MOCK_ADMIN = { id: 1, name: 'Admin', email: 'admin@yashtent.com', role: 'admin' };
const MOCK_CUSTOMER = { id: 2, name: 'Test Customer', email: 'customer@example.com', role: 'customer' };

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('yash_user')) || null,
  isAuthenticated: !!localStorage.getItem('yash_user'),
  
  login: async (email, password) => {
    // Mock API Call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@yashtent.com' && password === 'admin123') {
          localStorage.setItem('yash_user', JSON.stringify(MOCK_ADMIN));
          set({ user: MOCK_ADMIN, isAuthenticated: true });
          resolve(MOCK_ADMIN);
        } else if (email === 'customer@example.com' && password === 'password123') {
          localStorage.setItem('yash_user', JSON.stringify(MOCK_CUSTOMER));
          set({ user: MOCK_CUSTOMER, isAuthenticated: true });
          resolve(MOCK_CUSTOMER);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  },
  
  logout: () => {
    localStorage.removeItem('yash_user');
    set({ user: null, isAuthenticated: false });
  },

  register: async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { id: 3, name: data.name, email: data.email, role: 'customer' };
        localStorage.setItem('yash_user', JSON.stringify(newUser));
        set({ user: newUser, isAuthenticated: true });
        resolve(newUser);
      }, 1000);
    });
  }
}));
