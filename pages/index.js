import { getProductsInCollection } from '../lib/query';
import ProductList from '../components/ProductList';

// destructuring the "props" from our "getStaticProps" function -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Home({ products }) {
	console.log(products);

	return (
		<div className=''>
			{/* preview out data in browser window  */}
			{/* <pre>
      {JSON.stringify(products, null, 2)}
    </pre> */}

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
