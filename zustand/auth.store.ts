import { create } from "zustand";

// 로그인 상태 + Modal 상태 관리

type AuthStoreState = {
  isAuthInitialized: boolean;
  isLoggedIn: boolean;
  isModal: boolean;
  initializeAuth: () => void;
  setIsModal: (isModal: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const useAuthStore = create<AuthStoreState>((set) => ({
  isModal: false,
  isLoggedIn: false,
  isAuthInitialized: false,
  setIsModal: (isModal: boolean) => set({ isModal }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  initializeAuth: () => set({ isAuthInitialized: true }),
}));
