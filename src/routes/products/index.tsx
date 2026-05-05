import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { getProductList } from "../../services/product";
import { ProductTile } from "../../components/product-tile";

// eslint-disable-next-line react-refresh/only-export-components
const ProductsPage = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductList();

        setTimeout(() => {
          setProductsData(response.data.data);
          setIsLoading(false);
        }, 1000)
      }
      catch (error) {
        console.log(error);
        setProductsData([]);
        setIsLoading(false);
      }
    }

    fetchData();

  }, []);

  console.log(isLoading);


  if (isLoading) {
    return (
      <div className="bg-white mt-[100px]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="h-6 bg-gray-100 w-[300px]" />

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Array.from({ length: 8 }).map(() => (
              <div className="relative">
                <div className="aspect-square w-full rounded-md bg-gray-100" />
                <div className="mt-4 flex justify-between">
                  <div>
                    <div className="h-4 bg-gray-100 w-[150px]" />
                    <div className="mt-2 h-4 bg-gray-100 w-[150px]" />
                  </div>
                  <div className="h-4 bg-gray-100 w-[100px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!productsData.length) {
    return <p>No product found!</p>
  }

  return (
    <div className="bg-white mt-[100px]">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsData.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
};

export const Route = createFileRoute('/products/')({
  component: ProductsPage,
})

