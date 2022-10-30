import { useContext, useEffect, useState } from 'react';
import { FloatingLabel, Form, Container, Modal, Alert } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../config/api';
import { CartContext } from '../../contexts/CartContext';
import { LoginContext, UserContext } from '../../contexts/LoginContext';
import { userData } from '../../data/UserData';
import { GlobalButton } from '../atoms/GlobalButton';
import { GlobalInput } from '../atoms/GlobalInput';
import { Register } from './Register';

export const Login = ({
	show,
	setShow,
	setShowRegister,
	isLogin,
	setIsLogin,
}) => {
	const navigate = useNavigate();
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [loginMessage, setLoginMessage] = useState('');
	const [loginResponse, setLoginResponse] = useState(null);

	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const loginHandler = async () => {
		try {
			const response = await API.post('/login', loginData);
			setLoginResponse(response.data);
			localStorage.setItem('token', response.data.data.token);
			localStorage.setItem('role', response.data.data.role);
			localStorage.setItem('id', response.data.data.id);
			setIsLogin(true);
			setShow(false);
			response.data.data.role == 'partner' && navigate('/partner/dashboard');
		} catch (error) {
			setLoginMessage(error.response.data.message);
		}
	};

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				className=' d-flex flex-column justify-content-center align-items-center'
			>
				<Container className='d-flex flex-column gap-4 justify-content-center align-items-center p-5'>
					{loginMessage != '' && <Alert variant='danger'>{loginMessage}</Alert>}
					<h1 style={{ color: '#FFC700' }} className='align-self-start'>
						Login
					</h1>
					<Form className='w-100 d-flex flex-column gap-3'>
						<div>
							<GlobalInput
								label='Email'
								type='email'
								placeholder='email'
								value={loginData.email}
								onChange={(e) =>
									setLoginData({ ...loginData, email: e.target.value })
								}
							/>
							<GlobalInput
								label='Password'
								type='password'
								placeholder='password'
								value={loginData.password}
								onChange={(e) =>
									setLoginData({ ...loginData, password: e.target.value })
								}
							/>
						</div>

						<GlobalButton
							name='Login'
							bgColor='#433434'
							onClick={() => {
								loginHandler();
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
