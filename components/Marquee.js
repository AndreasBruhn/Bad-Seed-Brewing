import Image from 'next/image';
import Ticker from 'react-ticker';

export default function Marquee({ headline }) {
	return (
		<div
			className='flex my-auto w-full md:h-[829px] max-w-2xl mx-auto md:max-w-7xl'
			style={{
				backgroundImage: 'url(/images/marquee-bg.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: '',
			}}
		>
			<div className='relative w-full h-full '>
				<div className='w-full whitespace-nowrap py-24 md:py-64 '>
					<Ticker height={340} offset={80} speed={7}>
						{() => (
							<h2 className='text-3xl md:text-7xl lg:text-[300px] font-extrabold mr-16 lg:mr-64 text-white'>
								{' '}
								{headline}{' '}
							</h2>
						)}
					</Ticker>
				</div>
				<div className='relative h-28 w-28 left-[87%] bottom-[20%]'>
					<Image src={require('../assets/img/white-logo.png')} alt={`alt`} layout='fill' objectFit='contain' />
				</div>
			</div>
		</div>
	);
}

{
	/* <div className='col-span-7 w-full flex flex-start flex-col justify-center bg-blend-darken'>
  <Image src={require('../assets/img/MarqueeBgImg.png')} alt='hero' layout='responsive' />
</div> */
}
