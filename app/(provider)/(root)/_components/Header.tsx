"use client";

import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import React from "react";

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <header className="p-5 flex items-center justify-between border-b ">
      <nav className="flex gap-x-20 items-center">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold ml-3">발랑</h1>
        </Link>
        <Link href={"/brands"}>
          <span>BRANDS</span>
        </Link>
      </nav>

      {isLoggedIn ? (
        <div>로그인 중</div>
      ) : (
        <nav className="flex gap-x-3 items-center">
          <Link href={"/sign-up"}>회원가입</Link>
          <Link href={"/log-in"}>로그인</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
