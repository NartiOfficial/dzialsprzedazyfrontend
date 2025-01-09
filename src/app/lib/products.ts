export interface Product {
	id: number;
	name: string;
	price: number;
	description?: string;
	details?: string;
}

export const products: Product[] = [
	{
		id: 1,
		name: "Organizer biurkowy - Minimalistyczny design",
		price: 50,
		description:
			"Utrzymaj porządek i styl – Twoje biurko nigdy nie wyglądało lepiej!",
		details: "Wykonany z wysokiej jakości materiałów.",
	},
	{
		id: 2,
		name: "Podstawka pod laptop – Ergonomiczne wsparcie",
		price: 50,
		description: "Pomaga ergonomicznie ustawić laptopa.",
	},
	{
		id: 3,
		name: "Organizer na kable – Porządek na biurku",
		price: 40,
	},
	{
		id: 4,
		name: "Podkładka ochronna na biurko – Styl i funkcjonalność",
		price: 60,
	},
];
