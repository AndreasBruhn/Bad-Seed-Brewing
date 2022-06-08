import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function FloatingImgSection() {
	return (
		<section className='h-[980px] sm:h-[1000px] lg:h-[700px] flex flex-col lg:flex-wrap lg:flex-row max-w-2xl mx-auto py-8 px-4 lg:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='flex flex-col justify-center items-center w-full mb-8 pb-8 md:m-0 lg:items-start lg:w-1/3'>
				<h2 className='text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center lg:text-left'>
					Øl, der får dig til at sidde op og mærke efter
				</h2>
				<p className='text-center lg:text-left'>
					Bad Seed Brewing startede bare som en idé - og få år efter er idéen blevet til
					virkelighed. Mikrobryggeriet laver håndlavede øl med fyldige smage, brygget på de bedste
					ingredienser og innovative opskrifter.{' '}
				</p>
				<div className='btn-container'>
					<Link href='/about' passHref>
						<a className='inline-flex justify-center items-center mt-6 px-12  font-medium py-3 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white hover:border-black'>
							Læs mere <ArrowRightIcon className='icon h-5 w-5 ml-2 text-gray-900' />
						</a>
					</Link>
				</div>
			</div>
			<div className='flex flex-col md:relative h-auto lg:w-2/3 md:mx-auto'>
				<motion.div
					viewport={{ once: false }}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ type: 'easeIn', duration: 0.5, delay: 0.2 }}
					className='lg:absolute w-full md:left-96 md:z-10 md:w-96 lg:w-72'
				>
					<Image src={require('../assets/img/2BeerGlass.png')} alt='hero' layout='responsive' />
				</motion.div>

				<motion.div
					viewport={{ once: false }}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'easeIn', duration: 0.6, delay: 0.4 }}
					className='hidden lg:block bg-gray-100 md:absolute h-72 w-96 md:top-32 md:left-56'
				></motion.div>

				<motion.div
					viewport={{ once: false }}
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: 'easeIn', duration: 0.7, delay: 0.6 }}
					className='lg:absolute w-full md:top-80 md:left-64 lg:h-96 lg:w-96 z-10'
				>
					<Image src={require('../assets/img/pouringBeer.png')} alt='hero' layout='responsive' />
				</motion.div>
			</div>
		</section>
	);
}
