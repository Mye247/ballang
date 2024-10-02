"use client";

import ballangAPI, { Product } from "@/api/ballangAPI";
import { useAuthStore } from "@/zustand/auth.store";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function BrandDetailPage() {
  const { productId } = useParams();

  const [value, setValue] = useState<Product | null>(null);
  console.log(value);

  const setIsModal = useAuthStore((state) => state.setIsModal);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    (async () => {
      const response = await ballangAPI.get(`/products/${productId}`);
      const data = response.data;

      console.log(data);

      setValue(data.result);
    })();
  }, [productId]);

  if (!value) {
    return <div>로딩중입니다....</div>;
  }

  const handleClickAddCart = async () => {
    if (!isLoggedIn) return setIsModal(true);

    const result = await ballangAPI.post(`/cart/products/:${productId}`, productId);

    alert("장바구니에 추가 되었습니다!");
  };

  // 소수점 표시는 toLocaleString() 적용하기

  return (
    <main>
      <ul className="p-10 mx-auto">
        <li className="flex justify-center items-center gap-5">
          <img src={value.imgSrc} alt="" className="w-[450px] h-[600px]" />
          <div className="h-[500px]">
            <h2 className="border-b border-black mb-10 py-5 font-bold text-lg">
              {value.brand.nameKr}/{value.brand.nameEn}
            </h2>

            <p>{value.name}</p>

            <div className="grid grid-cols-2 my-5">
              <p>정가</p>
              <p className="line-through text-red-500">
                ₩{value.originalPrice.toLocaleString()}
              </p>
              <p>판매가</p> <p>₩{value.price.toLocaleString()}</p>
              <p>배송</p> <p>당일배송</p>
              <p>잔여 재고</p> <p>200</p>
            </div>

            <button
              className="border border-black min-w-[430px] h-[60px] font-bold text-white bg-black hover:-translate-y-2 transition-all mt-20"
              onClick={handleClickAddCart}
            >
              장바구니에 담기
            </button>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default BrandDetailPage;
