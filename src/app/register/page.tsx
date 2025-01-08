"use client";

import React, { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";


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
				router.push("/login");
			}
		} catch (err) {
			const error = err as AxiosError<{ message?: string }>;
			const backendMessage = error.response?.data?.message;
			setErrorMessage(backendMessage || "Błąd rejestracji");
		}
	};

	return (
		<div className='max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md'>
			<h2 className='text-2xl font-bold mb-4 text-center'>Zarejestruj się</h2>

			{errorMessage && (
				<div className='text-red-500 text-sm mb-4'>{errorMessage}</div>
			)}
			{successMessage && (
				<div className='text-green-500 text-sm mb-4'>{successMessage}</div>
			)}

			<form onSubmit={handleSubmit} className='space-y-4'>
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
	);
}
