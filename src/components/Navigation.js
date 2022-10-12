import { Navbar, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalButton } from './atoms/GlobalButton';
import brandImage from '../assets/icon/brand.svg';
import cartImage from '../assets/image/cart.png';
import profileImage from '../assets/image/profile.png';
import { useContext, useState } from 'react';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { LoginContext } from '../contexts/LoginContext';

export const Navigation = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	const { isLogin, setIsLogin } = useContext(LoginContext);

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
										<Image src={cartImage} width='40px' height='40px'></Image>
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
											localStorage.removeItem('user');
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
