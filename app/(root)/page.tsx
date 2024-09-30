"use client";

import ballangAPI, { Product } from "@/api/ballangAPI";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [value, setValue] = useState<Product[]>([]);
  console.log(value);

  useEffect(() => {
    (async () => {
      try {
        const response = await ballangAPI.get("/products");
        const data = await response.data;

        console.log(data);

        setValue(data.result);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <main className="mt-10">
        <h2 className="text-center text-2xl font-bold">Trending</h2>
        <ul className="grid grid-cols-6 gap-10 p-5 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
          {value.map((list) => (
            <li key={list.id}>
              <Link href={`/products/${list.id}`}>
                <img src={list.imgSrc} alt="" />
              </Link>

              <div>
                <h3 className="my-2 font-bold">{list.brand.nameEn}</h3>
                <span>{list.name}</span>
              </div>

              <div className="flex gap-2 mt-2">
                <span className="text-red-500 line-through">
                  ₩{list.originalPrice}
                </span>
                <span>₩{list.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
