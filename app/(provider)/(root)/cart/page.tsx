"use client";

import { getCart } from "@/api/ballangAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CartPage() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getCart();
      console.log(data.result.items);
      setCarts(data.result.items);
    })();
  }, []);
  return (
    <main className="text-center">
      {carts ? (
        <div>
          <h2 className="font-bold text-4xl mt-10">장바구니</h2>
          <p className="mt-10">장바구니가 비어 있습니다.</p>

          <Link href={"/"}>
            <button className="border mt-10 w-64 h-14 b border-black font-semibold hover:-translate-y-1 transition-all">
              쇼핑하러 가기
            </button>
          </Link>
        </div>
      ) : (
        <ul>
          {carts.map((cart) => (
            <li key={cart.id}>{cart.id}</li>
          ))}
        </ul>
      )}
      <div></div>
    </main>
  );
}

export default CartPage;
