import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import type { Product } from '../../types/product';
import { getProduct } from '../../services/product';
import Rating from '../../components/rating';
import { Warning } from '../../components/icons/warning';
import { Check } from '../../components/icons/check';

// eslint-disable-next-line react-refresh/only-export-components
function ProductPage() {
  const { productId } = useParams({ from: '/products/$productId' });
  const [productData, setProductData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct({ productId })
        setProductData(response.data);
      }
      catch (error) {
        console.log(error);
        setProductData(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

  }, [productId]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!productData || !productData.id) {
    return <p>No product found</p>
  }

  const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = productData;

  const stockText = () => {
    if (stock <= 0) {
      return (
        <div className='flex items-center gap-2'>
          <Warning />
          <p>Sorry! Out of stock</p>
        </div>
      )
    }

    if (stock < 20) {
      return (
        <div className='flex items-center gap-2'>
          <Warning />
          <p>{`Only ${stock} left`}</p>
        </div>
      )
    }

    return (
      <div className='flex items-center gap-2'>
        <Check />
        <p>In stock and ready to ship</p>
      </div>
    )
  }

  return (
    <div className='mt-[100px]'>
      <div className="md:grid grid-cols-12 gap-8 md:items-start">
        <div className="col-span-12 md:col-span-5 md:sticky top-30" id="product-details">
          <div className='flex items-center gap-2 text-sm'>
            <Link to='/products' className='text-gray-500 capitalize'>{category}</Link>
            <p className='text-gray-500'>/</p>
            <p className='text-gray-950 capitalize'>Product</p>
          </div>
          <div className='mt-8'>
            <span>{brand}</span>
            <h1 className='mt-2 text-5xl font-medium'>{title}</h1>
          </div>
          <div className='mt-8'>
            <div className='flex items-center gap-2'>
              <p className='text-xl'>$ {price}</p>
              <p>|</p>
              <div className='flex items-center'>
                <Rating value={rating} />
                <p className="ml-2 text-sm font-medium text-gray-600">{rating.toFixed(1)}</p>
              </div>
            </div>
            {discountPercentage && (
              <div className='mt-1'>
                <p className='text-sm'> {discountPercentage}% off </p>
              </div>
            )}
          </div>
          {description && (
            <div className='mt-8 flex items-center gap-2'>
              <p>{description}</p>
            </div>
          )}
          <div className='mt-8 flex items-center gap-2'>
            {stockText()}
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 mt-10 md:mt-0">
          <img className='w-full' src={thumbnail} alt={title} />
          <div className='mt-4 grid grid-cols-6 gap-4'>
            {images.map((image, index) => (
              <div key={index} className='col-span-3'>
                <img className='w-full' src={image} alt={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/products/$productId')({
  component: ProductPage,
})
