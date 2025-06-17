import {create} from 'zustand';

interface User {
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  isLoggedIn: false,
  user: null,

  login: (email: string) => {
    const user: User = {
      email,
    };
    set({
      isLoggedIn: true,
      user,
    });
  },

  logout: () => {
    set({
      isLoggedIn: false,
      user: null,
    });
  },
}));
