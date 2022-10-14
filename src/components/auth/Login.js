import { useContext, useEffect, useState } from 'react';
import { FloatingLabel, Form, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
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
	setUserRole,
}) => {
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [userLogin, setUserLogin] = useState({
		email: '',
		password: '',
		role: 'user',
	});

	// function to return if password match, return a error or success message
	function loginSuccess(email, password) {
		let statusMessage;
		const emailCheck = userData.filter((field) => field.email === email);
		if (emailCheck.length === 0) {
			statusMessage = 'lu belum terdaftar tot';
			return {
				status: false,
				message: statusMessage,
			};
		}
		const filterResult = userData.filter(
			(field) => field.password === password
		);
		if (filterResult.length === 0) {
			statusMessage = 'password salah tot';
			return {
				status: false,
				message: statusMessage,
			};
		}
		statusMessage = 'Login success, silahkan logout. tapi boong';
		return {
			status: true,
			message: statusMessage,
			user: filterResult[0],
		};
	}

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
							<GlobalInput
								label='Email'
								type='email'
								placeholder='email'
								value={userLogin.email}
								onChange={(e) =>
									setUserLogin({ ...userLogin, email: e.target.value })
								}
							/>
							<GlobalInput
								label='Password'
								type='password'
								placeholder='password'
								value={userData.password}
								onChange={(e) =>
									setUserLogin({ ...userLogin, password: e.target.value })
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
										email: userLogin.email,
										password: userLogin.password,
									})
								);
								let hasLogin = loginSuccess(
									userLogin.email,
									userLogin.password
								);
								if (hasLogin.status) {
									console.log('success login');
								} else {
									console.log('failed login');
								}
								setUserRole(hasLogin.user.role);
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
