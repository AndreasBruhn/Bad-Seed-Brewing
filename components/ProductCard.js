// Next.js has a built-in image component that can be used to display images.

import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';

export const ProductCard = ({ product }) => {
	const { handle, title, description } = product.node; // destruct for our product title and handle
	const { altText, url } = product.node.images.edges[0].node; // destruct for our product image
	const { price } = product.node.priceRange.minVariantPrice.amount; // destruct for our product price
	const linkUrl = `/products`;

	return (
		<Link href={`${linkUrl}/${handle}`}>
			<a className='group text-center'>
				<div className='w-full bg-gray-200 rounded-3xl overflow-hidden'>
					<div className='relative group-hover:opacity-75 h-96'>
						<Image src={url} alt={altText} layout='fill' objectFit='cover' />
					</div>
				</div>
				<h3 className='mt-4 text-lg font-medium text-gray-900 uppercase'>{title}</h3>
				<p className='line-clamp-2 text-ellipsis'>{description}</p>
				<span className='mt-1 font-bold text-sm text-gray-700'>
					{formatter.format(product.node.priceRange.minVariantPrice.amount)}
				</span>
			</a>
		</Link>
	);
};

export default ProductCard;
