import { Card, Container, Image } from 'react-bootstrap';
import { Populars } from '../data/Popular';

export const PopularList = () => {
	return (
		<>
			{Populars.map((item) => {
				return (
					<div className='card d-flex flex-row w-25 border-0 align-items-center gap-3 ps-3 cursor-pointer'>
						<Image src={item.image}></Image>
						<h3>{item.name}</h3>
					</div>
				);
			})}
		</>
	);
};
