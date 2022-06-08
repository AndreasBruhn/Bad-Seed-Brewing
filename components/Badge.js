import React from 'react';

export default function Badge() {
	return (
		<span className='absolute flex flex-col justify-center items-center w-28 h-28 lg:w-36 lg:h-36 bg-black text-white rounded-full rotate-6 z-10 right-[10%] bottom-[30%] lg:bottom-[68%] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]'>
			<h4 className='uppercase font-bold text-2xl lg:text-4xl'>Mix</h4>
			<p className='text-[9px] lg:text-[10px] text-center text-gray-300'>Perfekt til ølsmagning</p>
			<p className='text-center text-[12px] lg:text-lg'>
				6 packs <br /> 12 packs+
			</p>
		</span>
	);
}
