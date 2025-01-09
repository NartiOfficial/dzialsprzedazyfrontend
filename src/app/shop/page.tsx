"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const products = [
	{ id: 1, name: "Organizer biurkowy - Minimalistyczny design", price: 50 },
	{ id: 2, name: "Podstawka pod laptop – Ergonomiczne wsparcie", price: 50 },
	{ id: 3, name: "Organizer na kable – Porządek na biurku", price: 40 },
	{
		id: 4,
		name: "Podkładka ochronna na biurko – Styl i funkcjonalność",
		price: 60,
	},
	{ id: 5, name: "Stojak na długopisy – Nowoczesny design", price: 30 },
	{ id: 6, name: "Podstawka na smartfon – Stylowy dodatek", price: 45 },
];

export default function Shop() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOption, setSortOption] = useState("new");

	const handleSearch = (e) => setSearchTerm(e.target.value);
	const handleSort = (option) => setSortOption(option);

	const filteredProducts = products
		.filter((product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.sort((a, b) => {
			if (sortOption === "asc") return a.price - b.price;
			if (sortOption === "desc") return b.price - a.price;
			return 0;
		});

	return (
		<div className='flex flex-col md:flex-row'>
			<aside className='w-full md:w-1/4 p-4 border-r border-gray-200'>
				<h3 className='font-bold mb-2'>Keywords</h3>
				<div className='space-y-2'>
					<div className='flex items-center space-x-2'>
						<input type='checkbox' checked disabled />
						<span>Biuro</span>
					</div>
					<div className='flex items-center space-x-2'>
						<input type='checkbox' checked disabled />
						<span>Akcesoria biurowe</span>
					</div>
					<div className='flex items-center space-x-2'>
						<input type='checkbox' checked disabled />
						<span>Design</span>
					</div>
				</div>
				<h4 className='font-bold mt-4 mb-2'>Cena</h4>
				<input type='range' className='w-full' min='0' max='9999' step='10' />
				<h4 className='font-bold mt-4 mb-2'>Kolor</h4>
				<div className='flex flex-col space-y-2'>
					<label>
						<input type='checkbox' /> Niebieski
					</label>
					<label>
						<input type='checkbox' /> Czerwony
					</label>
					<label>
						<input type='checkbox' /> Czarny
					</label>
				</div>
				<h4 className='font-bold mt-4 mb-2'>Rozmiar</h4>
				<div className='flex flex-col space-y-2'>
					<label>
						<input type='checkbox' /> Małe
					</label>
					<label>
						<input type='checkbox' /> Średnie
					</label>
					<label>
						<input type='checkbox' /> Duże
					</label>
				</div>
			</aside>
			<main className='flex-grow p-4'>
				<div className='flex items-center justify-between mb-4'>
					<input
						type='text'
						className='border border-gray-300 rounded px-4 py-2 w-full md:w-1/2'
						placeholder='Wyszukaj'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<div className='space-x-2 ml-4'>
						<button
							onClick={() => handleSort("new")}
							className={`px-4 py-2 rounded ${
								sortOption === "new" ? "bg-black text-white" : "bg-gray-200"
							}`}>
							Nowości
						</button>
						<button
							onClick={() => handleSort("asc")}
							className={`px-4 py-2 rounded ${
								sortOption === "asc" ? "bg-black text-white" : "bg-gray-200"
							}`}>
							Cena rosnąco
						</button>
						<button
							onClick={() => handleSort("desc")}
							className={`px-4 py-2 rounded ${
								sortOption === "desc" ? "bg-black text-white" : "bg-gray-200"
							}`}>
							Cena malejąco
						</button>
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{filteredProducts.map((product) => (
						<div
							key={product.id}
							className='border border-gray-200 rounded p-4 text-center shadow-sm cursor-pointer'
							onClick={() => router.push(`/product/${product.id}`)}>
							<div className='h-32 bg-gray-100 flex items-center justify-center rounded mb-2'>
								<span className='text-gray-400'>[Image]</span>
							</div>
							<h4 className='font-semibold'>{product.name}</h4>
							<p className='text-gray-600'>{product.price} PLN</p>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
