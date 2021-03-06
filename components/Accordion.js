import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AccordionCard from './AccordionCard';

export default function Accordion({ products }) {
	const [index, setIndex] = useState(false);

	return (
		<div className='max-w-2xl mx-auto py-12 px-4 flex flex-col justify-center items-center lg:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
			<h2 className='font-bold pb-20 text-3xl text-center md:text-left sm:text-4xl'>
				Udforsk de nye varianter
			</h2>
			<div className='grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-5 lg:gap-y-10'>
				{products.slice(0, 5).map((product) => (
					<AccordionCard key={product.node.id} product={product} />
				))}
			</div>
		</div>
	);
}
