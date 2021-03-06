import Image from 'next/image';
import MasonryGrid from './MasonryGrid';

export default function MasonryWithText() {
	return (
		<section className='flex flex-col md:flex-row px-12 max-w-2xl mx-auto md:max-w-7xl md:pt-8'>
			<div className='w-full bg-transparent md:w-1/2 md:py-12'>
				<MasonryGrid />
			</div>

			<div className='col-span-5 w-full flex flex-col pt-8 md:w-1/2'>
				<h2 className='text-center md:text-left text-3xl sm:text-5xl mb-6'>Vores historie</h2>
				<div className='col-span-7 w-full flex flex-start flex-col bg-white text-center md:text-left'>
					<p className=''>
						Det startede i 2015 med nordjyden Fredrik Hector Schmidt, der startede Bad Seed Brewing
						som et fantom bryggeri, hvilket vil sige at han lejede sig ind hos andre bryghuse for at
						låne deres produktionsanlæg til fremstillingen af sine nytænkende ølvarianter. <br />
						<br />
						Efter blot tre år tog udviklingen så meget fart, at Bad Seed Brewing fik eget bryggeri i
						Gudumholm udenfor Aalborg. <br />
						<br />
						Som det tydeligt skinner igennem på øl etiketterne, henvender Bad Seed øllene sig til
						det yngre, eksperimenterende publikum. Der er ikke sparret på hverken farverne i
						designene eller smagsoplevelsen i de friske varianter. <br />
						<br /> I 2019 blev Bad Seed indstillet til Årets Danske Bryggeri - og både i ind- og
						udland er øl entusiaster begejstrede for de flotte dåser. <br />
						<br />
						Bad Seed er desuden med i Projekt Green, der hjælper virksomheder på vej til en
						bæredygtig om grøn omstilling.{' '}
					</p>
				</div>
			</div>
		</section>
	);
}
