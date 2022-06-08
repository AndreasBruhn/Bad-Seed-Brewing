import { useState, useContext } from 'react';
import { formatter } from '../utils/helpers';
import ProductOptions from './ProductOptions';
import { CartContext } from '../context/shopContext';

export default function ProductForm({ product }) {
	const { cart, addToCart } = useContext(CartContext);

	const allVariantOptions = product.variants.edges?.map((variant) => {
		const allOptions = {};

		variant.node.selectedOptions.map((option) => {
			allOptions[option.name] = option.value;
		});

		// used in miniCart component to display product details
		return {
			id: variant.node.id,
			title: product.title,
			handle: product.handle,
			image: variant.node?.image?.url, // if there is no image, it will return null
			options: allOptions,
			variantTitle: variant.node.title, // title for variant
			variantPrice: variant.node.priceV2.amount, // price
			variantQuantity: 1,
			newVariantQuantity: 1,
		};
	});

	// default values when a page loads
	const defaultValues = {};

	product.options.map((item) => {
		defaultValues[item.name] = item.values[0];
	});

	const [selectedVariant, setSelectedVariant] = useState(allVariantOptions); // default state
	const [selectedOptions, setSelectedOptions] = useState(defaultValues); // default state
	const [counter, setCounter] = useState(1); // default state

	function setOptions(name, value) {
		setSelectedOptions((prevState) => {
			return { ...prevState, [name]: value };
		});

		const selection = {
			...selectedOptions,
			[name]: value,
		};

		allVariantOptions.map((item) => {
			if (JSON.stringify(item.options) === JSON.stringify(selection)) {
				setSelectedVariant(item);
				setCounter(1);
			}
		});
	}

	// increment count of products -> limit is set to 9
	const increment = () => {
		counter < 9 ? (counter += 1) : (counter = 9);
		setCounter(counter);

		cart.map(() => {
			if (cart.includes(selectedVariant) && counter < 9) {
				selectedVariant.newVariantQuantity = counter;
				setCounter(selectedVariant.newVariantQuantity);
			} else if (!cart.includes(selectedVariant) && counter < 9) {
				selectedVariant.variantQuantity = counter;
				setCounter(selectedVariant.variantQuantity);
			}
		});
		if (cart.length === 0) {
			selectedVariant.variantQuantity = counter;
			setCounter(selectedVariant.variantQuantity);
		}
	};

	// decrement count of products -> limit is set to 9
	const decrement = () => {
		counter > 1 ? (counter -= 1) : (counter = 1);
		setCounter(counter);

		cart.map(() => {
			if (cart.includes(selectedVariant) && counter > 1) {
				selectedVariant.newVariantQuantity = counter;
				setCounter(selectedVariant.newVariantQuantity);
			} else if (!cart.includes(selectedVariant) && counter > 1) {
				selectedVariant.variantQuantity = counter;
				setCounter(selectedVariant.variantQuantity);
			}
		});
		if (cart.length === 0) {
			selectedVariant.variantQuantity = counter;
			setCounter(selectedVariant.variantQuantity);
		}
	};

	// this will handle the count of product determined in the counter
	// and add the specified number of products to the cart
	const handleChange = (e) => {
		counter = Number(e.target.value);
		setCounter(counter);

		cart.map(() => {
			if (cart.includes(selectedVariant)) {
				selectedVariant.newVariantQuantity = counter;
				setCounter(selectedVariant.newVariantQuantity);
			} else if (!cart.includes(selectedVariant)) {
				selectedVariant.variantQuantity = counter;
				setCounter(selectedVariant.variantQuantity);
			}
		});
		if (cart.length === 0) {
			selectedVariant.variantQuantity = counter;
			setCounter(selectedVariant.variantQuantity);
		}
		if (e.key === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
			e.target.blur(); // removes focus from input
		}
		if (isNaN(counter) || e.target.value == 0) {
			e.target.value = 1;
			parseInt(e.target.value);
			counter = 1;
			selectedVariant.variantQuantity = counter;
			selectedVariant.newVariantQuantity = counter;
			setCounter(1); //	reset counter to 1
		}
	};

	// option selector on product page
	return (
		<div className='p-4 flex flex-col w-full md:w-1/3'>
			<h2 className='text-2xl font-bold'> {product.title} </h2>
			<span className='pb-3'>
				{formatter.format(product.variants.edges[0].node.priceV2.amount)}
			</span>
			{product.options.map(({ name, values }) => (
				<ProductOptions
					key={`key-${name}`}
					name={name}
					values={values}
					selectedOptions={selectedOptions}
					setOptions={setOptions}
					selectedVariant={selectedVariant}
				/>
			))}
			<div className='text-center border rounded-sm mt-6 max-w-[10rem] flex justify-between my-2 xxs:w-full'>
				<button
					onClick={decrement}
					className=' text-black highlight-removal transition-all ease-in-out duration-100 px-3 py-2 font-semibold hover:bg-gray-200 active:bg-black active:text-white'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
							clipRule='evenodd'
						/>
					</svg>
				</button>

				<input
					id='quantity_input'
					autoComplete='off'
					inputMode='numeric'
					pattern='[0-9]*'
					onFocus={(e) => (e.target.value = '')} // clear input on focus
					onBlur={(e) => (e.target.value = counter)}
					className='text-base text-black transition-all ease-in-out duration-100 relative focus:outline-2 w-full py-2 text-center'
					type='text'
					value={counter}
					onChange={handleChange}
				/>

				<span className='flex'>
					<button
						onClick={increment}
						className=' text-black highlight-removal transition-all ease-in-out duration-100 px-3 py-2 font-semibold hover:bg-gray-200 active:bg-black active:text-white'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</span>
			</div>
			<button
				className='bg-black rounded-sm text-white px-2 py-3 mt-8 uppercase hover:bg-gray-800'
				onClick={() => {
					addToCart(selectedVariant);
					setCounter(1);
				}}
			>
				Tilføj til ølkasse
			</button>
			<p className='py-6'>{product.description}</p>
		</div>
	);
}
