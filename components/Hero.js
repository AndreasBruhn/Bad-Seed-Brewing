import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
	return (
		<>
			<div className='h-full md:h-screen justify-center mx-auto flex flex-col md:flex-row flex-wrap'>
				<div className='bg-gradient-to-t w-1/2 from-green-300 to-blue-400 flex flex-start flex-col justify-center'>
					<div className=' relative md:left-40 md:scale-125 md:w-full bg-transparent'>
						<Image src={require('../assets/img/hero-img.png')} alt='hero' layout='responsive' />
					</div>
				</div>
				<div className='w-full flex flex-start flex-col justify-center p-16 bg-black md:w-1/2'>
					<h1 className='font-extrabold text-gray-900'>
						<p className='text-white text-4xl sm:text-5xl md:text-6xl'>
							Dristig, smagfuld og letdrikkelig øl.
						</p>
					</h1>
					<h2 className='mt-3 max-w-md text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl'>
						Gå på opdagelse i vores mange varianter af specialøl.
					</h2>
					<div className='mt-5 max-w-md flex items-center md:mt-8'>
						<Link href='/shop' passHref>
							<a className='inline-flex justify-center px-12 font-medium py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black hover:border-black'>
								Shop her
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
