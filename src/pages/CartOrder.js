import React, { useContext, useEffect, useState } from 'react';
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Image,
	Row,
	Modal,
} from 'react-bootstrap';
import { GlobalButton } from '../components/atoms/GlobalButton';
import { GlobalInput } from '../components/atoms/GlobalInput';
import map from '../assets/image/map.png';
import {
	IoLocationSharp,
	IoMapOutline,
	IoTrash,
	IoTrashOutline,
} from 'react-icons/io5';

import emptyCartImage from '../assets/image/cart-empty.png';
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { CartContext } from '../contexts/CartContext';

import convertRupiah from 'rupiah-format';
import Map from '../components/map/Map';
import { UserContext } from '../contexts/UserContext';

const CartOrder = () => {
	const [modalShow, setModalShow] = useState(false);
	const { cartLength, setCartLength } = useContext(CartContext);
	const { userProfile } = useContext(UserContext);

	// add to cart
	const addToCartHandler = async (productId, productPrice) => {
		try {
			const response = await API.post(`/cart/add/${productId}`, {
				price: productPrice,
			});
			refetch();
			const getCart = await API.get('/carts');
			setCartLength(getCart.data.data.length);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteCartHandler = async (productId) => {
		try {
			const response = await API.patch(`/cart/update/${productId}`);
			if (response.data.data.qty === 0) {
				const response = await API.delete(`/cart/delete/${productId}`);
				setCartLength((prev) => prev - 1);
			}
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	const { data: cartData, refetch } = useQuery('cartCache', async () => {
		try {
			const response = await API.get('/carts');
			// console.log(response.data.data);
			return response.data.data;
		} catch (error) {
			console.log(error);
		}
	});

	// calculate
	const allCartPrice = cartData?.map((item) => item.product.price * item.qty);
	const subTotal = allCartPrice?.reduce((a, b) => a + b, 0);

	const orderHandler = async () => {
		const response = await API.post('/transaction', {
			status: 'success',
			qty: 20,
		});

		console.log(response.data.data);
	};

	useEffect(() => {
		// cartData && console.log(cartData[0]?.product?.user?.location);
		refetch();
	}, []);

	return (
		<Container className=' d-flex flex-column gap-3 pt-5'>
			<h1 className='fs-3'>Geprek Bensu</h1>
			<div className='w-100 mb-3'>
				<h5>Delivery Location</h5>
				<Form className='d-flex gap-3'>
					<Form.Group className='w-100 d-flex'>
						{/* <IoLocationSharp size={30} /> */}
						<Form.Control type='text'></Form.Control>
					</Form.Group>
					<Button
						className='w-25 d-flex gap-3 justify-content-center align-items-center'
						style={{ backgroundColor: '#433434', border: 'none' }}
						onClick={() => setModalShow(true)}
					>
						Select On Map <IoMapOutline color='white' />{' '}
					</Button>
				</Form>
			</div>
			{/* cart detail */}

			<h1 className='fs-3'>Review Your Order</h1>
			<hr />
			<Row>
				<Col>
					{cartData?.length === 0 ? (
						<Col className='d-flex flex-column justify-content-center align-items-center'>
							<Image src={emptyCartImage} width='200px' />
							<h1>Oooops!!, You have no cart!! :( </h1>
						</Col>
					) : (
						cartData?.map((item) => (
							<Col>
								<Row className='d-flex align-items-center'>
									<Col>
										<Row className='d-flex align-items-center text-start'>
											<Col className='col-3'>
												<img
													src={item.product.image}
													style={{
														width: '80px',
														height: '80px',
														objectFit: 'cover',
													}}
												/>
											</Col>
											<Col className='col-9 ps-5 ps-lg-0'>
												<h6 className='my-3 ff-abhaya fw-bold'>
													{item.product.name}
												</h6>
												<h6 className='my-3 ff-avenir'>
													<GlobalButton
														name='-'
														bgColor='#433434'
														className='m-2'
														onClick={() => {
															deleteCartHandler(item.product.id);
														}}
													/>
													<span className='bg-light border-0 rounded text-dark'>
														{item.qty}
													</span>
													<GlobalButton
														name='+'
														bgColor='#433434'
														className='m-2'
														onClick={() => {
															addToCartHandler(
																item.product.id,
																item.product.price
															);
														}}
													/>
												</h6>
											</Col>
										</Row>
									</Col>
									<Col className='col-4 text-start'>
										<h6 className='text-danger my-3'>
											{convertRupiah.convert(item.price)}
										</h6>
										<h6 className='text-danger my-3'>
											<IoTrash
												style={{ cursor: 'pointer' }}
												onClick={async () => {
													const response = await API.delete(
														`/cart/delete/${item.product.id}`
													);
													refetch();
													setCartLength((prev) => prev - 1);
												}}
											/>
										</h6>
									</Col>
								</Row>
								<hr />
							</Col>
						))
					)}
				</Col>

				{cartData?.length > 0 && (
					<Col className='col-12 col-lg-4'>
						<Col>
							<Row className='d-flex align-items-center mt-2'>
								<Col>
									<Row className='d-flex align-items-center text-start'>
										<Col className='ff-abhaya'>
											<h6>Subtotal</h6>
											<h6>Qty</h6>
											<h6>Ongkir</h6>
										</Col>
										<Col className='ff-abhaya text-end'>
											<h6>{convertRupiah.convert(subTotal)}</h6>
											<h6>{cartLength}</h6>
											<h6>{convertRupiah.convert(10000 * cartLength)}</h6>
										</Col>
									</Row>
								</Col>
							</Row>
							<hr style={{ marginTop: '30px' }} />
						</Col>

						<Col>
							<Row className='d-flex align-items-center'>
								<Col>
									<Row className='d-flex align-items-center text-start text-danger'>
										<Col className='ff-abhaya'>
											<h6>Total</h6>
										</Col>
										<Col className='col-4 text-end ff-avenir'>
											<h6>
												{convertRupiah.convert(subTotal + 10000 * cartLength)}
											</h6>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Col>
				)}
				{/* </Col> */}
			</Row>
			{/* modal */}
			<Button
				className='w-25 d-flex gap-3 justify-content-center align-self-end mt-5'
				style={{ backgroundColor: '#433434', border: 'none' }}
				onClick={orderHandler}
			>
				Order
			</Button>
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Map
					routing={true}
					userProfile={userProfile}
					partnerLocation={cartData && cartData[0]?.product?.user?.location}
				/>
			</Modal>
		</Container>
	);
};

export default CartOrder;
