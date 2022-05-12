import { getProductsInCollection } from '../lib/query';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';

// destructuring the "props" from our "getStaticProps" function -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Home({ products }) {
	return (
		<div className=''>
			<Hero />
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
