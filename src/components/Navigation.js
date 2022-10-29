import { Navbar, Container, Image, Badge, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalButton } from './atoms/GlobalButton';
import brandImage from '../assets/icon/brand.svg';

import { useContext, useEffect, useState } from 'react';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { CartContext } from '../contexts/CartContext';
import NavProfile from './atoms/NavProfile';
import { LoginContext } from '../contexts/LoginContext';

export const Navigation = () => {
	const navigate = useNavigate();
	
	const { isLogin, setIsLogin } = useContext(LoginContext);
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	return (
		<>
			<Navbar style={{ backgroundColor: '#FFC700' }}>
				<Container className='d-flex justify-content-between'>
					<Link to='/'>
						<Image src={brandImage}></Image>
					</Link>
					<div className='d-flex gap-3'>
						{!isLogin ? (
							<>
								<GlobalButton
									name='register'
									bgColor='#433434'
									onClick={() => setShowRegister(true)}
								/>
								<GlobalButton
									name='Login'
									onClick={() => {
										setShowLogin(true);
									}}
									bgColor='#433434'
								/>
							</>
						) : (
							<NavProfile setIsLogin={setIsLogin} role={localStorage.role} />
						)}
					</div>
				</Container>
			</Navbar>
			<Login
				show={showLogin}
				setShow={setShowLogin}
				isLogin={isLogin}
				setIsLogin={setIsLogin}
				setShowRegister={setShowRegister}
			/>
			<Register
				show={showRegister}
				setShow={setShowRegister}
				setShowLogin={setShowLogin}
			/>
		</>
	);
};
