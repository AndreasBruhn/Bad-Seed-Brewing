// Next.js has a built-in image component that can be used to display images.

import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';

export const AccordionCard = ({ product }) => {
	const { handle, title, description } = product.node; // destruct for our product title and handle
	const { altText, url } = product.node.images.edges[0].node; // destruct for our product image
	const { price } = product.node.priceRange.minVariantPrice.amount; // destruct for our product price
	const linkUrl = `/products`;

	return (
		<div className='group text-center'>
			<div className='w-full relative'>
				<span className='absolute w-32 h-32 rounded-full bg-red-500 left-[21%] top-[58%]'></span>
				<div className='relative duration-300 group-hover:scale-125 h-64'>
					<Image src={url} alt={altText} layout='fill' objectFit='contain' />
				</div>
			</div>
			<h3 className='mt-8 text-lg font-medium text-gray-900 uppercase'>{title}</h3>
			<Link href={`${linkUrl}/${handle}`}>
				<a className='text-center hover:text-gray-500'>Læs mere</a>
			</Link>
		</div>
	);
};

export default AccordionCard;
