import Image from 'next/image';

export default function MasonryGrid({ masonryImages }) {
	return (
		<div>
			{masonryImages.map((image, index) => {
				const { src, width, height } = image.default;
				console.log(src);
				<Image src={src} key={index} alt='masonry' layout='responsive' />;
			})}
		</div>
	);
}

{
	/* <Image
src={require('../assets/img/RichTextImgComp_img.png')}
alt='hero'
layout='responsive'
/> */
}
