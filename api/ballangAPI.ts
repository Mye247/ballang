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

const ballangAPI = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

export default ballangAPI;
