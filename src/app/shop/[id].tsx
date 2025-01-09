"use client";

import { useParams, useRouter } from "next/navigation";
import { products, Product } from "../lib/products";
import { useState } from "react";

export default function ProductDetails() {
	const { id } = useParams() as { id: string };
	const router = useRouter();
	const product: Product | undefined = products.find(
		(item: Product) => item.id === parseInt(id)
	);
	const [isFavorite, setIsFavorite] = useState(false);

	if (!product) return <p>Produkt nie znaleziony!</p>;

	const handleAddToFavorites = () => setIsFavorite(!isFavorite);
	const handleAddToCart = () => alert(`Dodano 1 sztukę do koszyka`);

	return (
		<div className='p-4'>
			<button
				onClick={() => router.push("/shop")}
				className='text-blue-500 underline mb-4 inline-block'>
				Wróć do oferty
			</button>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='h-64 bg-gray-100 flex items-center justify-center rounded'>
					<span className='text-gray-400'>[Image]</span>
				</div>
				<div>
					<h2 className='text-2xl font-semibold'>{product.name}</h2>
					<p className='text-lg font-bold'>{product.price} PLN</p>
					<p className='text-gray-600 mt-2'>
						{product.description || "Brak opisu."}
					</p>
					<button
						onClick={handleAddToCart}
						className='w-full bg-black text-white px-4 py-2 mt-4 rounded'>
						Dodaj do koszyka
					</button>
					<button
						onClick={handleAddToFavorites}
						className={`w-full mt-2 border px-4 py-2 rounded ${
							isFavorite ? "bg-red-100" : "hover:bg-gray-200"
						}`}>
						{isFavorite ? "Usuń z ulubionych ❤️" : "Dodaj do ulubionych 🤍"}
					</button>
				</div>
			</div>
		</div>
	);
}
