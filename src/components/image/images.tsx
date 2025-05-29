'use client';

import { ProductType } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Optional - if you want a skeleton loader

interface Props {
  product: ProductType;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function CustomImage({ 
  product, 
  fill = false, 
  className = '', 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const imageClasses = `
    object-contain duration-700 ease-in-out 
    group-hover:opacity-75
    ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
    ${className}
  `;

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${fill ? 'w-full h-full' : ''}`}>
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title || 'Product image'}
          fill
          className={imageClasses}
          onLoadingComplete={() => setIsLoading(false)}
          onError={handleError}
          priority={priority}
          sizes={sizes}
        />
      ) : (
        <div className="relative w-full h-full">
          {isLoading && (
            <Skeleton className="absolute inset-0 bg-gray-200 rounded-lg" />
          )}
          <Image
            src={product.image}
            alt={product.title || 'Product image'}
            width={400}
            height={400}
            className={imageClasses}
            onLoadingComplete={() => setIsLoading(false)}
            onError={handleError}
            priority={priority}
          />
        </div>
      )}
    </>
  );
}