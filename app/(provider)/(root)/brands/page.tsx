/* eslint-disable @typescript-eslint/no-unused-vars */
import { Brand, getBrands, getProducts, Product } from "@/api/ballangAPI";
import Link from "next/link";
import React from "react";

interface Props {
  searchParams: {
    brandId: string;
  };
}

export default async function BrandsListPage({ searchParams }: Props) {
  const brands: Brand[] = await getBrands();
  const products: Product[] = await getProducts();

  const selectedBrandId = Number(searchParams.brandId);

  // string 출력
  console.log(typeof selectedBrandId);

  // 타입 오브젝트로 출력됨
  console.log(typeof products[0].brand.id);

  return (
    <>
      <main className="mt-10">
        <h2 className="text-center text-2xl font-bold">Brands</h2>
        <div className="text-center mt-5">
          <Link href={"/brands"} className=" text-center ">
            All
          </Link>
        </div>
        <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center mt-10 w-[800px] items-center text-center mx-auto">
          {brands.map((brand) => (
            <li
              key={brand.id}
              className={`text-slate-700 hover:text-black transition-all ${
                selectedBrandId === brand.id ? "font-semibold text-black" : ""
              }`}
            >
              <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-6 gap-10 p-5 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10">
          {products
            .filter(
              (product) =>
                !selectedBrandId || product.brand.id === selectedBrandId
            )
            .map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <img src={product.imgSrc} alt={product.name} />
                </Link>

                <div>
                  <h3 className="my-2 font-bold">{product.brand.nameEn}</h3>
                  <span>{product.name}</span>
                </div>

                <div className="flex gap-2 mt-2">
                  <span className="text-red-500 line-through">
                    ₩{product.originalPrice}
                  </span>
                  <span>₩{product.price}</span>
                </div>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
