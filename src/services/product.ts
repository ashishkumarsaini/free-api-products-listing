import { apiClient } from "./api-client"

export const getProductList = () => {
  return apiClient({ method: 'GET', url: '/public/randomproducts' });
}

export const getProduct = ({ productId }) => {
  return apiClient({ method: 'GET', url: `/public/randomproducts/${productId}`, });
}