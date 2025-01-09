"use client";

import React, { useState } from "react";

export default function ProfilePage() {
  const [orders] = useState([
    {
      id: 1252,
      dateCreated: "18.10.2024 18:40",
      dateDone: "21.10.2024 18:40",
      status: "Zrealizowane",
      total: "3049.12 PLN",
    },
    {
      id: 1321,
      dateCreated: "19.10.2024 04:12",
      dateDone: "22.10.2024 18:40",
      status: "Zrealizowane",
      total: "123.76 PLN",
    },
    {
      id: 5161,
      dateCreated: "20.11.2024 12:05",
      dateDone: "24.10.2024 18:40",
      status: "W trakcie realizacji",
      total: "405.99 PLN",
    },
  ]);

  const [ordersDetails] = useState({
    1252: [
      {
        product: "Zeszyt A5",
        price: "3.99 PLN",
        quantity: "10 sztuk",
        sum: "39.90 PLN",
      },
    ],
    1321: [
      {
        product: "Ołówek BIC",
        price: "2.59 PLN",
        quantity: "12 sztuk",
        sum: "31.08 PLN",
      },
      {
        product: "Marker PRINT MAX",
        price: "4.50 PLN",
        quantity: "17 sztuk",
        sum: "76.50 PLN",
      },
      {
        product: "Papier A4×240 BluePrint",
        price: "8.09 PLN",
        quantity: "2 sztuki",
        sum: "16.18 PLN",
      },
    ],
    5161: [
      {
        product: "Długopis IncoPen",
        price: "1.99 PLN",
        quantity: "15 sztuk",
        sum: "29.85 PLN",
      },
    ],
  });

  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const handleOrderClick = (orderId: number) => {
    setSelectedOrderId(orderId);
  };

  const selectedDetails = selectedOrderId
    ? ordersDetails[selectedOrderId] || []
    : [];

  const handleGenerateInvoice = async () => {
    if (!selectedOrderId) return;

    try {
      const response = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <div className="mx-auto p-4 max-w-7xl">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Historia zamówień</h2>

          <table className="w-full text-left mb-10 border">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Data złożenia</th>
                <th className="px-4 py-2">Data realizacji</th>
                <th className="px-4 py-2">Status zamówienia</th>
                <th className="px-4 py-2">Kwota łączna</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr
                  key={o.id}
                  className="border-b cursor-pointer hover:bg-gray-50"
                  onClick={() => handleOrderClick(o.id)}
                >
                  <td className="px-4 py-2">#{o.id}</td>
                  <td className="px-4 py-2">{o.dateCreated}</td>
                  <td className="px-4 py-2">{o.dateDone}</td>
                  <td className="px-4 py-2">
                    {o.status === "Zrealizowane" ? (
                      <span className="text-green-600">{o.status}</span>
                    ) : (
                      <span className="text-red-500">{o.status}</span>
                    )}
                  </td>
                  <td className="px-4 py-2">{o.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedOrderId && (
            <>
              <h3 className="text-xl font-semibold mb-4">
                Szczegóły zamówienia → #{selectedOrderId}
              </h3>
              <table className="w-full text-left mb-4 border">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-4 py-2">Produkt</th>
                    <th className="px-4 py-2">Cena</th>
                    <th className="px-4 py-2">Ilość</th>
                    <th className="px-4 py-2">Suma</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedDetails.map((item, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="px-4 py-2">{item.product}</td>
                      <td className="px-4 py-2">{item.price}</td>
                      <td className="px-4 py-2">{item.quantity}</td>
                      <td className="px-4 py-2">{item.sum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex items-center gap-2">
                <button
                  onClick={handleGenerateInvoice}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Generuj fakturę
                </button>
              </div>
            </>
          )}
        </div>

        <div className="w-64 bg-gray-50 rounded p-4 border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div>
              <p className="text-sm text-gray-500">Panel użytkownika</p>
              <p className="font-semibold">&lt;TEST_USER&gt;</p>
            </div>
          </div>
          <hr className="my-2" />
          <ul className="space-y-2 mt-4 text-sm text-gray-800">
            <li className="cursor-pointer hover:text-gray-600">
              → Dane firmy
            </li>
            <li className="cursor-pointer hover:text-gray-600">
              → Metody płatności
            </li>
            <li className="cursor-pointer hover:text-gray-600">
              → Historia zamówień
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
