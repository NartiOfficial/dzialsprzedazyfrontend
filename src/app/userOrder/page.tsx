import { useState, useEffect } from "react";

export default function UserOrder() {
	// const [orders, setOrders] = useState([]);

	// useEffect(() => {
	// 	const fetchOrders = async () => {
	// 		try {
	// 			const response = await fetch("http://localhost:8080/api/zamowienia");
	// 			const data = await response.json();
	// 			setOrders(data);
	// 		} catch (error) {
	// 			console.error("Błąd podczas pobierania zamówień:", error);
	// 		}
	// 	};

	// 	fetchOrders();
	// }, []);

	return (
		<main>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div>
					<div className='m-6'>
						<h1 className='text-xl font-bold mb-4'>Historia zamówień</h1>
					</div>
					<div className='relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto'>
						<table className='w-full text-sm text-left text-black border border-gray-300'>
							<thead className='text-xs text-black uppercase bg-gray-100 border-b border-gray-300'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										ID
									</th>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										Data złożenia
									</th>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										Data realizacji
									</th>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										Status zamówienia
									</th>
									<th scope='col' className='px-6 py-3'>
										Kwota łączna
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Apple MacBook Pro 17"
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Silver</td>
									<td className='px-6 py-4 border-r border-gray-300'>Laptop</td>
									<td className='px-6 py-4 border-r border-gray-300'>$2999</td>
								</tr>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium border-r border-gray-300'>
										Microsoft Surface Pro
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>White</td>
									<td className='px-6 py-4 border-r border-gray-300'>
										Laptop PC
									</td>
									<td className='px-6 py-4 border-r border-gray-300'>$1999</td>
								</tr>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Magic Mouse 2
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Black</td>
									<td className='px-6 py-4 border-r border-gray-300'>
										Accessories
									</td>
									<td className='px-6 py-4 border-r border-gray-300'>$99</td>
								</tr>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Google Pixel Phone
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Gray</td>
									<td className='px-6 py-4 border-r border-gray-300'>Phone</td>
									<td className='px-6 py-4 border-r border-gray-300'>$799</td>
								</tr>
								<tr>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Apple Watch 5
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Red</td>
									<td className='px-6 py-4 border-r border-gray-300'>
										Wearables
									</td>
									<td className='px-6 py-4 border-r border-gray-300'>$999</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div>
					<div className='ml-6 mt-16'>
						<h1 className='text-xl font-bold mb-4'>
							Szczegóły zamówienia #test
						</h1>
					</div>
					<div className='relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto'>
						<table className='w-full text-sm text-left text-black border border-gray-300'>
							<thead className='text-xs text-black uppercase bg-gray-100 border-b border-gray-300'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										Produkt
									</th>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										Cena
									</th>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										Ilość
									</th>
									<th
										scope='col'
										className='px-6 py-3 border-r border-gray-300'>
										Suma
									</th>
									<th scope='col' className='px-6 py-3'>
										Podsumowanie
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Apple MacBook Pro 17"
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Silver</td>
									<td className='px-6 py-4 border-r border-gray-300'>Laptop</td>
									<td className='px-6 py-4 border-r border-gray-300'>$2999</td>
								</tr>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium border-r border-gray-300'>
										Microsoft Surface Pro
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>White</td>
									<td className='px-6 py-4 border-r border-gray-300'>
										Laptop PC
									</td>
									<td className='px-6 py-4 border-r border-gray-300'>$1999</td>
								</tr>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Magic Mouse 2
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Black</td>
									<td className='px-6 py-4 border-r border-gray-300'>
										Accessories
									</td>
									<td className='px-6 py-4 border-r border-gray-300'>$99</td>
								</tr>
								<tr className='border-b border-gray-300'>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Google Pixel Phone
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Gray</td>
									<td className='px-6 py-4 border-r border-gray-300'>Phone</td>
									<td className='px-6 py-4 border-r border-gray-300'>$799</td>
								</tr>
								<tr>
									<th
										scope='row'
										className='px-6 py-4 font-medium whitespace-nowrap border-r border-gray-300'>
										Apple Watch 5
									</th>
									<td className='px-6 py-4 border-r border-gray-300'>Red</td>
									<td className='px-6 py-4 border-r border-gray-300'>
										Wearables
									</td>
									<td className='px-6 py-4 border-r border-gray-300'>$999</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
