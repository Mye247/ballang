import Link from "next/link";
import React from "react";

function CartPage() {
  return (
    <main className="text-center">
      <div>
        <h2 className="font-bold text-4xl mt-10">장바구니</h2>
        <p className="mt-10">장바구니가 비어 있습니다.</p>

        <Link href={"/"}>
          <button className="border mt-10 w-64 h-14 b border-black font-semibold hover:-translate-y-1 transition-all">
            쇼핑하러 가기
          </button>
        </Link>
      </div>
    </main>
  );
}

export default CartPage;
