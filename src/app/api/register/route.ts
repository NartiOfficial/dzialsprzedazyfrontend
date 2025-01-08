import { NextRequest, NextResponse } from "next/server";
import { users } from "../../lib/usersStorage";

export async function POST(request: NextRequest) {
	try {
		const { email, password } = await request.json();

		if (!email || !password) {
			return NextResponse.json(
				{ message: "Email i hasło są wymagane" },
				{ status: 400 }
			);
		}

		const userExists = users.some((u) => u.email === email);
		if (userExists) {
			return NextResponse.json(
				{ message: "Użytkownik już istnieje" },
				{ status: 409 }
			);
		}

		users.push({ email, password });

		return NextResponse.json({ message: "Rejestracja OK" }, { status: 201 });
	} catch (error) {
		console.error("Register error:", error);
		return NextResponse.json({ message: "Błąd rejestracji" }, { status: 500 });
	}
}
