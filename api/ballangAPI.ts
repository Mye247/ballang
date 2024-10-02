import axios from "axios";

export interface Product {
  brand: {
    id: number;
    nameEn: string;
    nameKr: string;
  };
  brandId: number;
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
}

export interface Brand {
  id: number;
  nameEn?: string;
  nameKr: string;
}

export interface Cart {
  id: number;
  items: CartItem[];
}

export interface CartItem {
  cartId: number;
  id: number;
  product: {
    brand: {
      id: number;
      nameKr: string;
      nameEn: string;
    };
    id: number;
    imgSrc: string;
    name: string;
    onlineStock: string;
    originalPrice: number;
    price: number;
  };
  productId: number;
}

// 사용안함
export interface SignUp {
  email: string;
  password: string;
}

// baseAPI
const ballangAPI = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

export default ballangAPI;

// data API
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

export async function SignUp(email: string, password: string) {
  const data = {
    email,
    password,
  };
  try {
    const response = await ballangAPI.post("/auth/sign-up", data);
    const result = await response.data;

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function LogIn(email: string, password: string) {
  const data = {
    email,
    password,
  };
  try {
    const response = await ballangAPI.post("/auth/log-in", data);
    const result = await response.data;

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function LogOut() {
  try {
    const response = await ballangAPI.delete("/auth/log-out");
    const result = await response.data;

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getCart() {
  try {
    const response = await ballangAPI.get("/cart");
    const result = await response.data.result;

    return result;
  } catch (e) {
    console.log(e);
  }
}
