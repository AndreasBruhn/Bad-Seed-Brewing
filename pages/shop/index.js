import { getProductsInCollection } from '../../lib/query';
import ProductList from '../../components/ProductList';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

const sortOptions = [
	{ name: 'Mest Populære', href: '#', current: true },
	{ name: 'Bedste Rating', href: '#', current: false },
	{ name: 'Nyeste', href: '#', current: false },
	{ name: 'Pris: Lav til Høj', href: '#', current: false },
	{ name: 'Pris: Høj til Lav ', href: '#', current: false },
];
const subCategories = [
	{ name: 'Alle produkter', href: '#' },
	{ name: 'Brandy', href: '#' },
	{ name: 'Gin', href: '#' },
	{ name: 'Bundles', href: '#' },
	{ name: 'Ølglas', href: '#' },
];
const filters = [
	{
		id: 'type',
		name: 'Type',
		options: [
			{ value: 'ipa', label: 'Ipa', checked: false },
			{ value: 'stout', label: 'Stout', checked: false },
			{ value: 'pilsner', label: 'Pilsner', checked: true },
			{ value: 'lager', label: 'Lager', checked: false },
			{ value: 'rauchbier', label: 'Rauchbier', checked: false },
			{ value: 'purple', label: 'Purple', checked: false },
		],
	},
	{
		id: 'procent',
		name: 'Procent',
		options: [
			{ value: '4-5', label: '4-5', checked: false },
			{ value: '6-8', label: '6-8', checked: true },
		],
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

// destructuring the "props" from our "getStaticProps" function -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Shop({ products }) {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	return (
		<div className='bg-white'>
			<div>
				{/* Mobile filter dialog */}
				<Transition.Root show={mobileFiltersOpen} as={Fragment}>
					<Dialog as='div' className='relative z-40 lg:hidden' onClose={setMobileFiltersOpen}>
						<Transition.Child
							as={Fragment}
							enter='transition-opacity ease-linear duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-linear duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='fixed inset-0 bg-black bg-opacity-25' />
						</Transition.Child>

						<div className='fixed inset-0 flex z-40'>
							<Transition.Child
								as={Fragment}
								enter='transition ease-in-out duration-300 transform'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transition ease-in-out duration-300 transform'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'
							>
								<Dialog.Panel className='ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto'>
									<div className='px-4 flex items-center justify-between'>
										<h2 className='text-lg font-medium text-gray-900'>Filters</h2>
										<button
											type='button'
											className='-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400'
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className='sr-only'>Close menu</span>
											<XIcon className='h-6 w-6' aria-hidden='true' />
										</button>
									</div>

									{/* Filters */}
									<form className='mt-4 border-t border-gray-200'>
										{/* <h3 className='sr-only'>Kategorier</h3> */}
										<ul role='list' className='font-medium text-gray-900 px-2 py-3'>
											{subCategories.map((category) => (
												<li key={category.name}>
													<a href={category.href} className='block px-2 py-3'>
														{category.name}
													</a>
												</li>
											))}
										</ul>

										{filters.map((section) => (
											<Disclosure
												as='div'
												key={section.id}
												className='border-t border-gray-200 px-4 py-6'
											>
												{({ open }) => (
													<>
														<h3 className='-mx-2 -my-3 flow-root'>
															<Disclosure.Button className='px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500'>
																<span className='font-medium text-gray-900'>{section.name}</span>
																<span className='ml-6 flex items-center'>
																	{open ? (
																		<MinusSmIcon className='h-5 w-5' aria-hidden='true' />
																	) : (
																		<PlusSmIcon className='h-5 w-5' aria-hidden='true' />
																	)}
																</span>
															</Disclosure.Button>
														</h3>
														<Disclosure.Panel className='pt-6'>
															<div className='space-y-6'>
																{section.options.map((option, optionIdx) => (
																	<div key={option.value} className='flex items-center'>
																		<input
																			id={`filter-mobile-${section.id}-${optionIdx}`}
																			name={`${section.id}[]`}
																			defaultValue={option.value}
																			type='checkbox'
																			defaultChecked={option.checked}
																			className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
																		/>
																		<label
																			htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																			className='ml-3 min-w-0 flex-1 text-gray-500'
																		>
																			{option.label}
																		</label>
																	</div>
																))}
															</div>
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										))}
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='relative z-10 flex items-baseline justify-end md:justify-between pt-8  pb-6 border-b border-gray-200'>
						{/* if heading adjust above div to "justify-between" mobile layout */}
						<h2 className='text-2xl hidden md:block font-extrabold tracking-tight text-gray-900'>Filtrer</h2>

						<div className='flex items-center'>
							<Menu as='div' className='relative inline-block text-left'>
								<div>
									<Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
										Sorter
										<ChevronDownIcon
											className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
									</Menu.Button>
								</div>

								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items className='origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
										<div className='py-1'>
											{sortOptions.map((option) => (
												<Menu.Item key={option.name}>
													{({ active }) => (
														<a
															href={option.href}
															className={classNames(
																option.current ? 'font-medium text-gray-900' : 'text-gray-500',
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm'
															)}
														>
															{option.name}
														</a>
													)}
												</Menu.Item>
											))}
										</div>
									</Menu.Items>
								</Transition>
							</Menu>

							<button
								type='button'
								className='p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden'
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className='sr-only'>Filters</span>
								<FilterIcon className='w-5 h-5' aria-hidden='true' />
							</button>
						</div>
					</div>

					<section aria-labelledby='products-heading' className='pt-6 pb-24'>
						<h2 id='products-heading' className='sr-only'>
							Produkter
						</h2>

						<div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10'>
							{/* Filters */}
							<form className='hidden lg:block'>
								{/* <h3 className='sr-only'>Kategorier</h3> */}
								<ul
									role='list'
									className='text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200'
								>
									{subCategories.map((category) => (
										<li key={category.name}>
											<a href={category.href}>{category.name}</a>
										</li>
									))}
								</ul>

								{filters.map((section) => (
									<Disclosure as='div' key={section.id} className='border-b border-gray-200 py-6'>
										{({ open }) => (
											<>
												<h3 className='-my-3 flow-root'>
													<Disclosure.Button className='py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500'>
														<span className='font-medium text-gray-900'>{section.name}</span>
														<span className='ml-6 flex items-center'>
															{open ? (
																<MinusSmIcon className='h-5 w-5' aria-hidden='true' />
															) : (
																<PlusSmIcon className='h-5 w-5' aria-hidden='true' />
															)}
														</span>
													</Disclosure.Button>
												</h3>
												<Disclosure.Panel className='pt-6'>
													<div className='space-y-4'>
														{section.options.map((option, optionIdx) => (
															<div key={option.value} className='flex items-center'>
																<input
																	id={`filter-${section.id}-${optionIdx}`}
																	name={`${section.id}[]`}
																	defaultValue={option.value}
																	type='checkbox'
																	defaultChecked={option.checked}
																	className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
																/>
																<label
																	htmlFor={`filter-${section.id}-${optionIdx}`}
																	className='ml-3 text-sm text-gray-600'
																>
																	{option.label}
																</label>
															</div>
														))}
													</div>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								))}
							</form>

							{/* Product grid */}
							<div className='lg:col-span-3'>
								<div className=''>
									<ProductList products={products} />
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const products = await getProductsInCollection(); // getting products from our query to the Home Page collection in "lib/query.js"

	return {
		props: { products }, // will be passed to the page component as props
	};
}
