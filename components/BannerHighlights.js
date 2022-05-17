import { TruckIcon, CubeIcon, SparklesIcon } from '@heroicons/react/outline';

export default function BannerHighlights() {
	return (
		<div className='h-24 grid xs:grid-cols-2 md:grid-cols-3 items-center w-full text-lg max-w-2xl md:max-w-7xl mx-auto my-8'>
			<div className='flex items-center justify-center'>
				<TruckIcon className='h-5 w-5 mr-1 text-gray-900' />
				<p>Fri fragt over 599 kr</p>
			</div>
			<div className='flex items-center justify-center'>
				<CubeIcon className='h-5 w-5 mr-1 text-gray-900' />
				<p>Produceret i Danmark</p>
			</div>
			<div className='flex items-center justify-center'>
				<SparklesIcon className='h-5 w-5 mr-1 text-gray-900' />
				<p>Unikke smage</p>
			</div>
		</div>
	);
}
