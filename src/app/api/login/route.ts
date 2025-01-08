// app/api/login/route.ts
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

		const user = users.find((u) => u.email === email);
		if (!user || user.password !== password) {
			return NextResponse.json(
				{ message: "Zły email lub hasło" },
				{ status: 401 }
			);
		}

		return NextResponse.json({ token: "FAKE_TOKEN_123" }, { status: 200 });
	} catch (error) {
		console.error("Login error:", error);
		return NextResponse.json({ message: "Błąd logowania" }, { status: 500 });
	}
}
