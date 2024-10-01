/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useAuthStore } from "@/zustand/auth.store";
import React, { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    //로그인 정보가 있는지 확인하기
  }, []);

  return children;
}

export default AuthProvider;
