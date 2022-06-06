import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const navigation = [
	{ name: 'About', href: '/about' },
	{ name: 'Shop', href: '/shop' },
	{ name: 'Privat & Leveringspolitik', href: '/privacy-policy' },
];

const info1 = [
	{
		title: 'Bad Seed Brewing',
		description:
			'Mikrobryggeri med base lidt uden for Aalborg. Vores mission er at skabe dristige, smagfulde og letdrikkelige øl.',
		facebook: <FaFacebookF />,
		instagram: <FaInstagram />,
	},
];
const info2 = [
	{
		title: 'Info',
		smileyName: 'Smiley Rapport',
		smileyHref: 'https://www.findsmiley.dk/757647',
		policyName: 'Handels & Leveringspolitik',
		policyHref: '/privacy-policy',
	},
];
const info3 = [
	{
		title: 'Kontakt',
		companyName: 'Bade Seed	Brewing',
		address: 'Landkærsvej 4',
		zip: '9280 Storvorde, Danmark',
		phone: 'tel:+4530319268',
		email: 'mailto: info@badseedbrewing.dk',
	},
];

export default function Footer() {
	return (
		<footer className='bg-black h-auto text-gray-300 mt-16 md:mt-24'>
			<div className='grid grid-cols-1 md:grid-cols-3 md:gap-24 max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
				{info1.map((item, index) => (
					<div className='flex flex-col' key={index}>
						<h2 className='text-xl sm:text-3xl text-white'>{item.title}</h2>
						<p className='my-6'>{item.description}</p>
						<a className='flex'>
							<FaFacebookF className='hover:text-gray-100 cursor-pointer w-6 h-6' />
							<FaInstagram className='hover:text-gray-100 cursor-pointer w-6 h-6' />
						</a>
					</div>
				))}
				{info2.map((item, index) => (
					<div className='flex flex-col my-6' key={index}>
						<h2 className='text-xl sm:text-3xl text-white'>{item.title}</h2>
						<a href={item.smileyHref} className='text-gray-300 hover:text-gray-100 mt-6'>
							{item.smileyName}
						</a>
						<a href={item.policyHref} className='text-gray-300 hover:text-gray-100'>
							{item.policyName}
						</a>
					</div>
				))}

				{info3.map((item, index) => (
					<div key={index} className='flex flex-col'>
						<h2 className='text-xl sm:text-3xl text-white'>{item.title}</h2>
						<p className='mt-4'>{item.address}</p>
						<p className=''>{item.zip}</p>
						<span>
							Telefon:
							<a href={item.phone} className='text-gray-300 hover:text-gray-100'>
								+45 30319268
							</a>
						</span>
						<span>
							Email:
							<a href={item.email} className='text-gray-300 hover:text-gray-100'>
								info@badseedbrewing.dk
							</a>
						</span>
					</div>
				))}
			</div>
		</footer>
	);
}
