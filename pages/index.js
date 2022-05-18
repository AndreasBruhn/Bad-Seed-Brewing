import { getProductsInCollection } from '../lib/query';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import Head from 'next/head';
import BannerHighlights from '../components/BannerHighlights';
import FeaturedSection from '../components/FeaturedSection';
import Marquee from '../components/Marquee';
import ProductGrid from '../components/ProductGrid';
import FloatingImgSection from '../components/FloatingImgSection';

// destructuring the "props" from our "getStaticProps" function -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Home({ products }) {
	return (
		<div className='relative'>
			<Head>
				<title>Bad Seed Brewing</title>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta httpEquiv='Content-Type' content='text/html; charset=ISO-8859-1' />
				<meta name='description' content='Bad Seed Brewing' />
				<meta property='og:title' content='Bad Seed Brewing' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://bsb-v1.vercel.app/' />
				<meta property='og:image' content='https://bsb-v1.vercel.app/bad-seed-brewing-logo.jpg' />
				<meta
					property='og:description'
					content='Bad Seed Brewing is a small danish company specialized in the of craft beer.'
				/>
				<meta property='og:locale' content='dk_DK' />
				<meta property='og:site_name' content='Bad Seed Brewing' />
			</Head>
			<Hero />
			<BannerHighlights />
			<FeaturedSection />
			<Marquee headline='Øl med omtanke' />
			<ProductGrid products={products} />
			<FloatingImgSection />
		</div>
	);
}

export async function getStaticProps() {
	const products = await getProductsInCollection(); // getting products from our query to the Home Page collection in "lib/query.js"

	return {
		props: { products }, // will be passed to the page component as props
	};
}
