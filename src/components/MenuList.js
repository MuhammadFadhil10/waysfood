import React, { useContext, useState } from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { GlobalButton } from './atoms/GlobalButton';
import { AllMenu } from '../data/AllMenu';
import { CartContext } from '../contexts/CartContext';
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { useParams } from 'react-router-dom';

const MenuList = () => {
	const { cartData, setCartData } = useContext(CartContext);
	const partnerId = useParams().id;

	// fetch menu by partner clicked
	const { data: menu } = useQuery('menuCache', async () => {
		const response = await API.get(`/products/${partnerId}`);
		return response.data.data;
	});

	return (
		<>
			<Container className=' d-flex flex-wrap gap-4 mt-4'>
				{menu?.map((item) => (
					<Card
						className='shadow border-0'
						style={{ height: '300px', width: '23%' }}
						key={item.id}
					>
						<Card.Body className='d-flex flex-column justify-content-between h-100 '>
							<div className=' h-50'>
								<Image src={item.image} width='100%' height='100%' />
								<h1 className='fs-6'>{item.menuName}</h1>
								<p className='align-self-start'>Rp {item.price}</p>
							</div>
							<GlobalButton
								name='Add To Cart'
								bgColor='#FFC700'
								textColor='#433434'
								onClick={() => {
									setCartData([
										...cartData,
										{
											menuName: item.menuName,
											price: item.price,
											image: item.image,
											qty: 1,
										},
									]);

									localStorage.setItem('cart', JSON.stringify(cartData));
								}}
							/>
						</Card.Body>
					</Card>
				))}
			</Container>
		</>
	);
};

export default MenuList;
