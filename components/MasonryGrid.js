import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MasonryGrid() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-masonry md:grid-rows-masonry md:gap-3.5'>
			<motion.figure
				viewport={{ once: false }}
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: 'easeIn', duration: 0.5, delay: 0.2 }}
				className='relative md:col-start-1 md:col-span-5 md:row-start-1 md:row-span-3'
			>
				<Image
					src={require('../assets/img/masonry1.png')}
					alt='hero'
					layout='fill'
					objectFit='cover'
				/>
			</motion.figure>
			<motion.figure
				viewport={{ once: false }}
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ type: 'easeIn', duration: 0.5, delay: 0.2 }}
				className='relative md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-4'
			>
				<Image
					src={require('../assets/img/masonry3.png')}
					alt='hero'
					layout='fill'
					objectFit='cover'
				/>
			</motion.figure>
			<motion.figure
				viewport={{ once: false }}
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: 'easeIn', duration: 0.5, delay: 0.2 }}
				className='relative md:col-start-5 md:col-span-3 md:row-start-3 md:row-span-2'
			>
				<Image
					src={require('../assets/img/masonry2.png')}
					alt='hero'
					layout='fill'
					objectFit='cover'
				/>
			</motion.figure>
			<motion.figure
				viewport={{ once: false }}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ type: 'easeIn', duration: 0.5, delay: 0.2 }}
				className='relative md:col-start-4 md:col-span-3 md:row-start-5 md:row-span-4'
			>
				<Image
					src={require('../assets/img/masonry4.png')}
					alt='hero'
					layout='fill'
					objectFit='cover'
				/>
			</motion.figure>
		</div>
	);
}
