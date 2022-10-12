import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { GlobalButton } from './atoms/GlobalButton';
import { AllMenu } from '../data/AllMenu';

const RestaurantList = () => {
	return (
		<>
			<Container className=' d-flex flex-wrap gap-4 mt-4'>
				{AllMenu.map(
					(item, index) =>
						(item.name = (
							<Card
								className='shadow border-0'
								style={{ height: '300px', width: '23%' }}
								key={index}
							>
								<Card.Body className='d-flex flex-column justify-content-between '>
									<div>
										<Image src={item.image} />
										<h1 className='fs-6'>{item.menuName}</h1>
										<p className='align-self-start'>Rp {item.price}</p>
									</div>
									<GlobalButton
										name='Add To Cart'
										bgColor='#FFC700'
										textColor='#433434'
									/>
								</Card.Body>
							</Card>
						))
				)}
			</Container>
		</>
	);
};

export default RestaurantList;
