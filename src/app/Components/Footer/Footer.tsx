export function Footer() {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className='bg-white w-full text-black'>
			<div className='container mx-auto py-6 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between'>
				<div className='flex flex-col items-center md:items-start text-center md:text-left'>
					<h3 className='font-semibold text-lg'>Dział sprzedaży</h3>
				</div>
				<div className='text-center md:text-right mt-4 md:mt-0'>
					<p>
						<span className='font-semibold'>
							Copyright &copy; {currentYear}
						</span>
						- Jakub Wielgocki, Filip Ludwiczak, Maksymilian Kowalski, Marcin
						Latawski
					</p>
				</div>
			</div>
		</footer>
	);
}
