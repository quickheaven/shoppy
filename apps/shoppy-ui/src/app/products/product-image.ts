import { API_URL } from "../common/constants/api";

export const getProductImage = (productId: number) => {
  return `${API_URL}/images/products/${productId}.jpg`;
  //return `http://localhost:3001/images/products/${productId}.jpg`;
};