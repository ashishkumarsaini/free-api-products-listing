import type { FC } from "react"
import type { Product } from "../types/product"
import { Link } from "@tanstack/react-router";

export const ProductTile: FC<{ product: Product }> = ({ product }) => {
  const { title, price, thumbnail, discountPercentage, id } = product;

  return (
    <Link to={`/products/${id}`}>
      <div className="group relative">
        <img src={thumbnail} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{discountPercentage} % off</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$ {price}</p>
        </div>
      </div>
    </Link>
  )
}