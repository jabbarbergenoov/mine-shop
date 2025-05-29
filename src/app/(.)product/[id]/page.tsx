'use client';

import CustomImage from '@/components/image/images';
import { ProductType } from '@/types';
import  {Dialog}  from '@headlessui/react';
import { toast } from 'react-toastify';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetailedPage = () => {
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState<ProductType>();
	const [isOpen, setIsOpen] = useState(true);

	const { id } = useParams();
	const router = useRouter();

	useEffect(() => {
		async function getData() {
			setLoading(true);
			const res = await fetch(
				`https://fakestoreapi.com/products/${id}`
			);
			const product = await res.json();
			setProduct(product);
			setLoading(false);
		}

		getData();
	}, [id]);

	function handleClick() {
		const cart = JSON.parse(localStorage.getItem('cart') || '[]');
		const existingProduct = cart.find((item: ProductType) => item.id === product?.id);

		if (existingProduct) {
			existingProduct.quantity += 1;
			    toast.info('Increased quantity in cart');
		} else {
			cart.push({ ...product, quantity: 1 });
			   toast.success('Product added to cart');
		}

		localStorage.setItem('cart', JSON.stringify(cart));
		setIsOpen(false);
		router.back();
	}

	return (
		<Dialog
		open={isOpen}
		onClose={() => {
			setIsOpen(false);
			router.back();
		}}
		className="relative z-50"
	>
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" aria-hidden="true" />
	
		<div className="fixed inset-0 overflow-y-auto">
			<div className="flex min-h-full items-center justify-center p-6 sm:p-8">
				<Dialog.Panel className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 p-8 md:p-10 transition-transform duration-300">
					{loading ? (
						<div className="flex justify-center items-center h-96">
							<div className="h-10 w-10 rounded-full border-4 border-blue-600 border-dotted animate-spin" />
						</div>
					) : (
						<div className="flex flex-col md:flex-row gap-8 h-auto md:h-96">
							{product?.image && (
								<div className="relative w-full md:w-72 h-72 md:h-full rounded-lg overflow-hidden shadow-md bg-gray-100">
									<CustomImage product={product} fill />
								</div>
							)}
	
							<div className="flex-1 flex flex-col justify-between">
								<div>
									<h4 className="text-2xl font-bold text-gray-800 mb-1">{product?.title}</h4>
									<p className="text-lg font-semibold text-gray-800 mb-4">${product?.price}</p>
	
									<div className="flex items-center text-sm mb-4">
										<p className="font-medium text-black">{product?.rating.rate}</p>
										{product?.rating.rate && (
											<div className="flex items-center ml-2 mr-6">
												{Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
													<StarIcon key={i} className="h-4 w-4 text-yellow-500" />
												))}
												{Array.from({ length: 5 - Math.floor(product.rating.rate) }, (_, i) => (
													<StarIconOutline key={i} className="h-4 w-4 text-yellow-500" />
												))}
											</div>
										)}
										<p className="text-blue-600 hover:underline cursor-pointer text-xs">
											See all {product?.rating.count} reviews
										</p>
									</div>
	
									<p className="line-clamp-5 text-gray-600 text-sm leading-relaxed">
										{product?.description}
									</p>
								</div>
	
								<div className="mt-6 space-y-3 text-sm">
									<button onClick={handleClick} className="w-full rounded-lg py-2.5 px-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
										Add to bag
									</button>
									<button
										onClick={() => window.location.reload()}
										className="w-full rounded-lg py-2.5 px-4 border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
									>
										View full details
									</button>
								</div>
							</div>
						</div>
					)}
				</Dialog.Panel>
			</div>
		</div>
	</Dialog>
	
	);
};

export default ProductDetailedPage;