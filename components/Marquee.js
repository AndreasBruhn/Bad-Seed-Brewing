import Image from 'next/image';

export default function Marquee() {
	return (
		<div className='w-full h-full'>
			<div className='col-span-7 w-full flex flex-start flex-col justify-center bg-blend-darken'>
				<Image src={require('../assets/img/MarqueeBgImg.png')} alt='hero' layout='responsive' />
			</div>
		</div>
	);
}
