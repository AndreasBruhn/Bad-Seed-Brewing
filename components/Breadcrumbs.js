import Link from 'next/link';
import { BsSlash } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';

export default function Breadcrumbs({ products }) {
	console.log(products);
	const { title } = products;

	return (
		<nav className='flex pl-4 mb-4 md:pl-20 lg:pl-[17.5rem]' aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<Link href='/'>
						<a className='inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-500'>
							<HiHome className='w-5 h-5 text-gray-900 hover:text-gray-500' />
						</a>
					</Link>
				</li>
				<li>
					<div className='flex items-center'>
						<BsSlash className='w-6 h-6 -rotate-12' />
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
						<BsSlash className='w-6 h-6 -rotate-12 ' />
						<span className='ml-1 text-sm font-medium text-gray-900 md:ml-2 '>{title}</span>
					</div>
				</li>
			</ol>
		</nav>
	);
}
