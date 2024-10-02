"use client";

import ballangAPI, { Cart, CartItem, getCart } from "@/api/ballangAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CartPage() {
  // cart에 담긴 정보 저장하기
  const [cart, setCart] = useState<Cart | null>(null);

  // 수량 저장하기
  const [value, setValue] = useState(1);

  // Cart에 들어있는 데이터 불러오기
  useEffect(() => {
    (async () => {
      const cart = await getCart();
      console.log(cart);
      setCart(cart);
    })();
  }, []);

  // 수량 추가 버튼
  const handleClickAddItem = () => {
    setValue((prev) => prev + 1);
  };

  // 수량 차감, 제거 버튼
  const handleClickRemoveItemFromCart = async (productId: string) => {
    setValue((prev) => prev - 1);
    if (value === 1) {
      await ballangAPI.delete(`/cart/products/${productId}`);

      // 항목 제거 후 cart 상태 업데이트
      setCart((prevCart) => ({
        ...prevCart!,
        items: prevCart!.items.filter(
          (item) => String(item.product.id) !== productId
        ),
      }));
    }
  };

  return (
    <main className="text-center">
      {/* 배열 자체로 true라서 배열의 길이로 참/거짓을 체크 */}
      {!!cart?.items.length ? (
        <section className="p-5 ">
          <h2 className="font-bold text-3xl my-10">장바구니</h2>
          <ul>
            {cart.items.map((item) => (
              <li
                key={item.id}
                className="mt-5 grid grid-cols-3 items-center place-items-center border-b"
              >
                <Link href={`/products/${item.product.id}`}>
                  <img
                    src={item.product.imgSrc}
                    alt="상품 이미지"
                    className="w-44 aspect-[3/4]"
                  />
                </Link>

                <ul className="flex flex-col items-start gap-y-3 w-[600px]">
                  <li className="font-bold">
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
                  <button
                    className="border border-black bg-black text-white w-[20px]"
                    onClick={() =>
                      handleClickRemoveItemFromCart(String(item.product.id))
                    }
                  >
                    -
                  </button>
                  <span className="border border-black inline-block w-[20px]">
                    {value}
                  </span>
                  <button
                    className="border border-black bg-black text-white w-[20px]"
                    onClick={handleClickAddItem}
                  >
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
