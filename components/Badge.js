import React from 'react';

export default function Badge() {
	return (
		<span className='hidden absolute lg:flex flex-col justify-center items-center w-36 h-36 bg-black text-white rounded-full rotate-6 z-10 right-[10%] bottom-[68%]'>
			<h4 className='uppercase font-bold text-4xl'>Mix</h4>
			<p className='text-[10px] text-center text-gray-300'>Perfekt til ølsmagning</p>
			<p>
				6 packs <br /> 12 packs+
			</p>
		</span>
	);
}
