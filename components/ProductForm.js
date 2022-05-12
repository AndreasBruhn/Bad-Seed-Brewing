import { useState, useContext } from 'react';
import { formatter } from '../utils/helpers';
import ProductOptions from './ProductOptions';
import { CartContext } from '../context/shopContext';

export default function ProductForm({ product }) {
	const { addToCart } = useContext(CartContext);

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
			variantTitle: variant.node.title,
			variantPrice: variant.node.priceV2.amount,
			variantQuantity: 1,
		};
	});

	// default values when a page loads
	const defaultValues = {};

	product.options.map((item) => {
		defaultValues[item.name] = item.values[0];
	});

	const [selectedVariant, setSelectedVariant] = useState(allVariantOptions); // default state
	const [selectedOptions, setSelectedOptions] = useState(defaultValues); // default state

	function setOptions(name, value) {
		setSelectedOptions((prevState) => {
			return { ...prevState, [name]: value };
		});

  // NEEDS TO BE EXPLAINED
		const selection = {
			...selectedOptions,
			[name]: value,
		};

		allVariantOptions.map((item) => {
			if (JSON.stringify(item.options) === JSON.stringify(selection)) {
				setSelectedVariant(item);
			}
		});
	}

	// option selector on product page
	return (
		<div className='rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3'>
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
				/>
			))}
			<button
				className='bg-black rounded-lg text-white px-2 py-3 mt-3 hover:bg-gray-800'
				onClick={() => {
					addToCart(selectedVariant);
				}}
			>
				Tilføj til ølkasse
			</button>
		</div>
	);
}
