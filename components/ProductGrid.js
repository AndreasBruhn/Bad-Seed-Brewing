import { ProductCard } from './ProductCard';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function ProductGrid({ products }) {
	return (
		<div className='max-w-2xl mx-auto py-12 px-4 flex flex-col md:flex-row lg:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='w-full flex flex-col justify-center items-center mb-8 md:m-0 md:w-1/3  md:items-start md:justify-start'>
				<h2 className='text-2xl font-extrabold text-gray-900 mb-6 text-center md:text-left'>
					Populære Produkter
				</h2>
				<p className=' text-center md:text-left'>
					Et håndplukket udvalg af vores bedst sælgende produkter.
				</p>
				<Link href='/shop' passHref>
					<a className='inline-flex items-center mt-6 font-medium text-black bg-transparent hover:bg-white hover:text-gray-700 hover:border-black '>
						Shop alle produkter{' '}
						<span>
							<ArrowRightIcon className='h-5 w-5 ml-2 text-gray-900' />
						</span>
					</a>
				</Link>
			</div>

			<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 md:w-2/3'>
				{products.slice(0, 6).map((product) => (
					<ProductCard key={product.node.id} product={product} />
				))}
				<div className='grid btn-container justify-center md:col-start-2'>
					<Link href='/shop' passHref>
						<a className='inline-flex justify-center items-center mt-6 px-12  font-medium py-3 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white hover:border-black'>
							Se hele udvalget <ArrowRightIcon className='icon h-5 w-5 ml-2 text-gray-900' />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
