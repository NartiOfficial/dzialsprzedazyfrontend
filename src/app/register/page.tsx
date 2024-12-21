import Link from "next/link";
import Image from "next/image";

export default function Register() {
	return (
		<div className='flex flex-col justify-center p-4'>
			<div className='max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8'>
				<div className='text-center mb-12'>
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
					<h2 className='mt-6 text-center text-2xl font-bold tracking-tight text-gray-900'>
						Zarejestruj się
					</h2>
				</div>

				<form>
					<div className='space-y-4'>
						<div>
							<label className='text-gray-800 text-sm mb-2 block'>Email</label>
							<input
								name='email'
								type='text'
								className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:outline-none  focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm'
							/>
						</div>
						<div>
							<label className='text-gray-800 text-sm mb-2 block'>Hasło</label>
							<input
								name='password'
								type='password'
								className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm'
							/>
						</div>
						<div>
							<label className='text-gray-800 text-sm mb-2 block'>
								Powtórz hasło
							</label>
							<input
								name='cpassword'
								type='password'
								className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm'
							/>
						</div>

						<div className='flex items-center'>
							<input
								id='remember-me'
								name='remember-me'
								type='checkbox'
								className='h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
							/>
							<label
								htmlFor='remember-me'
								className='text-gray-800 ml-3 block text-sm'>
								Akceptuje
								<a
									href='#'
									className='text-blue-600 font-semibold hover:underline ml-1'>
									warunki i postawnowienia
								</a>
							</label>
						</div>
					</div>

					<div className='!mt-4'>
						<button
							type='button'
							className='w-full py-2 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600'>
							Utwórz konto
						</button>
					</div>
					<p className='text-gray-800 text-sm mt-6 text-center'>
						Masz już konto?
						<a
							href='/login'
							className='text-indigo-600 hover:text-indigo-500 font-semibold hover:underline ml-1'>
							Zaloguj się
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}
