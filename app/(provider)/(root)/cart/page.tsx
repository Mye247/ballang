"use client";

import ballangAPI, { Cart, getCart } from "@/api/ballangAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartItem from "../_components/CartItem";

function CartPage() {
  // cart에 담긴 정보 저장하기
  const [cart, setCart] = useState<Cart | null>(null);

  // Cart에 들어있는 데이터 불러오기
  useEffect(() => {
    (async () => {
      const cart = await getCart();
      console.log(cart);
      setCart(cart);
    })();
  }, []);

  return (
    <main className="text-center">
      {/* 배열 자체로 true라서 배열의 길이로 참/거짓을 체크 */}
      {!!cart?.items.length ? (
        <section className="p-5 ">
          <h2 className="font-bold text-3xl my-10">장바구니</h2>
          <ul>
            {cart.items.map((item) => (
              <CartItem item={item} />
            ))}
          </ul>
        </section>
      ) : (
        <section>
          <h2 className="font-bold text-4xl mt-10">장바구니</h2>
          <p className="mt-10">장바구니가 비어 있습니다.</p>

          <Link href={"/"}>
            <button className="border mt-10 w-64 h-14 b border-black font-semibold hover:-translate-y-1 transition-all">
              쇼핑하러 가기
            </button>
          </Link>
        </section>
      )}
    </main>
  );
}

export default CartPage;
