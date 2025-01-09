"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import iconShop from "../../../../public/iconShop.svg";

export function Navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		setIsLoggedIn(!!token);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
	};

	return (
		<nav className='h-[122px] bg-white text-black shadow-md whitespace-nowrap'>
			<div className='mx-auto flex h-full items-center justify-between px-4'>
				<div className='flex items-center'>
					<Link href='/'>
						<div className='ml-6 cursor-pointer'>
							<Image src={iconShop} alt='Shop Icon' width={70} height={70} />
						</div>
					</Link>
				</div>

				<div className='flex-grow'></div>

				<div className='hidden md:flex space-x-8 test-sm mr-8'>
					{isLoggedIn ? (
						<>
							<Link href='/shop' className='hover:text-gray-500 cursor-pointer'>
								Oferta
							</Link>
							<Link
								href='/favorites'
								className='hover:text-gray-500 cursor-pointer'>
								Ulubione
							</Link>
							<Link href='/cart' className='hover:text-gray-500 cursor-pointer'>
								Koszyk
							</Link>
						</>
					) : (
						<>
							<Link href='/' className='hover:text-gray-500 cursor-pointer'>
								Strona główna
							</Link>
							<Link
								href='/contact'
								className='hover:text-gray-500 cursor-pointer'>
								Kontakt
							</Link>
						</>
					)}
				</div>

				<div className='hidden md:flex items-center space-x-4'>
					{isLoggedIn ? (
						<>
							<Link
								href='/profile'
								className='border border-gray-300 px-4 py-2 rounded hover:bg-gray-200'>
								Moje konto
							</Link>
							<button
								onClick={handleLogout}
								className='border border-gray-300 px-4 py-2 rounded hover:bg-gray-200'>
								Wyloguj
							</button>
						</>
					) : (
						<>
							<Link
								href='/login'
								className='border border-gray-300 px-4 py-2 rounded hover:bg-gray-200'>
								Zaloguj się
							</Link>
							<Link
								href='/register'
								className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'>
								Zarejestruj się
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
