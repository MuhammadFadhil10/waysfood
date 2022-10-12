import { useContext, useEffect, useState } from 'react';
import { FloatingLabel, Form, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import { GlobalButton } from '../atoms/GlobalButton';
import { GlobalForm } from '../atoms/GlobalForm';
import { Register } from './Register';

export const Login = ({ show, setShow, setShowRegister }) => {
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { isLogin, setIsLogin } = useContext(LoginContext);

	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				className=' d-flex flex-column justify-content-center align-items-center'
			>
				<Container className='d-flex flex-column gap-4 justify-content-center align-items-center p-5'>
					<h1 style={{ color: '#FFC700' }} className='align-self-start'>
						Login
					</h1>
					<Form className='w-100 d-flex flex-column gap-3'>
						<div>
							<GlobalForm
								label='Email'
								type='email'
								placeholder='email'
								value={userData.email}
								onChange={(e) =>
									setUserData({ ...userData, email: e.target.value })
								}
							/>
							<GlobalForm
								label='Password'
								type='password'
								placeholder='password'
								value={userData.password}
								onChange={(e) =>
									setUserData({ ...userData, password: e.target.value })
								}
							/>
						</div>
						<GlobalButton
							name='Login'
							bgColor='#433434'
							onClick={() => {
								localStorage.setItem(
									'user',
									JSON.stringify({
										email: userData.email,
										password: userData.password,
									})
								);
								setIsLogin(true);
								setShow(false);
							}}
						/>
					</Form>
					<p className='text-muted'>
						Don't have an account ? click{' '}
						<span
							className='text-primary'
							style={{ cursor: 'pointer' }}
							onClick={() => {
								setShow(false);
								setShowRegister(true);
							}}
						>
							Here
						</span>
					</p>
				</Container>
			</Modal>
			{/* <Register show={showRegister} setShow={setShowRegister} /> */}
		</>
	);
};
