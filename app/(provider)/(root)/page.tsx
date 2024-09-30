import { getProducts, Product } from "@/api/ballangAPI";
import Link from "next/link";

export default async function HomePage() {

  const products: Product[] = await getProducts();

  return (
    <>
      <main className="mt-10">
        <h2 className="text-center text-2xl font-bold">Trending</h2>
        <ul className="grid grid-cols-6 gap-10 p-5 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <img src={product.imgSrc} alt="" />
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
