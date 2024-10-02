"use client";

import ballangAPI, { Product } from "@/api/ballangAPI";
import { useAuthStore } from "@/zustand/auth.store";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function BrandDetailPage() {
  // 클릭한 제품의 id값 가져오기
  const { productId } = useParams();

  // id값으로 불러온 데이터 저장하기
  const [value, setValue] = useState<Product | null>(null);
  console.log(value);

  const isCart = useAuthStore((state) => state.isCart);
  const setIsCart = useAuthStore((state) => state.setIsCart);

  // modal, login상태 불러오기
  const setIsModal = useAuthStore((state) => state.setIsModal);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // 가져온 id를 이용해 데이터 불러오기
  useEffect(() => {
    (async () => {
      const response = await ballangAPI.get(`/products/${productId}`);
      const data = response.data;

      console.log(data);

      setValue(data.result);
    })();
  }, [productId]);

  // value가 없을 때 로딩창 띄우기
  if (!value) {
    return <div>로딩중입니다....</div>;
  }

  // 장바구니에 제품 추가하기
  const handleClickAddCart = async () => {
    if (!isLoggedIn) return setIsModal(true);

    const result = await ballangAPI.post(
      `/cart/products/${productId}`,
      productId
    );

    setIsCart(isCart == false);
    alert("장바구니에 추가 되었습니다!");
  };

  // 장바구니에서 제품 삭제하기
  const handleClickClearItemInCart = async () => {
    const result = await ballangAPI.delete(`/cart/products/${productId}/clear`);
    setIsCart(!isCart);
    alert("장바구니에서 삭제했습니다!");
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

            {isCart ? (
              <button
                className="border border-black min-w-[430px] h-[60px] font-bold text-white bg-black hover:-translate-y-2 transition-all mt-20"
                onClick={handleClickAddCart}
              >
                장바구니에 담기
              </button>
            ) : (
              <button
                className="border border-black min-w-[430px] h-[60px] font-bold text-black bg-white hover:-translate-y-2 transition-all mt-20"
                onClick={handleClickClearItemInCart}
              >
                장바구니에서 빼기
              </button>
            )}
          </div>
        </li>
      </ul>
    </main>
  );
}

export default BrandDetailPage;
