import React from 'react';
import ImgComp_omOs from './ImgComp_omOs';

export default function RichText() {
	return (
		<section className='flex flex-col flex-wrap md:flex-row pb-12 pt-12 max-w-2xl mx-auto md:max-w-7xl md:pb-12 px-12 md:px-0 md:-mt-12 md:pt-20'>
			<div className='col-span-5 w-full flex flex-col justify-center md:w-1/2'>
				<h2 className='text-3xl sm:text-5xl mb-6'>Specialøl med karakter</h2>
			</div>
			<div className='col-span-7 w-full flex flex-start flex-col justify-center md:py-8 md:w-1/2'>
				<p className=''>
					Vi lever i en tempofyldt ølverden, hvor mange mennesker synes at tænke &quot;nyt er altid
					bedre&quot;. Jeg ser dog en værdi i at finjustere opskrifter, forbedre og udvikle øl til
					deres bedste potentiale og have øl, som mine kunder kan lære at kende og elske.
				</p>
			</div>
			{/* <ImgComp_omOs /> */}
		</section>
	);
}
