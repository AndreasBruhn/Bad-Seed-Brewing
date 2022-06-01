import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/shopContext';
import { useRouter } from 'next/router';
import MiniCart from './MiniCart';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Hjem', href: '/', current: true },
	{ name: 'Shop', href: '/shop', current: false },
	{ name: 'Om os', href: '/about', current: false },
];

function cn(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Nav() {
	const router = useRouter();
	const { cart, cartOpen, setCartOpen } = useContext(CartContext);

	// functions as a quantity counter
	let cartQuantity = 0;
	cart.map((item) => {
		return (cartQuantity += item?.variantQuantity);
	});

	return (
		<Disclosure as='nav' className='bg-white'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-0'>
						<div className='relative flex items-center justify-between'>
							{/* logo  */}
							<Link href='/' passHref>
								<a className='cursor-pointer'>
									<span className='text-lg pt-1 font-bold'>
										<Image
											src={require('../assets/img/bad-seed-brewing-logo.jpg')}
											alt={'logo'}
											layout='fixed'
											width={'75px'}
											height={'75px'}
										/>
									</span>
								</a>
							</Link>
							<div className='inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='hidden flex-1 md:flex items-center sm:items-stretch sm:justify-end'>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex items-center mx-auto'>
										{/* navigation */}
										{navigation.map((item) => (
											<li key={item.name} className='px-4 list-none '>
												<a
													href={item.href}
													className={cn(
														router.pathname == item.href
															? 'text-gray-700 font-bold border-b-2 border-w border-gray-700'
															: '',
														'p-2 hover:border-b-2 hover:outline-none hover:border-gray-700'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</a>
											</li>
										))}
										<a
											className='text-md font-bold cursor-pointer relative border-l-2 border-gray-300 pl-6'
											onClick={() => setCartOpen(!cartOpen)}
										>
											<ShoppingBagIcon className='h-7 w-7 ' />{' '}
											<span className='bg-black flex items-center justify-center w-6 h-6 text-white rounded-full absolute bottom-[65%] left-[70%]'>
												{cartQuantity}
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile menu  */}
					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
					<MiniCart cart={cart} />
				</>
			)}
		</Disclosure>
	);
}
