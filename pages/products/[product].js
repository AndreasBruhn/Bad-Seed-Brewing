import ProductPageContent from '../../components/ProductPageContent';
import { getAllProducts, getProduct } from '../../lib/query';

export default function ProductPage({ product }) {
	return (
		<div>
			<ProductPageContent product={product} />
		</div>
	);
}

export async function getStaticPaths() {
	const products = await getAllProducts(); // getting products

	// from our products we get our "paths" from the handle endpoint of each product
	const paths = products.map((productItem) => {
		const product = String(productItem.node.handle);

		return {
			params: { product },
		};
	});

	// passing the paths to our getStaticPaths function
	// this will be used to generate our dynamic routes
	return {
		paths,
		fallback: false,
	};
}

// params is from getStaticPaths
// we need to create a query for a specific product based on the handle
export async function getStaticProps({ params }) {
	const product = await getProduct(params.product); // accessing params and getting product handle

	return {
		// passing our product prop to our ProductPage function
		props: {
			product,
		},
	};
}
