"use client";

import React, { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");

		if (!email || !password) {
			setErrorMessage("Email i hasło są wymagane!");
			return;
		}

		try {
			const response = await axios.post("/api/register", {
				email,
				password,
			});

			if (response.status === 201) {
				setSuccessMessage("Rejestracja zakończona powodzeniem!");
				setTimeout(() => router.push("/login"), 2000);
			}
		} catch (err) {
			const error = err as AxiosError<{ message?: string }>;
			const backendMessage = error.response?.data?.message;
			setErrorMessage(backendMessage || "Błąd rejestracji");
		}
	};

	return (
		<div className='flex flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8'>
				<div className='text-center mb-8'>
					<Link href='/'>
						<div className='cursor-pointer text-center'>
							<Image
								className='mx-auto h-auto w-auto'
								src='/iconShop.svg'
								alt='Shop Icon'
								width={70}
								height={70}
							/>
						</div>
					</Link>
					<h2 className='mt-4 text-center text-2xl font-bold tracking-tight text-gray-900'>
						Zarejestruj się
					</h2>
				</div>

				{errorMessage && (
					<div className='text-red-500 text-sm mb-4 text-center'>
						{errorMessage}
					</div>
				)}
				{successMessage && (
					<div className='text-green-500 text-sm mb-4 text-center'>
						{successMessage}
					</div>
				)}

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block mb-1 text-sm font-medium text-gray-700'>
							Email
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
						Zarejestruj
					</button>
				</form>

				<p className='text-center mt-4 text-sm text-gray-600'>
					Masz już konto?{" "}
					<Link
						href='/login'
						className='font-semibold text-indigo-600 hover:underline'>
						Zaloguj się
					</Link>
				</p>
			</div>
		</div>
	);
}
