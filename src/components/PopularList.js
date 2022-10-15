import { Card, Container, Image } from 'react-bootstrap';
import { Populars } from '../data/Popular';

export const PopularList = () => {
	return (
		<>
			{Populars.map((item, index) => {
				return (
					<div
						key={index}
						className='card shadow-sm d-flex flex-row w-25 border-0 align-items-center gap-3 ps-3 cursor-pointer'
					>
						<Image src={item.image}></Image>
						<h1 className='fs-4'>{item.name}</h1>
					</div>
				);
			})}
		</>
	);
};
