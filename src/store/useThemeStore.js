import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem('yash_theme') || 'light',
  
  setTheme: (theme) => {
    localStorage.setItem('yash_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ theme });
  },

  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('yash_theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { theme: newTheme };
  }),
  
  initTheme: () => {
    const theme = localStorage.getItem('yash_theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
}));
