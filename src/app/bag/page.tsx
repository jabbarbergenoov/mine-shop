'use client'

import { useState, useEffect } from 'react';
import { ProductType } from '@/types/index'; // Убедитесь, что путь правильный
import CustomImage from '@/components/image/images'; // Убедитесь, что путь правильный
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { XMarkIcon, TrashIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Bag() {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const updateCart = (newCart: ProductType[]) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (id: number) => {
    const newCart = cartItems.filter(item => item.id !== id);
    updateCart(newCart);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const newCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(newCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5;
  const tax = Number((subtotal * 0.084).toFixed(2));
  const total = subtotal + shipping + tax;

  return (
    <>
    {cartItems.length ? (
          <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-6 border-b pb-6 group hover:bg-gray-50 transition-colors p-4 rounded-lg">
                      <div className="w-full p-5 sm:w-40 h-55 flex-shrink-0">
                        <CustomImage 
                          product={item} 
                          fill={false}
                          className="w-full h-full object-contain"
                        />
                      </div>
    
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                              {item.title}
                            </h2>
                            
                            {/* Rating Block */}
                            {item.rating && (
                              <div className="flex items-center text-sm mb-2 mt-1">
                                <p className="font-medium text-black">{item.rating.rate}</p>
                                <div className="flex items-center ml-2 mr-4">
                                  {Array.from({ length: Math.floor(item.rating.rate) }, (_, i) => (
                                    <StarIconSolid key={i} className="h-4 w-4 text-yellow-500" />
                                  ))}
                                  {Array.from({ length: 5 - Math.floor(item.rating.rate) }, (_, i) => (
                                    <StarIconOutline key={i} className="h-4 w-4 text-yellow-500" />
                                  ))}
                                </div>
                                <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                                  See all {item.rating.count} reviews
                                </p>
                              </div>
                            )}
                          </div>
                          
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
    
                        <div className="mt-auto">
                          <p className="text-lg font-medium text-gray-900 mb-4">
                            ${(item.price * item.quantity).toFixed(2)}
                            {item.quantity > 1 && (
                              <span className="text-sm text-gray-500 ml-1">
                                (${item.price.toFixed(2)} each)
                              </span>
                            )}
                          </p>
    
                          <div className="flex items-center">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className={`px-3 py-1 ${item.quantity <= 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                              >
                                -
                              </button>
                              <span className="px-3 py-1 border-x border-gray-300 text-center min-w-[40px]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="ml-4 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500">Start shopping to add items to your cart</p>
                  </div>
                )}
              </div>
    
              {/* Order Summary */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping estimate</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax estimate</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-3 border-t mt-3 text-base">
                    <span>Order total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
    
                <button 
                  className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md text-center font-medium transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={cartItems.length === 0}
                >
                  {cartItems.length > 0 ? 'Proceed to Checkout' : 'Cart is Empty'}
                </button>
    
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="mt-3 w-full text-sm text-red-500 hover:text-red-700 hover:underline flex items-center justify-center py-2"
                  >
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Clear cart
                  </button>
                )}
    
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <LockClosedIcon className="h-4 w-4 mr-1.5" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    ):(
        <div className='w-7xl mx-auto '>
            <Image
        src="/404.png"
        alt="Empty Cart"
        width={500}
        height={500}
        className="mx-auto  mt-10"/>
        </div>
        
    )}
    </>
  
  );
}