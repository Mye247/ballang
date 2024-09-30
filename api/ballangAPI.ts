import axios from "axios";

export interface Product {
  brand: {
    id: string;
    nameEn: string;
    nameKr: string;
  };
  brandId: string;
  id: string;
  imgSrc: string;
  name: string;
  originalPrice: string;
  price: string;
}

export interface Brand {
  id: string;
  nameEn?: string;
  nameKr: string;
}

const ballangAPI = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

export async function getProducts() {
  try {
    const response = await ballangAPI.get("/products");
    const data = await response.data;

    console.log(data);

    return data.result;
  } catch (e) {
    console.log(e);
  }
}

export async function getBrands() {
  try {
    const response = await ballangAPI.get("/brands");
    const data = await response.data;

    return data.result;
  } catch (e) {
    console.log(e);
  }
}

export default ballangAPI;
