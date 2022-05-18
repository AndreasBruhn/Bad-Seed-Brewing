import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedSection() {
	return (
		<section className='grid grid-cols-1 md:grid-cols-12 md:mb-32 md:flex-row max-w-2xl md:max-w-7xl mx-auto text-white'>
			<div className='col-span-5 w-full flex flex-col justify-center bg-gradient-to-b from-black to-zinc-800 p-12'>
				<h2 className='text-3xl sm:text-5xl mb-6'>Ølsmagning to go</h2>
				<p className=''>
					Prøv en af de spændende bundles fra Bad Seed Brewing og tag ølsmagningen med hjem i stuen
					eller med hjem til vennerne.
				</p>
				<Link href='/shop' passHref>
					<a className='inline-flex justify-center mt-6 px-12 w-3/5 font-medium py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black hover:border-black'>
						Shop her
					</a>
				</Link>
			</div>
			<div className='col-span-7 w-full flex flex-start flex-col justify-center bg-white'>
				<Image src={require('../assets/img/featuredSection.png')} alt='hero' layout='responsive' />
			</div>
		</section>
	);
}
