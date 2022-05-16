import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ProductForm from './ProductForm';
import RecommendedList from './RecommendedList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper';

export default function ProductPageContent({ product }) {
	const images = [];

	product.images.edges.map((image, i) => {
		console.log(image);
		images.push(
			<SwiperSlide key={`slide-${i}`}>
				<Image src={image.node.url} alt={image.node.altText} layout='fill' objectFit='contain' />
			</SwiperSlide>
		);
	});

	return (
		<>
			<div className='flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto'>
				<div className='w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2'>
					<div className='relative h-96 w-full'>
						<Swiper
							style={{
								'--swiper-navigation-color': '#000',
								'--swiper-pagination-color': '#fff',
								'--swiper-navigation-size': '35px',
							}}
							loop={true}
							spaceBetween={10}
							navigation={true}
							pagination={{ dynamicBullets: true }}
							modules={[FreeMode, Navigation, Pagination]}
							className='mySwiper2'
						>
							{images}
						</Swiper>
						{/* <Image
							src={product.images.edges[0].node.url}
							alt={product.images.edges[0].node.altText}
							layout={'fill'}
							objectFit={'cover'}
						/> */}
					</div>
				</div>
				<ProductForm product={product} />
			</div>
			<p className='pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto'>
				{product.description}
			</p>
			<RecommendedList
			
				current={product.id}
				// product={product}
				products={product.collections.edges[0].node.products.edges}
			/>
		</>
	);
}
