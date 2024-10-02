"use client";

import { Cart, CartItem, getCart } from "@/api/ballangAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  useEffect(() => {
    (async () => {
      const cart = await getCart();
      console.log(cart);
      setCart(cart);
    })();
  }, []);

  const handleClickAddItem = () => {};

  return (
    <main className="text-center">
      {!!cart?.items.length ? (
        <section className="p-5">
          <h2 className="font-bold text-3xl my-10">장바구니</h2>
          <ul>
            {cart.items.map((item) => (
              <li
                key={item.id}
                className="mt-5 grid grid-cols-3 items-center place-items-center"
              >
                <Link href={`/products/${item.product.id}`}>
                  <img src={item.product.imgSrc} alt="" className="w-44" />
                </Link>

                <ul className="flex flex-col items-start gap-y-3 w-[600px]">
                  <li>
                    {item.product.brand.nameKr}/{item.product.brand.nameEn}
                  </li>
                  <li>{item.product.name}</li>
                  <li>
                    <span className="text-red-500 line-through">
                      ₩{item.product.originalPrice.toLocaleString()}
                    </span>{" "}
                    ₩{item.product.price.toLocaleString()}
                  </li>
                  <li>당일배송 | 잔여재고 200ea</li>
                </ul>

                <div>
                  <button className="border border-black bg-black text-white w-[20px]">
                    -
                  </button>
                  <span className="border border-black inline-block w-[20px]">
                    0
                  </span>
                  <button className="border border-black bg-black text-white w-[20px]">
                    +
                  </button>
                </div>
              </li>
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
