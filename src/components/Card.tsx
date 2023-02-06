import iconEllipsis from '../assets/images/icon-ellipsis.svg';
import iconExercise from '../assets/images/icon-exercise.svg';
import iconPlay from '../assets/images/icon-play.svg';
import iconSelfCare from '../assets/images/icon-self-care.svg';
import iconSocial from '../assets/images/icon-social.svg';
import iconStudy from '../assets/images/icon-study.svg';
import iconWork from '../assets/images/icon-work.svg';

type CardProps = {
	title: string;
	current: number;
	previous: number;
	period: string;
	timeframes: {
		daily: {
			current: number;
			previous: number;
		};
		weekly: {
			current: number;
			previous: number;
		};
		monthly: {
			current: number;
			previous: number;
		};
	};
};

const ICONS = {
	Work: iconWork,
	Play: iconPlay,
	Study: iconStudy,
	Exercise: iconExercise,
	Social: iconSocial,
	'Self Care': iconSelfCare,
};

const COLORS = {
	Work: 'hsl(15, 100%, 70%)',
	Play: 'hsl(195, 74%, 62%)',
	Study: 'hsl(348, 100%, 68%)',
	Exercise: 'hsl(145, 58%, 55%)',
	Social: 'hsl(264, 64%, 52%)',
	'Self Care': 'hsl(43, 84%, 65%)',
};

type IconKeys = keyof typeof ICONS;
type ColorKeys = keyof typeof COLORS;

function Cards({ title, period, timeframes }: CardProps) {
	return (
		<article key={title} className='relative'>
			<div
				className='w-full h-24 rounded-xl overflow-hidden relative'
				style={{ backgroundColor: COLORS[title as ColorKeys] }}
			>
				<img
					className='absolute right-3 -top-1 w-14'
					src={ICONS[title as IconKeys]}
				/>
			</div>
			<div className='h-full px-6 py-4 flex flex-col bg-dark-blue  cursor-pointer hover:bg-desaturated-pale-blue top-7 absolute w-full justify-between items-baseline rounded-lg'>
				<div className='flex text-white justify-between w-full items-center'>
					<h2 className='text-sm font-medium'>{title}</h2>
				</div>
				<div className='flex sm:flex-col items-center h-10 w-full justify-between sm:items-start'>
					<p className='text-2xl font-light sm:text-[2.5rem] sm:-mt-4 text-white'>
						{period === 'daily'
							? timeframes.daily.current > 1
								? `${timeframes.daily.current}hrs`
								: `${timeframes.daily.current}hr`
							: period === 'weekly'
							? timeframes.weekly.current > 1
								? `${timeframes.weekly.current}hrs`
								: `${timeframes.weekly.current}hr`
							: timeframes.monthly.current > 1
							? `${timeframes.monthly.current}hrs`
							: `${timeframes.monthly.current}hr`}
					</p>
					<p className='text-xs text-pale-blue'>
						{period === 'daily'
							? `Last Day - ${
									timeframes.daily.previous > 1
										? `${timeframes.daily.previous}hrs`
										: `${timeframes.daily.previous}hr`
							  }`
							: period === 'weekly'
							? `Last Week - ${
									timeframes.weekly.previous > 1
										? `${timeframes.weekly.previous}hrs`
										: `${timeframes.weekly.previous}hr`
							  }`
							: `Last Month - ${
									timeframes.monthly.previous > 1
										? `${timeframes.monthly.previous}hrs`
										: `${timeframes.monthly.previous}hr`
							  }`}
					</p>
				</div>
			</div>
			<img
				src={iconEllipsis}
				className='absolute right-5 top-14 cursor-pointer hover:brightness-200 w-10 p-3 -m-3'
			/>
		</article>
	);
}

export default Cards;
