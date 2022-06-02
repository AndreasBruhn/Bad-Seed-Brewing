import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AccordionCard from './AccordionCard';

export default function Accordion({ products }) {
	const [index, setIndex] = useState(false);

	console.log(products);
	const data = [
		{
			id: 1,
			title: 'Blue',
			image: '../assets/img/blue.png',
		},
		{
			id: 2,
			title: 'Funhouse',
			image: '../assets/img/Funhouse.png',
		},
		{
			id: 3,
			title: 'Annus Mirabilis',
			image: '../assets/img/Annusmirabilis.png',
		},
	];

	return (
		<div className='max-w-2xl mx-auto py-12 px-4 flex flex-col justify-center items-center lg:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
			<h2 className='pb-16 text-3xl sm:text-4xl font-bold'>Udforsk de nye varianter</h2>
			<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-5'>
				{products.slice(0, 5).map((product) => (
					<AccordionCard key={product.node.id} product={product} />
				))}
			</div>
		</div>
	);
}
