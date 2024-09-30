import React from "react";

function LogInPage() {
  return (
    <main>
      <h2 className="text-center mt-10 font-bold text-4xl">회원가입</h2>
      <section className="flex items-center justify-center flex-col gap-y-5">
        <div className="grid mt-10">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            className="block border w-[400px] px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            className="block border w-[400px] px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호 확인</label>
          <input
            type="password"
            id="password"
            className="block border w-[400px] px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>

        <button className="border border-black bg-black text-white w-[400px] h-[60px] mt-10 hover:-translate-y-2 transition-all">회원가입하기</button>
      </section>
    </main>
  );
}

export default LogInPage;
