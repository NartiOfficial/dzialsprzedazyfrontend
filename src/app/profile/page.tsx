"use client";

import React, { useState, useEffect } from "react";

interface Order {
	id: number;
	dataZalozenia: string;
	terminRealizacji: string;
	status: string;
	cenaLaczna: number;
}

interface OrderDetail {
	towarId: number;
	nazwaProduktu: string;
	ilosc: number;
	cenaSprzedazy: number;
}

function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	};
	return new Date(dateString).toLocaleDateString("pl-PL", options);
}

export default function ProfilePage() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [selectedOrderDetails, setSelectedOrderDetails] = useState<
		OrderDetail[]
	>([]);
	const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(1);
	const [detailPage, setDetailPage] = useState(0);
	const [detailTotalPages, setDetailTotalPages] = useState(1);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/zamowienia/klient/2?page=${page}&size=10`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				if (!response.ok) {
					throw new Error("Błąd podczas pobierania zamówień");
				}
				const data = await response.json();
				setOrders(data.content);
				setTotalPages(data.totalPages);
			} catch (error) {
				console.error(error);
				alert("Nie udało się załadować zamówień");
			}
		};

		fetchOrders();
	}, [page]);

	const handleOrderClick = async (orderId: number) => {
		setSelectedOrderId(orderId);
		setDetailPage(0);
		fetchOrderDetails(orderId, 0);
	};

	const fetchOrderDetails = async (orderId: number, detailPage: number) => {
		try {
			const response = await fetch(
				`http://localhost:8080/api/zamowienia-towary/zamowienie/${orderId}?page=${detailPage}&size=5&sort=asc`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (!response.ok) {
				throw new Error("Błąd podczas pobierania szczegółów zamówienia");
			}
			const data = await response.json();
			setSelectedOrderDetails(data.content);
			setDetailTotalPages(data.totalPages);
		} catch (error) {
			console.error(error);
			alert("Nie udało się załadować szczegółów zamówienia");
		}
	};

	const handleGenerateInvoice = async () => {
		if (!selectedOrderId) return;

		try {
			const response = await fetch("http://localhost:8080/api/invoices", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ orderId: selectedOrderId }),
			});

			if (!response.ok) {
				throw new Error("Błąd podczas generowania faktury");
			}

			const blob = await response.blob();

			const fileURL = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = fileURL;
			link.download = `faktura_${selectedOrderId}.pdf`;
			link.click();

			URL.revokeObjectURL(fileURL);
		} catch (error) {
			console.error(error);
			alert("Nie udało się wygenerować faktury");
		}
	};

	return (
		<div className='mx-auto p-4 max-w-7xl'>
			<div className='flex justify-between items-start gap-4'>
				<div className='flex-1'>
					<h2 className='text-2xl font-bold mb-6'>Historia zamówień</h2>

					<table className='w-full text-left mb-10 border'>
						<thead className='bg-gray-100 border-b'>
							<tr>
								<th className='px-4 py-2'>ID</th>
								<th className='px-4 py-2'>Data złożenia</th>
								<th className='px-4 py-2'>Data realizacji</th>
								<th className='px-4 py-2'>Status zamówienia</th>
								<th className='px-4 py-2'>Kwota łączna</th>
							</tr>
						</thead>
						<tbody>
							{orders.length > 0 ? (
								orders.map((order) => (
									<tr
										key={order.id}
										className='border-b cursor-pointer hover:bg-gray-50'
										onClick={() => handleOrderClick(order.id)}>
										<td className='px-4 py-2'>#{order.id}</td>
										<td className='px-4 py-2'>
											{formatDate(order.dataZalozenia)}
										</td>
										<td className='px-4 py-2'>
											{formatDate(order.terminRealizacji)}
										</td>
										<td className='px-4 py-2'>
											{order.status === "ZREALIZOWANE" ? (
												<span className='text-green-600'>{order.status}</span>
											) : (
												<span className='text-red-500'>{order.status}</span>
											)}
										</td>
										<td className='px-4 py-2'>{order.cenaLaczna} PLN</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={5} className='text-center py-4'>
										Brak zamówień lub ładowanie danych...
									</td>
								</tr>
							)}
						</tbody>
					</table>

					<div className='flex justify-between items-center'>
						<button
							onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
							disabled={page === 0}
							className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>
							Poprzednia strona
						</button>
						<span>
							Strona {page + 1} z {totalPages}
						</span>
						<button
							onClick={() =>
								setPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev))
							}
							disabled={page + 1 >= totalPages}
							className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>
							Następna strona
						</button>
					</div>

					{selectedOrderId && (
						<>
							<h3 className='text-xl font-semibold mb-4'>
								Szczegóły zamówienia → #{selectedOrderId}
							</h3>
							<table className='w-full text-left mb-4 border'>
								<thead className='bg-gray-100 border-b'>
									<tr>
										<th className='px-4 py-2'>Produkt</th>
										<th className='px-4 py-2'>Cena</th>
										<th className='px-4 py-2'>Ilość</th>
										<th className='px-4 py-2'>Suma</th>
									</tr>
								</thead>
								<tbody>
									{selectedOrderDetails.map((item, idx) => (
										<tr key={idx} className='border-b'>
											<td className='px-4 py-2'>{item.nazwaProduktu}</td>
											<td className='px-4 py-2'>{item.cenaSprzedazy} PLN</td>
											<td className='px-4 py-2'>{item.ilosc}</td>
											<td className='px-4 py-2'>
												{(item.cenaSprzedazy * item.ilosc).toFixed(2)} PLN
											</td>
										</tr>
									))}
								</tbody>
							</table>

							<div className='flex justify-between items-center'>
								<button
									onClick={() => setDetailPage((prev) => Math.max(prev - 1, 0))}
									disabled={detailPage === 0}
									className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>
									Poprzednia strona szczegółów
								</button>
								<span>
									Strona {detailPage + 1} z {detailTotalPages}
								</span>
								<button
									onClick={() =>
										setDetailPage((prev) =>
											prev + 1 < detailTotalPages ? prev + 1 : prev
										)
									}
									disabled={detailPage + 1 >= detailTotalPages}
									className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>
									Następna strona szczegółów
								</button>
							</div>

							<div className='mt-6 flex items-center gap-2'>
								<button
									onClick={handleGenerateInvoice}
									className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'>
									Generuj fakturę
								</button>
							</div>
						</>
					)}
				</div>

				<div className='w-64 bg-gray-50 rounded p-4 border'>
					<div className='flex items-center gap-3 mb-4'>
						<div className='w-10 h-10 bg-gray-300 rounded-full' />
						<div>
							<p className='text-sm text-gray-500'>Panel użytkownika</p>
							<p className='font-semibold'>&lt;TEST_USER&gt;</p>
						</div>
					</div>
					<hr className='my-2' />
					<ul className='space-y-2 mt-4 text-sm text-gray-800'>
						<li className='cursor-pointer hover:text-gray-600'>→ Dane firmy</li>
						<li className='cursor-pointer hover:text-gray-600'>
							→ Metody płatności
						</li>
						<li className='cursor-pointer hover:text-gray-600'>
							→ Historia zamówień
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
