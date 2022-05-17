import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';
import Image from 'next/image';
import { ShoppingBagIcon } from '@heroicons/react/outline';

export default function Nav() {
	const { cart, cartOpen, setCartOpen } = useContext(CartContext);

	// functions as a quantity counter
	let cartQuantity = 0;
	cart.map((item) => {
		return (cartQuantity += item?.variantQuantity);
	});

	return (
		<header className='border-b sticky top-0 z-20 bg-white '>
			<div className='flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl'>
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
				<nav className='flex ml-6 space-x-6'>
					<Link href='/'>
						<a className=''>Hjem</a>
					</Link>
					<Link href='/shop'>
						<a className=''>Shop</a>
					</Link>
					<Link href='/about'>
						<a className=''>Om os</a>
					</Link>
					<a
						className='text-md font-bold cursor-pointer relative'
						onClick={() => setCartOpen(!cartOpen)}
					>
						<ShoppingBagIcon className='h-7 w-7' /> <span className='bg-black flex items-center justify-center w-6 h-6 text-white rounded-full absolute bottom-[65%] left-[70%]'>{cartQuantity}</span>
					</a>
				</nav>
				<MiniCart cart={cart} />
			</div>
		</header>
	);
}
