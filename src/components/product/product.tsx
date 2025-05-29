import React from 'react'
import { ProductType } from "@/types";
import Link from 'next/link';
import CustomImage from '../image/images';

export default function Product({ product }: { product: ProductType }) {
    return (
        <Link
        href={`/product/${product.id}`}
        className="group relative h-96 flex flex-col p-6 rounded-xl shadow-md border hover:shadow-xl hover:scale-[1.03] transition-all duration-200 bg-white"
      >
        <div className="relative flex-1">
        <CustomImage product={product} fill />
        </div>
      
        <h3 className="tracking-widest text-indigo-500 text-xs font-semibold uppercase">
          {product.category}
        </h3>
      
        <div className="font-semibold flex items-center justify-between mt-2 text-sm text-gray-800">
          <p className="w-44 truncate">{product.title}</p>
          <p className="text-indigo-600">${product.price}</p>
        </div>
      
        <p className="mt-2 text-sm pb-3 text-gray-600 line-clamp-2">
          {product.description}
        </p>
      
        {/* Optional CTA on hover */}
        {/* <div className="absolute bottom-4 right-4 opacity-0  group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-indigo-600 font-semibold">Подробнее →</span>
        </div> */}
      </Link>
      
    );
  }
