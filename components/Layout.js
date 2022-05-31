import React from 'react';
import Footer from './Footer';
import Nav_v2 from './Nav_v2';

// the whole application is the child of the Layout component
export default function Layout({ children }) {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Nav_v2 />

			<main>{children}</main>

			<Footer />
		</div>
	);
}
