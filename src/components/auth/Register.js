import { useState } from 'react';
import { FloatingLabel, Form, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalButton } from '../atoms/GlobalButton';
import { GlobalForm } from '../atoms/GlobalForm';
import { Login } from './Login';

export const Register = ({ show, setShow, setShowLogin }) => {
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				className=' d-flex flex-column justify-content-center align-items-center'
			>
				<Container className='d-flex flex-column gap-4 justify-content-center align-items-center p-5'>
					<h1 style={{ color: '#FFC700' }} className='align-self-start'>
						Register
					</h1>
					<Form className='w-100 d-flex flex-column gap-3'>
						<div>
							<GlobalForm label='Email' type='email' placeholder='email' />
							<GlobalForm
								label='Password'
								type='password'
								placeholder='password'
							/>
							<GlobalForm label='Full Name' type='text' placeholder='text' />
							<Form.Select aria-label='Default select example'>
								<option>Gender</option>
								<option value='1'>One</option>
								<option value='2'>Two</option>
								<option value='3'>Three</option>
							</Form.Select>
							<GlobalForm
								label='Phone'
								type='number'
								placeholder='phone'
								className='mt-3'
							/>
						</div>
						<GlobalButton
							name='Register'
							bgColor='#433434'
							onClick={() => {
								// write code above
								setShow(false);
							}}
						/>
					</Form>
					<p className='text-muted'>
						Already have an account ? Click{' '}
						<span
							style={{ cursor: 'pointer' }}
							className='text-primary cursor-pointer'
							onClick={() => {
								setShow(false);
								setShowLogin(true);
							}}
							clasName='text-primary'
						>
							Here
						</span>
					</p>
				</Container>
			</Modal>
			{/* WHY ? :'))) */}
			{/* <Login show={showLogin} setShow={setShowLogin} /> */}
		</>
	);
};
