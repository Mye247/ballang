"use client";

import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import ModalPage from "./Modal";
import { LogOut } from "@/api/ballangAPI";

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const isModal = useAuthStore((state) => state.isModal);
  const setIsModal = useAuthStore((state) => state.setIsModal);

  const handleToggleModal = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  const handleClickLogOut = async () => {
    const result = await LogOut();
    console.log(result);
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다!");
  };
  return (
    <>
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
          <nav className="flex gap-x-3 items-center">
            <Link href={"/cart"}>장바구니</Link>
            <button onClick={handleClickLogOut}>로그아웃</button>
          </nav>
        ) : (
          <nav className="flex gap-x-3 items-center">
            <Link href={"/sign-up"}>회원가입</Link>

            <button onClick={handleToggleModal}>로그인</button>
          </nav>
        )}
      </header>

      {isModal === true ? <ModalPage /> : null}
    </>
  );
}

export default Header;
