// Next.js has a built-in image component that can be used to display images.

import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

export const AccordionCard = ({ product }) => {
	const { handle, title, description } = product.node; // destruct for our product title and handle
	const { altText, url } = product.node.images.edges[0].node; // destruct for our product image
	const linkUrl = `/products`;

	console.log(description);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={(e) => setIsHovered(true)}
			onMouseLeave={(e) => setIsHovered(false)}
			className='group h-full text-center'
		>
			<div className='w-full relative'>
				<span className='absolute w-32 h-32 rounded-full bg-red-500 left-[21%] top-[58%]'></span>
				<div className='relative duration-300 group-hover:scale-125 h-64'>
					<Image src={url} alt={altText} layout='fill' objectFit='contain' />
				</div>
			</div>
			<h3 className='mt-8 text-lg font-medium text-gray-900 uppercase pb-4'>{title}</h3>
			<p className={` ${isHovered ? 'block line-clamp-4 ' : 'hidden'}`}>{description}</p>
			<div className='pt-4 flex justify-center items-center acc-btn-container'>
				<Link href={`${linkUrl}/${handle}`}>
					<a className='text-center  text-[#001EBD] font-semibold p-2 hover:text-[#001EBD]/80 rounded-sm'>
						Læs mere
					</a>
				</Link>
				<ArrowRightIcon className='icon h-5 w-5 text-[#0129ec]' />
			</div>
		</div>
	);
};

export default AccordionCard;