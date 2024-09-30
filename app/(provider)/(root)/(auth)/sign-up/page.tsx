"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const router = useRouter();

  const handleClickSignUpButton = () => {
    if (!email.includes("@") || !email.includes("."))
      return alert("이메일 형식을 맞추어 입력해주세요!");
    if (!password) return alert("비밀번호를 입력해주세요!");
    if (!checkPassword) return alert("비밀번호를 다시한번 입력해주세요!");
    if (password !== checkPassword)
      return alert("비밀번호가 일치하지 않습니다!");

    const data = {
      email,
      password,
    };

    console.log(data);

    router.push("/");
  };

  return (
    <main>
      <h2 className="text-center mt-10 font-bold text-4xl">회원가입</h2>
      <section className="flex items-center justify-center flex-col gap-y-5">
        <div className="grid mt-10">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block border w-[400px] px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block border w-[400px] px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호 확인</label>
          <input
            type="password"
            id="password"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            className="block border w-[400px] px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>

        <button
          className="border border-black bg-black text-white w-[400px] h-[60px] mt-10 hover:-translate-y-2 transition-all"
          onClick={handleClickSignUpButton}
        >
          회원가입하기
        </button>
      </section>
    </main>
  );
}

export default LogInPage;
