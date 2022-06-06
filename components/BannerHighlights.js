import { TruckIcon, CubeIcon, SparklesIcon } from '@heroicons/react/outline';

export default function BannerHighlights() {
	return (
		<div className='my-4 py-2 md:py-12 grid xs:grid-cols-2 md:grid-cols-3 items-center w-full text-lg max-w-2xl md:max-w-7xl mx-auto md:my-8 border-y border-gray-200 '>
			<div className='flex items-center justify-center'>
				<TruckIcon className='h-5 w-5 mr-1 text-gray-900' />
				<p>Fri fragt over 599 kr</p>
			</div>
			<div className='flex items-center py-2 justify-center md:py-0'>
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
