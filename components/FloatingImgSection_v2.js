import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Parallax from 'react-rellax';

export default function FloatingImgSection_v2() {
	return (
		<section className='h-[700px] flex flex-col flex-wrap md:flex-row max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='flex flex-col justify-center w-full mb-8 md:m-0 md:w-1/3'>
				<h2 className='text-2xl md:text-4xl font-extrabold text-gray-900 mb-6'>
					Øl, der får dig til at sidde op og mærke efter
				</h2>
				<p>
					Bad Seed Brewing startede bare som en idé - og få år efter er idéen blevet til
					virkelighed. Mikrobryggeriet laver håndlavede øl med fyldige smage, brygget på de bedste
					ingredienser og innovative opskrifter.{' '}
				</p>
				<div className='btn-container'>
					<Link href='/shop' passHref>
						<a className='inline-flex justify-center items-center mt-6 px-12  font-medium py-3 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white hover:border-black'>
							Læs mere <ArrowRightIcon className='icon h-5 w-5 ml-2 text-gray-900' />
						</a>
					</Link>
				</div>
			</div>
			<div className='flex flex-col md:relative h-auto md:w-2/3'>
				<div className="md:absolute w-full md:w-72 md:left-96 md:z-10">
     <Image src={require('../assets/img/2BeerGlass.png')} alt='hero' layout='responsive' />
    </div>

				<div className='hidden md:block bg-floating-yellow md:absolute h-72 w-96 md:top-32 md:left-56'></div>

				<div className='md:absolute md:h-96 md:w-96 md:top-80 md:left-64 z-10'>
					<Image src={require('../assets/img/pouringBeer.png')} alt='hero' layout='responsive' />
				</div>
			</div>
		</section>
	);
}
