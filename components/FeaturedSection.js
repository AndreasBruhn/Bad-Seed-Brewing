import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Badge from './Badge';

export default function FeaturedSection() {
	return (
		<section className='relative lg:grid grid-cols-1 text-black mx-auto md:grid-cols-12 lg:mb-24 md:flex-row max-w-2xl md:max-w-7xl lg:pt-24'>
			<Badge />
			<div className='w-full flex flex-col justify-center items-center bg-featured-gray p-12 lg:col-span-5 lg:items-start'>
				<h2 className='text-3xl sm:text-5xl mb-6'>Ølsmagning to go</h2>
				<p className='text-center lg:text-left'>
					Prøv en af de spændende bundles fra Bad Seed Brewing og tag ølsmagningen med hjem i stuen
					eller med hjem til vennerne.
				</p>
				<Link href='/shop' passHref>
					<a className='inline-flex btn-container justify-center items-center mt-6 px-12 font-medium py-3 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white md:w-2/3'>
						Shop her <ArrowRightIcon className='icon h-5 w-5 ml-2 text-gray-900' />
					</a>
				</Link>
			</div>
			<div className='mt-20 lg:mt-0 w-full flex flex-start flex-col justify-center bg-white lg:col-span-7'>
				<Image src={require('../assets/img/featuredSection.png')} alt='hero' layout='responsive' />
			</div>
		</section>
	);
}
