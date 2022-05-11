import '../styles/globals.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/shopContext';
import { useRouter } from 'next/router';

// useRouter lets us add the dynamic products individually
// adding key={router.asPath} to <Component/> creates a unique key that is equal to the path

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<ShopProvider>
			<Layout>
				<Component {...pageProps} key={router.asPath} />
			</Layout>
		</ShopProvider>
	);
}

export default MyApp;
