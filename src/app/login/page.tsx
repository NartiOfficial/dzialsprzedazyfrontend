import Link from "next/link";
import Image from "next/image";

export default function Login() {
	return (
		<>
			<div className='flex flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md border border-gray-300 rounded-2xl p-8'>
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
						Zaloguj się
					</h2>

					<form action='#' method='POST' className='mt-10 space-y-6'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-900'>
								Adres email
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									required
									autoComplete='email'
									className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm'
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium text-gray-900'>
									Hasło
								</label>
								<div className='text-sm'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'>
										Zapomniałeś hasła?
									</a>
								</div>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									required
									autoComplete='current-password'
									className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='w-full py-2 px-4 text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-indigo-600'>
								Zaloguj się
							</button>
						</div>
					</form>

					<p className='mt-6 text-center text-sm text-gray-500'>
						Nie masz konta?{" "}
						<Link
							href='/register'
							className='font-semibold text-indigo-600 hover:text-indigo-500'>
							Zarejestruj się
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
