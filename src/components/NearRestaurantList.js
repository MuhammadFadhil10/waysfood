import { Card, Image } from 'react-bootstrap';
import { NearRestaurant } from '../data/NearRestaurant';

export const NearRestaurantList = () => {
	return (
		<>
			{NearRestaurant.map((item) => {
				return (
					<Card
						className='w-25 d-flex align-items-center border-0'
						style={{ height: '221px' }}
					>
						<Card.Header className='border-0'>
							<Image src={item.image} className='bg-primary '></Image>
						</Card.Header>
						<Card.Body className='align-self-start'>
							<h1 className='fs-6'>{item.name}</h1>
							<p>{item.distance}</p>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
};
