import { create } from "zustand";
import { persist } from "zustand/middleware";

// 로그인 상태 + Modal 상태 관리

type AuthStoreState = {
  isAuthInitialized: boolean;
  isLoggedIn: boolean;
  isModal: boolean;
  // isCart: boolean;
  initializeAuth: () => void;
  setIsModal: (isModal: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  // setIsCart: (isCart: boolean) => void;
};

// persist이용 로그인 정보 저장해놓기
export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      isModal: false,
      isLoggedIn: false,
      isAuthInitialized: false,
      // isCart: false,
      // setIsCart: (isCart: boolean) => set({ isCart }),
      setIsModal: (isModal: boolean) => set({ isModal }),
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
      initializeAuth: () => set({ isAuthInitialized: true }),
    }),
    {
      name: "authStorage",
      getStorage: () => localStorage,
    }
  )
);
