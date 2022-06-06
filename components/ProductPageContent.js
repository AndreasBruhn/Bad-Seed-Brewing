import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ProductForm from './ProductForm';
import RecommendedList from './RecommendedList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper';
import Link from 'next/link';
import { CgFormatSlash } from 'react-icons/cg';

export default function ProductPageContent({ product }) {
	const images = [];

	product.images.edges.map((image, i) => {
		images.push(
			<SwiperSlide key={`slide-${i}`}>
				<Image src={image.node.url} alt={image.node.altText} layout='fill' objectFit='contain' />
			</SwiperSlide>
		);
	});

	return (
		<>
			<nav className='flex px-72' aria-label='Breadcrumb'>
				<ol className='inline-flex items-center space-x-1 md:space-x-3'>
					<li className='inline-flex items-center'>
						<Link href='/'>
							<a className='inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-500'>
								Hjem
							</a>
						</Link>
					</li>
					<li>
						<div className='flex items-center'>
							<CgFormatSlash className='w-6 h-6' />
							<Link href='/shop'>
								<a
									href='#'
									className='ml-1 text-sm font-medium text-gray-900 hover:text-gray-500 md:ml-2 '
								>
									Shop
								</a>
							</Link>
						</div>
					</li>
					<li aria-current='page'>
						<div className='flex items-center'>
							<CgFormatSlash className='w-6 h-6' />
							<span className='ml-1 text-sm font-medium text-gray-900 md:ml-2 '>Produkt</span>
						</div>
					</li>
				</ol>
			</nav>
			<div className='flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto'>
				<div className='w-full h-full max-w-md md:w-1/2'>
					<div className='relative  h-[700px] w-full'>
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
							className='mySwiper2 bg-gray-200'
						>
							{images}
						</Swiper>
					</div>
				</div>
				<ProductForm product={product} />
			</div>
			<hr className='border-1 max-w-7xl mx-auto' />
			{/* <p className='pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto'>
				{product.description}
			</p> */}
			<RecommendedList
				current={product.id}
				// product={product}
				products={product.collections.edges[0].node.products.edges}
			/>
		</>
	);
}
