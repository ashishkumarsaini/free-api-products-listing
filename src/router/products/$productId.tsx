import { useParams } from "@tanstack/react-router"

const ProductPage = () => {
  const params = useParams({ from: '/products/$productId' })
  return (
    <div>
      Product {params.productId}
    </div>
  )
};

export default ProductPage;
