import { useState } from 'react';
import data from '../data.json';
import profilePic from './assets/images/image-jeremy.png';
import Card from './components/Card';

function App() {
	const [period, setPeriod] = useState('daily');

	return (
		<main className='grid grid-cols-1 gap-14 sm:grid-cols-4 sm:grid-rows-2 h-2/4'>
			<div className='mb-7 sm:row-span-2 sm:h-3/4 relative'>
				<div className='relative rounded-xl flex sm:flex-col sm:justify-evenly sm:items-start w-full h-full bg-blue px-6 py-4 items-center justify-between z-10'>
					<img
						src={profilePic}
						alt=''
						className='w-14 border-[3px] rounded-full'
					/>
					<section className='text-white'>
						<p className='text-xs text-pale-blue'>Report for</p>
						<h2 className='text-xl font-light'>Jeremy Robinson</h2>
					</section>
				</div>
				<section className='bg-dark-blue absolute w-full h-32 sm:h-52 -bottom-14 -left-0 sm:gap-2 rounded-xl flex sm:flex-col sm:items-start sm:pl-8 items-end justify-evenly text-pale-blue text-sm pb-4 sm:pt-32 sm:top-32 pointer-events-auto'>
					<button
						style={{
							color: period === 'daily' ? 'white' : '',
						}}
						className='hover:text-white'
						onClick={() => {
							setPeriod('daily');
						}}
					>
						Daily
					</button>
					<button
						style={{
							color: period === 'weekly' ? 'white' : '',
						}}
						className='hover:text-white'
						onClick={() => setPeriod('weekly')}
					>
						Weekly
					</button>
					<button
						style={{
							color: period === 'monthly' ? 'white' : '',
						}}
						className='hover:text-white'
						onClick={() => setPeriod('monthly')}
					>
						Monthly
					</button>
				</section>
			</div>
			{data.map(item => (
				<Card
					title={item.title}
					period={period}
					current={item.timeframes.weekly.current}
					previous={item.timeframes.weekly.previous}
					timeframes={item.timeframes}
				/>
			))}
		</main>
	);
}

export default App;
