import Image from 'next/image';
import Link from 'next/link';
import AboutHero from '../../components/Hero_omOs';
import ImgComp_omOs from '../../components/ImgComp_omOs';
import ImgWithText_omOs from '../../components/ImgWithText_omOs';
import MasonryWithText from '../../components/MasonryWithText';
import RichText from '../../components/RichText_omOs';

export default function about() {
	return (
		<div className='mt-[70px] lg:mt-[114px]'>
			<AboutHero />
			<div className='bg-gradient-to-t from-transparent to-slate-100'>
				<RichText />
				<ImgComp_omOs />
			</div>
			<ImgWithText_omOs />
			<MasonryWithText />
		</div>
	);
}
