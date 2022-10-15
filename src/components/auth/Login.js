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

	const [loginMessage, setLoginMessage] = useState('');

	// function to return if password match, return a error or success message

	const loginSuccess = (email, password) => {
		// let statusMessage;
		const emailCheck = userData.filter((field) => field.email === email);
		if (emailCheck.length === 0) {
			setLoginMessage("You're not registered ");

			return {
				status: false,
				message: loginMessage,
			};
		}
		const filterResult = userData.filter(
			(field) => field.password === password
		);
		if (filterResult.length === 0) {
			setLoginMessage('Password Wrong');
			return {
				status: false,
				message: loginMessage,
			};
		}
		setLoginMessage('Success Login!');
		setLoginMessage('Success Login!');

		return {
			status: true,
			message: loginMessage,
			user: filterResult[0],
		};
	};

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				className=' d-flex flex-column justify-content-center align-items-center'
			>
				<Container className='d-flex flex-column gap-4 justify-content-center align-items-center p-5'>
					{
						<p
							className={!loginSuccess.status ? 'text-danger' : 'text-success'}
						>
							{loginMessage}
						</p>
					}
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
								const loginCheck = loginSuccess(
									userLogin.email,
									userLogin.password
								);
								console.log(loginCheck);
								localStorage.setItem(
									'user',
									JSON.stringify({
										email: userLogin.email,
										password: userLogin.password,
										role: loginCheck.user.role,
									})
								);
								loginCheck.status && setIsLogin(loginCheck.status);
								setUserRole(loginCheck.user.role);
								loginCheck.status &&
									setTimeout(() => {
										setShow(false);
									}, 1500);
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
