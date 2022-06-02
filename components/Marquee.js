import Image from 'next/image';
import Ticker from 'react-ticker';

export default function Marquee({ headline }) {
	return (
		<div
			className='flex my-auto w-full md:h-[600px] max-w-2xl mx-auto md:max-w-7xl'
			style={{
				backgroundImage: 'url(/images/MarqueeBgImg_v2.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className='w-full h-full backdrop-blur-xs bg-black/40'>
				<div className='w-full py-24 md:py-64 '>
					<Ticker height={120} offset={80}>
						{() => <h2 className='text-3xl md:text-8xl font-extrabold mr-16 lg:mr-32 text-white'> {headline} </h2>}
					</Ticker>
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
