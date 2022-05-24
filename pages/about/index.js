import Image from 'next/image';
import Link from 'next/link';
import AboutHero from '../../components/Hero_omOs';
import ImgComp_omOs from '../../components/ImgComp_omOs';
import ImgWithText_omOs from '../../components/ImgWithText_omOs';
import MasonryWithText from '../../components/MasonryWithText';
import RichText from '../../components/RichText_omOs';

export default function about() {
	return (
		<>
			<AboutHero />
			<RichText />
			<ImgComp_omOs />
			<ImgWithText_omOs />
			<MasonryWithText />
		</>
	);
}
