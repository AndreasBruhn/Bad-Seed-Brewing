import Image from 'next/image';

export default function MasonryGrid({ masonryImages }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-masonry md:grid-rows-masonry md:gap-3.5'>
			<figure className='relative md:col-start-1 md:col-span-5 md:row-start-1 md:row-span-3'>
			<Image src={require('../assets/img/masonry1.png')} alt='hero' layout='fill' objectFit='cover'/>
			</figure>
			<figure className='relative md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-4'>
			<Image src={require('../assets/img/masonry3.png')} alt='hero' layout='fill' objectFit='cover'/>
			</figure>
			<figure className='relative md:col-start-5 md:col-span-3 md:row-start-3 md:row-span-2'>
			<Image src={require('../assets/img/masonry2.png')} alt='hero' layout='fill' objectFit='cover'/>
			</figure>
			<figure className='relative md:col-start-4 md:col-span-3 md:row-start-5 md:row-span-4'>
			<Image src={require('../assets/img/masonry4.png')} alt='hero' layout='fill' objectFit='cover'/>
			</figure>
		</div>
	);
}

