import React from 'react';
import ImgComp_omOs from './ImgComp_omOs';

export default function RichText() {
	return (
		<section className='flex flex-col flex-wrap md:flex-row pb-12 pt-20 max-w-2xl mx-auto md:max-w-7xl md:pb-12 px-12 md:px-0 md:-mt-12'>
			<div className='col-span-5 w-full flex flex-col justify-center md:w-1/2'>
				<h2 className='text-3xl sm:text-5xl mb-6'>Specialøl med karakter</h2>
			</div>
			<div className='col-span-7 w-full flex flex-start flex-col justify-center md:py-8 md:w-1/2'>
				<p className=''>
					Prøv en af de spændende bundles fra Bad Seed Brewing og tag ølsmagningen med hjem i stuen
					eller med hjem til vennerne.
				</p>
			</div>
			{/* <ImgComp_omOs /> */}
		</section>
	);
}
