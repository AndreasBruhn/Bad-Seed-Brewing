import Link from 'next/link';
import Image from 'next/image';

export default function AboutHero() {
	return (
		<div className='h-full justify-center flex md:flex-row flex-col-reverse py-12 md:py-0 max-w-2xl mx-auto md:max-w-7xl'>
			<div className='w-full flex flex-start flex-col justify-center bg-transparent md:w-1/2 pt-12 md:pt-0 px-12'>
				<h1 className='font-extrabold text-gray-900'>
					<p className='text-black text-center md:text-left text-4xl sm:text-5xl md:text-6xl'>
						Hvem er vi?
					</p>
				</h1>
				<h2 className='mt-3 max-w-md text-black text-center md:text-left sm:text-lg md:mt-5 md:text-xl md:max-x-3xl'>
					Moderne mikrobryggeri med nordjysk iværksætterånd
				</h2>
				<div className='mt-5 max-w-md flex items-center justify-center md:justify-start md:mt-8'>
					<Link href='#history' passHref>
						<a className='inline-flex justify-center px-16 font-medium py-3 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white hover:border-black'>
							Læs mere
						</a>
					</Link>
				</div>
			</div>
			<div className='w-full bg-transparent md:w-1/2 md:py-0'>
				<Image src={require('../assets/img/omOs-hero.png')} alt='hero' layout='responsive' />
			</div>
		</div>
	);
}
