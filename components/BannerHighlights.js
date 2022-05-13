export default function BannerHighlights() {
	return (
		<div className='h-24 grid grid-cols-1 md:grid-cols-3 items-center  w-full bg-red'>
			<div className='flex justify-center'>
				<img />
				<p>Fri fragt over 599 kr</p>
			</div>
			<div className='flex justify-center'>
				<img />
				<p>Produceret i Danmark</p>
			</div>
			<div className='flex justify-center'>
				<img />
				<p>Unikke smage</p>
			</div>
		</div>
	);
}
