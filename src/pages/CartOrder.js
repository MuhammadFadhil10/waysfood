import React from 'react';
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Image,
	Row,
} from 'react-bootstrap';
import { GlobalButton } from '../components/atoms/GlobalButton';
import { GlobalInput } from '../components/atoms/GlobalInput';
import {
	IoLocationSharp,
	IoMapOutline,
	IoTrash,
	IoTrashOutline,
} from 'react-icons/io5';

import geprekImage from '../assets/image/geprek-bensu.png';

const CartOrder = () => {
	return (
		<Container className=' d-flex flex-column gap-3 pt-5'>
			<h1 className='fs-3'>Geprek Bensu</h1>
			<div className='w-100 mb-3'>
				<h5>Delivery Location</h5>
				<Form className='d-flex gap-3'>
					<Form.Group className='w-100 shadow d-flex'>
						{/* <IoLocationSharp size={30} /> */}
						<Form.Control type='text'></Form.Control>
					</Form.Group>

					{/* <GlobalButton
						name='Select on map'
						bgColor='#433434'
						className='w-25 border-0'
					/> */}
					<Button
						className='w-25 d-flex gap-3 justify-content-center align-items-center'
						style={{ backgroundColor: '#433434', border: 'none' }}
					>
						Select On Map <IoMapOutline color='white' />{' '}
					</Button>
				</Form>
			</div>
			{/* cart detail */}
			<div>
				<h1 className='fs-3'>Review Your Order</h1>
				<div className='d-flex justify-content-between gap-5 '>
					<div className=' justify-content-between w-75 left'>
						<hr />
						{/* <div className='mb-4 w-75 p-2  d-flex flex-row justify-content-between'> */}
						<div className='d-flex gap-3 align-items-center w-100 justify-content-between p-2'>
							<div className='d-flex'>
								<Image src={geprekImage} width='150px' className='me-3' />
								<div className='d-flex flex-column align-items-center'>
									<h1 className='fs-5'>Paket geprek</h1>
									<div className='d-flex gap-3 align-items-center'>
										<p className='fs-1' style={{ cursor: 'pointer' }}>
											-
										</p>

										<p className='fs-4'>0</p>
										<p className='fs-1' style={{ cursor: 'pointer' }}>
											+
										</p>
									</div>
								</div>
							</div>
							<div className='d-flex flex-column'>
								<p>Rp 15.000</p>
								<IoTrashOutline size={30} cursor='pointer' />
							</div>
						</div>
						<hr />
						{/*  */}
						<div className='d-flex gap-3 align-items-center w-100 justify-content-between p-2'>
							<div className='d-flex'>
								<Image src={geprekImage} width='150px' className='me-3' />
								<div className='d-flex flex-column align-items-center'>
									<h1 className='fs-5'>Paket geprek</h1>
									<div className='d-flex gap-3 align-items-center'>
										<p className='fs-1' style={{ cursor: 'pointer' }}>
											-
										</p>

										<p className='fs-4'>0</p>
										<p className='fs-1' style={{ cursor: 'pointer' }}>
											+
										</p>
									</div>
								</div>
							</div>
							<div className='d-flex flex-column'>
								<p>Rp 15.000</p>
								<IoTrashOutline size={30} cursor='pointer' />
							</div>
						</div>
						<hr />
					</div>
					<div className='w-50'>
						<hr className='w-100' />
						{/* <div> */}
						<div className='total-field d-flex justify-content-between'>
							<p>Subtotal</p>
							<p>Rp 35.000</p>
						</div>
						<div className='total-field d-flex justify-content-between'>
							<p>Qty</p>
							<p>2</p>
						</div>
						<div className='total-field d-flex justify-content-between'>
							<p>Ongkir</p>
							<p>Rp 10.000</p>
						</div>
						{/* </div> */}
						<hr />
						<div className='total-field d-flex justify-content-between'>
							<h1 className='fs-4'>Total</h1>

							<h1 className='fs-4'>Rp 45.000</h1>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default CartOrder;
