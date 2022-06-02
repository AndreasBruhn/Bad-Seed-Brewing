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
			<div className='relative w-full h-full backdrop-blur-xs bg-black/40'>
				<div className='w-full py-24 md:py-64 '>
					<Ticker height={120} offset={80}>
						{() => (
							<h2 className='text-3xl md:text-8xl font-extrabold mr-16 lg:mr-32 text-white'>
								{' '}
								{headline}{' '}
							</h2>
						)}
					</Ticker>
				</div>
				<div className='relative  h-64'>
					<Image src={require('../assets/img/hero_v1.png')} alt={`alt`} layout='fill' objectFit='contain' />
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
