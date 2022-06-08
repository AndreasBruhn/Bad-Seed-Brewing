import Image from 'next/image';
import Link from 'next/link';
import AboutHero from '../../components/Hero_omOs';
import ImgComp_omOs from '../../components/ImgComp_omOs';
import ImgWithText_omOs from '../../components/ImgWithText_omOs';
import MasonryWithText from '../../components/MasonryWithText';
import RichText from '../../components/RichText_omOs';

export default function about() {
	return (
		<div className='mt-[70px] md:mt-[120px] md:mt-[114px]'>
			<AboutHero />
			<div className='bg-gradient-to-t text-center md:text-left from-transparent to-slate-100'>
				<RichText />
				<ImgComp_omOs />
			</div>
			<ImgWithText_omOs />
			<MasonryWithText />
		</div>
	);
}
