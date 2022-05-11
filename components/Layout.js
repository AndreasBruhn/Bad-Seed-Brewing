import React from 'react';
import Nav from './Nav';

// the whole application is the child of the Layout component
export default function Layout({ children }) {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Nav />
			<main>{children}</main>
   <footer>Footer</footer>
		</div>
	);
}
