import { getBrands, getProducts } from "@/api/ballangAPI";
import Link from "next/link";

export default async function BrandsDetailPage() {
  const brands = await getBrands();
  const products = await getProducts();

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
              className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all"
            >
              <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-6 gap-10 p-5 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10">
          {products.map((list) => (
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
