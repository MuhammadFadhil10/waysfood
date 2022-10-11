import { Navbar, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalButton } from './atoms/GlobalButton';
import brandImage from '../assets/icon/brand.svg';
import cartImage from '../assets/image/cart.png';
import profileImage from '../assets/image/profile.png';
import { useState } from 'react';
import { Login } from './auth/Login';
import { Register } from './auth/Register';

export const Navigation = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	const isLogin = localStorage.getItem('login');

	return (
		<>
			<Navbar style={{ backgroundColor: '#FFC700' }}>
				<Container className='d-flex justify-content-between'>
					<Navbar.Brand href='#home'>
						<Image src={brandImage}></Image>
					</Navbar.Brand>
					<div className='d-flex gap-3'>
						<GlobalButton
							name='register'
							bgColor='#433434'
							onClick={() => setShowLogin(true)}
						/>
						<GlobalButton
							name='Login'
							onClick={() => setShowLogin(true)}
							bgColor='#433434'
						/>
					</div>
				</Container>
			</Navbar>
			{!isLogin ? (
				<>
					<Login
						show={showLogin}
						setShow={setShowLogin}
						setShowRegister={setShowRegister}
					/>
					<Register
						show={showRegister}
						setShow={setShowRegister}
						setShowLogin={setShowLogin}
					/>
				</>
			) : (
				<>
					<div className='d-flex'>
						<Image src={cartImage}></Image>
						<Image src={profileImage}></Image>
					</div>
				</>
			)}
		</>
	);
};
