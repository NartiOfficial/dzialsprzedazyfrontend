import Image from "next/image";

export function Opinion() {
	return (
		<main className='bg-white text-black w-full'>
			<div className='container w-full mx-auto lg:px-16 py-6'>
				<h1 className='font-semibold text-2xl w-full ml-8 lg:ml-0'>
					Ostatnie opinie
				</h1>
				<div className='xl:flex'>
					<div className='p-12 m-6 border border-neutral-300 rounded-lg flex-1'>
						<div className='flex-col'>
							<h2 className='font-semibold w-full whitespace-normal mb-2'>
								Najlepsza hurtowania na rynku!
							</h2>
							<p className='w-full'>
								Zawsze znajduję tu wszystko, czego potrzebuję do mojego biura.
								Szybka dostawa i atrakcyjne ceny to ogromny plus!
							</p>
							<div className='flex mt-4 p-1'>
								<div className='overflow-hidden flex items-center justify-center m-2 w-[60px] h-[60] flex-shrink-0'>
									<Image
										src='/avatar.svg'
										alt='Avatar'
										className='rounded-full'
										width={60}
										height={60}
										quality={100}
									/>
								</div>
								<div className='ml-6 flex flex-col justify-center'>
									<p className='text-gray-400 font-semibold'>Anna Kowalska</p>
									<p className='text-gray-400'>
										Właścicielka sklepu papierniczego
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='p-10 m-6 border border-neutral-300 rounded-lg flex-1'>
						<div className='flex-col'>
							<h2 className='font-semibold w-full whitespace-normal mb-2'>
								Profesjonalna obsługa i szeroki wybór!
							</h2>
							<p className='w-full'>
								Produkty świetnej jakości i pomocna obsługa sprawiają, że
								regularnie tu zamawiam. Polecam każdemu przedsiębiorcy!
							</p>
							<div className='flex mt-4 p-1'>
								<div className='overflow-hidden flex items-center justify-center m-2 w-[60px] h-[60px] flex-shrink-0'>
									<Image
										src='/avatar.svg'
										alt='Avatar'
										className='rounded-full'
										width={60}
										height={60}
										quality={100}
									/>
								</div>
								<div className='ml-6 flex flex-col justify-center'>
									<p className='text-gray-400 font-semibold'>Michał Nowak</p>
									<p className='text-gray-400'>Prezes korporacji</p>
								</div>
							</div>
						</div>
					</div>
					<div className='p-12 m-6 border border-neutral-300 rounded-lg flex-1'>
						<div className='flex-col'>
							<h2 className='font-semibold w-full whitespace-normal mb-2'>
								Niezawodny partner dla firm!
							</h2>
							<p className='w-full'>
								Zamówienia zawsze realizowane są na czas, a produkty spełniają
								najwyższe standardy. Dzięki nim moje biurko działa sprawie!
							</p>
							<div className='flex mt-4 p-1'>
								<div className='overflow-hidden flex items-center justify-center m-2 w-[60px] h-[60px] flex-shrink-0'>
									<Image
										src='/avatar.svg'
										alt='Avatar'
										className='rounded-full'
										width={60}
										height={60}
										quality={100}
									/>
								</div>
								<div className='ml-6 flex flex-col justify-center'>
									<p className='text-gray-400 font-semibold'>Ewa Jankowska</p>
									<p className='text-gray-400'>Właścicielka biura księgowego</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
