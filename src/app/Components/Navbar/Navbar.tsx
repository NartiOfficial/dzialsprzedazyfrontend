import Link from "next/link";

export function Navbar() {
	return (
		<nav className='h-[80px] bg-white text-black shadow-md'>
			<div className='container mx-auto flex h-full items-center justify-between px-4'>
				<div className='flex items-center'>
					<Link href='/'>
						<div className='text-2xl font-bold cursor-pointer'>test</div>
					</Link>
				</div>
				<div className='flex-grow'></div>
				<div className='hidden md:flex space-x-8 test-sm mr-8'>
					<Link href='' className='hover:text-gray-500 cursor-pointer'>
						Strona główna
					</Link>
					<Link href='' className='hover:text-gray-500 cursor-pointer'>
						Sklep
					</Link>
					<Link href='' className='hover:text-gray-500 cursor-pointer'>
						Oferta
					</Link>
					<Link href='' className='hover:text-gray-500 cursor-pointer'>
						O nas
					</Link>
					<Link href='' className='hover:text-gray-500 cursor-pointer'>
						Kontakt
					</Link>
					<Link href='' className='hover:text-gray-500 cursor-pointer'>
						Ulubione
					</Link>
					<Link href='' className='hover:text-gray-500 cursor-pointer'>
						Koszyk
					</Link>
				</div>
				<div className='hidden md:flex items-center space-x-4'>
					<Link
						href=''
						className='border border-gray-300 px-4 py-2 rounded hover:bg-gray-200'>
						Zaloguj się
					</Link>
					<Link
						href=''
						className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'>
						Zarejestruj się
					</Link>
				</div>
			</div>
		</nav>
	);
}
