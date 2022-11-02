import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container, Image, Modal } from 'react-bootstrap';
import { GlobalButton } from './atoms/GlobalButton';
import { AllMenu } from '../data/AllMenu';
import { CartContext } from '../contexts/CartContext';
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { useParams } from 'react-router-dom';

const MenuList = () => {
	const partnerId = useParams().id;

	// get store id already exist in user cart
	const [cartStoreExist, setCartStoreExist] = useState(null);

	const { cartLength, setCartLength } = useContext(CartContext);
	const [showModal, setShowModal] = useState(false);

	// fetch menu by partner clicked
	const { data: menu } = useQuery('menuCache', async () => {
		const response = await API.get(`/products/${partnerId}`);
		return response.data.data;
	});

	// get cart data to check if user cart is different location with new cart
	const { data: cartData, refetch } = useQuery('cartCache', async () => {
		try {
			const response = await API.get('/carts');
			setCartStoreExist(response.data.data[0].product.user.id);

			return response.data.data;
		} catch (error) {
			console.log(error);
		}
	});

	// add to cart
	const addToCartHandler = async (productId, productPrice, storeId) => {
		if (cartStoreExist && cartStoreExist !== storeId) {
			setShowModal(true);
			return;
		}
		try {
			const response = await API.post(`/cart/add/${productId}`, {
				price: productPrice,
			});
			const getCart = await API.get('/carts');
			setCartLength(getCart.data.data.length);
		} catch (error) {
			console.log(error);
		}
	};

	// delete all previous cart if user choose replace in modal
	const deleteAllCartHandler = async (productId, productPrice, storeId) => {
		try {
			const deleteResponse = await API.delete(`/cart/delete-all`);
			const addCartResponse = await API.post(`/cart/add/${productId}`, {
				price: productPrice,
			});
			const getCart = await API.get('/carts');
			setCartLength(getCart.data.data.length);
			setShowModal(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Container className=' d-flex flex-wrap gap-4 mt-4'>
				{menu?.map((item) => (
					<>
						<Card
							className='shadow border-0'
							style={{ height: '300px', width: '23%' }}
							key={item.id}
						>
							<Card.Body className='d-flex flex-column justify-content-between h-100 '>
								<div className=' h-50'>
									<Image src={item.image} width='100%' height='100%' />
									<h1 className='fs-6'>{item.title}</h1>
									<p className='align-self-start'>Rp {item.price}</p>
								</div>
								<GlobalButton
									name='Add To Cart'
									bgColor='#FFC700'
									textColor='#433434'
									onClick={() =>
										addToCartHandler(item.id, item.price, item.user.id)
									}
								/>
							</Card.Body>
						</Card>
						<Modal show={showModal}>
							<h1>
								You have already product in your cart with different store
								location, replace your current cart with {item.title} ?
							</h1>
							<Button
								variant='primary'
								onClick={() =>
									deleteAllCartHandler(item.id, item.price, item.user.id)
								}
							>
								Replace
							</Button>
							<Button
								variant='outline-danger'
								onClick={() => setShowModal(false)}
							>
								Cancel
							</Button>
						</Modal>
					</>
				))}
			</Container>
		</>
	);
};

export default MenuList;
