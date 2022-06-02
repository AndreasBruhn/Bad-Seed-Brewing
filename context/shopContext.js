import { createContext, useState, useEffect } from 'react';
import { createCheckout, updateCheckout } from '../lib/query';

const CartContext = createContext();

export default function ShopProvider({ children }) {
	const [cart, setCart] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);
	const [checkoutId, setCheckoutId] = useState('');
	const [checkoutUrl, setCheckoutUrl] = useState('');

	// empty array only allows useEffect to run once
	useEffect(() => {
		if (localStorage.checkout_id) {
			const cartObject = JSON.parse(localStorage.checkout_id); // parse turns string into JSON object

			// check if cartObject only has one item
			if (cartObject[0].id) {
				setCart([cartObject[0]]);
			} else if (cartObject[0].length > 0) {
				setCart(...[cartObject[0]]);
			}

			setCheckoutId(cartObject[1].id);
			setCheckoutUrl(cartObject[1].webUrl);
		}
	}, []);

	async function addToCart(newItem) {
		setCartOpen(true); // "true" åbner kurven når en vare er tilføjes til kurv

		if (cart.length === 0) {
			setCart([newItem]);

			// checkout params is from the ProductForm.js where we
			// return different kinds of values from a product
			const checkout = await createCheckout(newItem.id, newItem.variantQuantity);

			setCheckoutId(checkout.id); // getting the "id" from the checkout object from our CreateCheckout query in "lib/query.js"
			setCheckoutUrl(checkout.webUrl); // getting the "webUrl" from the checkout object from our CreateCheckout query in "lib/query.js"

			// setting localeStorage
			localStorage.setItem('checkout_id', JSON.stringify([newItem, checkout]));
		} else {
			let newCart = [];
			let added = false;

			// newItem comes from the param of the addToCart function
			// checking if the id of the newItem is already in the cart
			// if it is, we want to update the quantity and set the newCart to
			// the new cart we just changed
			// if the id is not in the cart, we want to add the newItem to the cart
			cart.map((item) => {
				if (item.id === newItem.id) {
					item.variantQuantity += newItem.newVariantQuantity;
					newCart = [...cart];
					added = true;
					newItem.newVariantQuantity = 1;
				}
			});

			if (!added) {
				newCart = [...cart, newItem];
			}

			setCart(newCart); // updating the cart state
			const newCheckout = await updateCheckout(checkoutId, newCart); // create a new checkout object
			localStorage.setItem('checkout_id', JSON.stringify([newCart, newCheckout]));
		}
	}

	async function removeCartItem(itemToRemove) {
		const updatedCart = cart.filter((item) => item.id !== itemToRemove); // keeps the items in cart that is not equal to the items we want to remove

		setCart(updatedCart); // updating the cart state

		const newCheckout = await updateCheckout(checkoutId, updatedCart); // create a new checkout object

		localStorage.setItem('checkout_id', JSON.stringify([updatedCart, newCheckout])); // setting localeStorage

		// if items is removed from cart, we want to close the cart
		if (cart.length === 1) {
			setCartOpen(false);
		}
	}

	return (
		<div>
			<CartContext.Provider
				value={{
					cart,
					cartOpen,
					setCartOpen,
					addToCart,
					checkoutUrl,
					removeCartItem,
				}}
			>
				{children}
			</CartContext.Provider>
		</div>
	);
}

const ShopConsumer = CartContext.Consumer;
export { ShopConsumer, CartContext };
