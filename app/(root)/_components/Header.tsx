import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-5 flex items-center justify-between border-b ">
      <nav className="flex gap-x-20 items-center">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold ml-3">발랑</h1>
        </Link>
        <span>BRANDS</span>
      </nav>

      <nav className="flex gap-x-3 items-center">
        <Link href={"/sign-up"}>회원가입</Link>
        <Link href={"/log-in"}>로그인</Link>
      </nav>
    </header>
  );
}

export default Header;
