import { apiClient } from "./api-client"

export const getProductList = () => {
  return apiClient({ method: 'GET', url: '/public/randomproducts' });
}

export const getProduct = ({ productId }: { productId: string }) => {
  return apiClient({ method: 'GET', url: `/public/randomproducts/${productId}`, });
}