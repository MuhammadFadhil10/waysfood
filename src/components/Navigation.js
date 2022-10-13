import { Navbar, Container, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalButton } from './atoms/GlobalButton';
import brandImage from '../assets/icon/brand.svg';
import cartImage from '../assets/image/cart.png';
import profileImage from '../assets/image/profile.png';
import { useContext, useEffect, useState } from 'react';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { LoginContext } from '../contexts/LoginContext';
import { CartContext } from '../contexts/CartContext';

export const Navigation = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	const { isLogin, setIsLogin } = useContext(LoginContext);
	const { cartData, setCartData } = useContext(CartContext);

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
									onClick={() => setShowLogin(true)}
									bgColor='#433434'
								/>
							</>
						) : (
							<>
								<div className='d-flex gap-5'>
									<div className='d-flex gap-3'>
										<Image src={cartImage} width='40px' height='40px'></Image>{' '}
										<Badge
											bg='danger'
											pill
											style={{ height: '25px', width: '25px' }}
											className='d-flex align-items-center justify-content-center fs-6 position-absolute ms-4'
										>
											{cartData.length}
										</Badge>
										<Image
											src={profileImage}
											width='45px'
											height='45px'
										></Image>
									</div>
									<GlobalButton
										name='Logout'
										variant='outline-danger'
										onClick={() => {
											setIsLogin(false);
										}}
									/>
								</div>
							</>
						)}
					</div>
				</Container>
			</Navbar>
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
	);
};
