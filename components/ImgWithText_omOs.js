import Image from 'next/image';

export default function ImgWithText_omOs() {

	return (
		<section className='flex flex-col md:flex-row pt-20 px-12 max-w-2xl mx-auto md:max-w-7xl'>
			<div className='col-span-5 w-full flex flex-col justify-center relative blockquote md:w-1/2 lg:pr-8'>
				<h2 className='text-3xl sm:text-5xl mb-6'>
					Man kan sige at ‘Bad Seed’ svarer til det sorte får. Én, der skiller sig ud - jeg vil
					gerne skille mig ud med min øl
				</h2>
				<div className='col-span-7 w-full flex flex-start flex-col justify-center bg-wh pb-8'>
					<h4 className=''>Fredrik Hector Schmidt, indehaver af Bad Seed Brewing</h4>
				</div>
			</div>
			<div className='w-full bg-transparent md:w-1/2 md:py-12'>
				<Image src={require('../assets/img/RichTextImgComp_img.png')} alt='hero' layout='responsive' />
			</div>
		</section>
	);
}
