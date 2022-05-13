import { getProductsInCollection } from '../../lib/query';
import ProductList from '../../components/ProductList';
import Hero from '../../components/Hero';
import Head from 'next/head';

// destructuring the "props" from our "getStaticProps" function -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Shop({ products }) {
	return (
		<div className=''>
			<ProductList products={products} />
		</div>
	);
}

export async function getStaticProps() {
	const products = await getProductsInCollection(); // getting products from our query to the Home Page collection in "lib/query.js"

	return {
		props: { products }, // will be passed to the page component as props
	};
}
