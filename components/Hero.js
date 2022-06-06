import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function Hero() {
	return (
		<>
			<div className='h-full mx-auto flex flex-col md:flex-row flex-wrap'>
				<div className='w-full bg-gradient-to-t md:w-1/2 from-white to-gray-200 flex flex-start flex-col '>
					<div className=' relative right-4 md:left-[14%]  md:scale-100 md:w-full bg-transparent'>
						<Image src={require('../assets/img/hero_v1.png')} alt='hero' layout='responsive' />
					</div>
				</div>
				<div className='w-full flex flex-start flex-col p-8 lg:p-36 bg-white md:w-1/2'>
					<h1 className='font-extrabold text-gray-900'>
						<p className='text-black text-center md:text-left text-4xl sm:text-5xl md:text-6xl'>
							Dristig, smagfuld og letdrikkelig øl.
						</p>
					</h1>
					<h2 className='mt-3 max-w-md text-gray-900 text-center md:text-left sm:text-lg md:mt-5 md:text-xl md:max-x-3xl'>
						Gå på opdagelse i vores mange varianter af specialøl.
					</h2>
					<div className='mt-5 max-w-md flex items-center mx-auto md:mx-0 md:mt-8'>
					<Link href='/shop' passHref>
							<a className='inline-flex btn-container justify-center items-center px-12 font-medium py-3 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white hover:border-black'>
								Shop her <ArrowRightIcon className='icon h-5 w-5 ml-2 text-gray-900' />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
