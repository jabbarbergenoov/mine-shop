import Product from '@/components/product/product';
import { ProductType } from '@/types';
import React from 'react'

export default async function Products() {
    const res = await fetch('https://fakestoreapi.com/products');
	const products: ProductType[] = await res.json();
    
  return (
    <div className='w-7xl mx-auto'>
      <section className='flex flex-col my-10 space-y-12'>
				<h1 className='text-5xl font-bold text-center'>
					SHOP DEALS
				</h1>
				<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map(product => (
						<Product key={product.id} product={product} />
					))}
				</div>
			</section>
    </div>
  )
}
