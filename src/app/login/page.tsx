"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
			const token = data.token || "mock-token-12345";

			localStorage.setItem("token", token);
			sessionStorage.setItem("token", token);

			router.push("/");
		} catch (error: any) {
			setErrorMessage(error.message || "Nie udało się zalogować");
		}
	};

	return (
		<div className='flex flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8'>
				<div className='text-center mb-8'>
					<a href='/'>
						<div className='cursor-pointer text-center'>
							<Image
								className='mx-auto h-auto w-auto'
								src='/iconShop.svg'
								alt='Shop Icon'
								width={70}
								height={70}
							/>
						</div>
					</a>
					<h2 className='mt-4 text-center text-2xl font-bold tracking-tight text-gray-900'>
						Zaloguj się
					</h2>
				</div>

				{errorMessage && (
					<div className='text-red-500 text-sm mb-4 text-center'>
						{errorMessage}
					</div>
				)}

				<form onSubmit={handleSubmit} className='space-y-6'>
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
		</div>
	);
}
