"use client";

import { useParams, useRouter } from "next/navigation";
import { products } from "../lib/products";
import { useState } from "react";

export default function ProductDetails() {
	const { id } = useParams();
	const router = useRouter();
	const product = products.find((item) => item.id === parseInt(id));
	const [isFavorite, setIsFavorite] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(1);

	if (!product) return <p>Produkt nie znaleziony!</p>;

	const handleAddToFavorites = () => setIsFavorite(!isFavorite);
	const handleAddToCart = () => alert(`Dodano ${cartQuantity} szt. do koszyka`);

	return (
		<div className='p-4'>
			<button
				onClick={() => router.push("/")}
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
					<p className='text-gray-600 mt-2'>{product.description}</p>
					<div className='mt-4'>
						<label className='block font-semibold'>Ilość</label>
						<select
							value={cartQuantity}
							onChange={(e) => setCartQuantity(e.target.value)}
							className='border border-gray-300 rounded px-4 py-2 w-full mt-2'>
							{[...Array(10).keys()].map((num) => (
								<option key={num + 1} value={num + 1}>
									{num + 1}
								</option>
							))}
						</select>
					</div>
					<button
						onClick={handleAddToCart}
						className='w-full bg-black text-white px-4 py-2 mt-4 rounded hover:bg-gray-800'>
						Dodaj do koszyka
					</button>
					<button
						onClick={handleAddToFavorites}
						className={`w-full mt-2 border px-4 py-2 rounded ${
							isFavorite ? "bg-red-100 border-red-300" : "hover:bg-gray-200"
						}`}>
						{isFavorite ? "Usuń z ulubionych ❤️" : "Dodaj do ulubionych 🤍"}
					</button>
				</div>
			</div>
			<div className='mt-4 border-t border-gray-300 pt-4'>
				<h3 className='font-semibold'>Opis</h3>
				<p>{product.details || "Brak dodatkowych informacji o produkcie."}</p>
			</div>
		</div>
	);
}
