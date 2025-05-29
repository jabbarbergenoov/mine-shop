import CustomImage from "@/components/image/images";
import { notFound } from "next/navigation";

interface Props {
	params :{
		id: string;
	}
}

 const ProductDetailedPage = async ({params: {id}} : Props) => {

	try {
		const res = await fetch(`https://fakestoreapi.com/products/${id}`);
		const product = await res.json();
		return (
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 mt-48 pb-16">
			<div className="w-full md:w-1/2 rounded-xl overflow-hidden">
				<CustomImage product={product} />
			</div>
		
			<div className="w-full md:w-1/2 space-y-6">
				<div className="space-y-3">
					<h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
						{product.title}
					</h1>
					<h2 className="text-blue-600 text-2xl md:text-4xl font-semibold">
						${product.price}
					</h2>
				</div>
		
				<p className="text-gray-600 text-sm md:text-base leading-relaxed">
					{product.description}
				</p>
			</div>
		</div>
		
		)
	} catch (error) {
		notFound()
		console.log(error)
	}
};

export default ProductDetailedPage;