import { create } from 'zustand';

// Mock User Data
const MOCK_ADMIN = { id: 1, name: 'Admin (Sumit Yadav)', email: 'raosumityadav420@gmail.com', role: 'admin' };
const MOCK_CUSTOMER = { id: 2, name: 'Test Customer', email: 'customer@example.com', role: 'customer' };

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000; // 60 seconds cooldown

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('yash_user')) || null,
  isAuthenticated: !!localStorage.getItem('yash_user'),
  
  // Rate Limit Inspector helper
  getRateLimitStatus: () => {
    try {
      const data = JSON.parse(localStorage.getItem('yash_login_rate_limit') || '{}');
      const now = Date.now();
      if (data.lockoutUntil && now < data.lockoutUntil) {
        return {
          isLocked: true,
          secondsRemaining: Math.ceil((data.lockoutUntil - now) / 1000),
          attempts: data.attempts || 0
        };
      }
      return {
        isLocked: false,
        secondsRemaining: 0,
        attempts: data.attempts || 0
      };
    } catch {
      return { isLocked: false, secondsRemaining: 0, attempts: 0 };
    }
  },

  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const now = Date.now();
        let rateLimitData = { attempts: 0, lockoutUntil: 0 };
        try {
          rateLimitData = JSON.parse(localStorage.getItem('yash_login_rate_limit') || '{"attempts":0,"lockoutUntil":0}');
        } catch {
          rateLimitData = { attempts: 0, lockoutUntil: 0 };
        }

        // Check active lockout
        if (rateLimitData.lockoutUntil && now < rateLimitData.lockoutUntil) {
          const secondsRemaining = Math.ceil((rateLimitData.lockoutUntil - now) / 1000);
          return reject(new Error(`Account temporarily locked due to multiple failed attempts. Please wait ${secondsRemaining}s.`));
        }

        const normalizedEmail = (email || '').trim().toLowerCase();
        const isAdmin = (normalizedEmail === 'raosumityadav420@gmail.com' || normalizedEmail === 'admin@yashtent.com') && password === 'admin123';
        const isCustomer = normalizedEmail === 'customer@example.com' && password === 'password123';

        if (isAdmin || isCustomer) {
          // Reset rate limit on success
          localStorage.removeItem('yash_login_rate_limit');

          const loggedInUser = isAdmin ? MOCK_ADMIN : MOCK_CUSTOMER;
          localStorage.setItem('yash_user', JSON.stringify(loggedInUser));
          set({ user: loggedInUser, isAuthenticated: true });
          resolve(loggedInUser);
        } else {
          // Increment failed attempt count
          const newAttempts = (rateLimitData.attempts || 0) + 1;
          
          if (newAttempts >= MAX_FAILED_ATTEMPTS) {
            const lockoutUntil = now + LOCKOUT_DURATION_MS;
            localStorage.setItem('yash_login_rate_limit', JSON.stringify({ attempts: newAttempts, lockoutUntil }));
            return reject(new Error(`Too many failed login attempts! Login locked for 60 seconds.`));
          } else {
            localStorage.setItem('yash_login_rate_limit', JSON.stringify({ attempts: newAttempts, lockoutUntil: 0 }));
            const remaining = MAX_FAILED_ATTEMPTS - newAttempts;
            return reject(new Error(`Invalid email or password. ${remaining} attempt${remaining > 1 ? 's' : ''} remaining.`));
          }
        }
      }, 700);
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
