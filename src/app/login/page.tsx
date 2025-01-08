"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage("");

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Błąd logowania");
			}

			const data = await response.json();
			const token = data.token;


			localStorage.setItem("token", token);

			router.push("/");
		} catch (error: any) {
			setErrorMessage(error.message || "Nie udało się zalogować");
		}
	};

	return (
		<div className='max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md'>
			<h2 className='text-2xl font-bold mb-4 text-center'>Zaloguj się</h2>
			{errorMessage && (
				<div className='text-red-500 text-sm mb-4'>{errorMessage}</div>
			)}
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label className='block mb-1 text-sm font-medium text-gray-700'>
						Adres email
					</label>
					<input
						type='email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full p-2 border border-gray-300 rounded-md'
					/>
				</div>

				<div>
					<label className='block mb-1 text-sm font-medium text-gray-700'>
						Hasło
					</label>
					<input
						type='password'
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full p-2 border border-gray-300 rounded-md'
					/>
				</div>

				<button
					type='submit'
					className='block w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-500'>
					Zaloguj
				</button>
			</form>

			<p className='text-center mt-4 text-sm text-gray-600'>
				Nie masz konta?{" "}
				<a
					href='/register'
					className='font-semibold text-indigo-600 hover:underline'>
					Zarejestruj się
				</a>
			</p>
		</div>
	);
}
