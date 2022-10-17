import React, { useContext, useState } from 'react';
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
import { CartContext } from '../contexts/CartContext';
// import { cartData } from '../data/CartData';

const CartOrder = () => {
	const [modalShow, setModalShow] = useState(false);
	const { cartData, setCartData } = useContext(CartContext);

	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQty, setTotalQty] = useState(0);

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
					{cartData.length === 0 ? (
						<Col className='d-flex flex-column justify-content-center align-items-center'>
							<Image src={emptyCartImage} width='200px' />
							<h1>Oooops!!, You have no cart!! :( </h1>
						</Col>
					) : (
						cartData.map((item, index) => (
							<Col>
								<Row className='d-flex align-items-center'>
									<Col>
										<Row className='d-flex align-items-center text-start'>
											<Col className='col-3'>
												<img
													src={item.image}
													style={{
														width: '80px',
														height: '80px',
														objectFit: 'cover',
													}}
												/>
											</Col>
											<Col className='col-9 ps-5 ps-lg-0'>
												<h6 className='my-3 ff-abhaya fw-bold'>
													{item.menuName}
												</h6>
												<h6 className='my-3 ff-avenir'>
													<GlobalButton
														name='-'
														bgColor='#433434'
														className='m-2'
													/>
													<span className='bg-light border-0 rounded text-dark'>
														{item.qty}
													</span>
													<GlobalButton
														name='+'
														bgColor='#433434'
														className='m-2'
													/>
												</h6>
											</Col>
										</Row>
									</Col>
									<Col className='col-4 text-start'>
										<h6 className='text-danger my-3'>{item.price}</h6>
										<h6 className='text-danger my-3'>
											<IoTrash />
										</h6>
									</Col>
								</Row>
								<hr />
							</Col>
						))
					)}
				</Col>

				{cartData.length > 0 && (
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
											<h6>Rp. 60.000</h6>
											<h6>2</h6>
											<h6>Rp. 60.000</h6>
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
											<h6>Rp. 70.000</h6>
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
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Image src={map} />
			</Modal>
		</Container>
	);
};

export default CartOrder;
