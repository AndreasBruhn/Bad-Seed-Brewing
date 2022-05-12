const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

// Create a new instance of ShopifyAPI
async function getShopifyData(query) {
	const URL = `https://${domain}/api/2022-04/graphql.json`;

	// from https://shopify.dev/api/examples/storefront-api
	const options = {
		endpoint: URL,
		method: 'POST',
		headers: {
			'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query }),
	};

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
	// if ok it runs try
	// if error it runs catch
	try {
		const data = await fetch(URL, options).then((response) => {
			return response.json();
		});

		return data;
	} catch (error) {
		throw new Error('Products not fetched');
	}
}

// getting products from out Home Page collection with our created query
export async function getProductsInCollection() {
	const query = `{
   collectionByHandle(handle: "frontpage") {
     title
     products(first: 25) {
       edges {
         node {
           id
           title
           handle
           priceRange {
             minVariantPrice {
               amount
															currencyCode
             }
           }
           images(first: 5) {
             edges {
               node {
																	url
                 altText
               }
             }
           }
         }
       }
     }
   }
 }`;

	// calling our shopify data with our query
	const response = await getShopifyData(query);

	// CONDITIONAL TERNARY OPERATOR
	// if edges -> return edges
	// else set edges to an empty array
	const allProducts = response.data.collectionByHandle.products.edges
		? response.data.collectionByHandle.products.edges
		: [];

	return allProducts;
}

export async function getAllProducts() {
	const query = `{
			products(first: 250) {
					edges {
							node {
									handle
									id
							}
					}
			}
	}`;

	const response = await getShopifyData(query);

	// CONDITIONAL TERNARY OPERATOR
	// if edges -> return edges
	// else set edges to an empty array
	const slugs = response.data.products.edges ? response.data.products.edges : [];

	return slugs;
}

export async function getProduct(handle) {
	const query = `
		{
			productByHandle(handle: "${handle}") {
					id
					title
					handle
					description
					images(first: 5) {
							edges {
									node {
											url
											altText
									}
							}
					}
					options {
							name
							values
							id
					}
					variants(first: 25) {
							edges {
									node {
											selectedOptions {
													name
													value
											}
											image {
													url
													altText
											}
											title
											id
											priceV2 {
													amount
											}
									}
							}
					}
			}
	}`;

	const response = await getShopifyData(query);

	// CONDITIONAL TERNARY OPERATOR
	// if productByHandle exists -> return productByHandle
	// else set productByHandle to an empty array
	const product = response.data.productByHandle ? response.data.productByHandle : {};

	return product;
}

// mutation create the checkout cart
export async function createCheckout(id, quantity) {
	const query = `
	mutation {
			checkoutCreate(input: {
				lineItems: [{variantId:
					"${id}", quantity: ${quantity}}]
			}) {
					checkout {
							id
							webUrl
					}
			}
	}`;

	const response = await getShopifyData(query);

	// CONDITIONAL TERNARY OPERATOR
	// if checkout -> return checkout
	// else set checkout to an empty array
	const checkout = response.data.checkoutCreate.checkout
		? response.data.checkoutCreate.checkout
		: [];

	console.log(checkout);
	return checkout;
}

// mutation for updating the cart
export async function updateCheckout(id, lineItems) {
	const lineItemsObject = lineItems.map((item) => {
		return `{
			variantId: "${item.id}",
			quantity: ${item.variantQuantity}
		}`;
	});

	// querying cart to update for product variants and quantity
	const query = `
	mutation {
			checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
					checkout {
							id
							webUrl
							lineItems(first: 25) {
									edges {
											node {
													id
													title
													quantity
											}
									}
							}
					}
			}
	}`;

	const response = await getShopifyData(query);

	// CONDITIONAL TERNARY OPERATOR
	// if checkout -> return checkout
	// else set checkout to an empty array
	const checkout = response.data.checkoutLineItemsReplace.checkout
		? response.data.checkoutLineItemsReplace.checkout
		: [];

	return checkout;
}
