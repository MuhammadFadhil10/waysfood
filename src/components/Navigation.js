import { Navbar, Container, Image, Badge, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalButton } from './atoms/GlobalButton';
import brandImage from '../assets/icon/brand.svg';
import cartImage from '../assets/icon/cart.svg';
import profileImage from '../assets/image/profile.png';
import { useContext, useEffect, useState } from 'react';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { LoginContext } from '../contexts/LoginContext';
import { CartContext } from '../contexts/CartContext';

export const Navigation = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	const [isLogin, setIsLogin] = useState(false);
	const [userRole, setUserRole] = useState('');
	const { cartData, setCartData } = useContext(CartContext);
	const navigate = useNavigate();

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
						) : userRole === 'user' ? (
							<>
								<div className='d-flex gap-5'>
									<div
										className='d-flex align-items-center gap-3'
										style={{ cursor: 'pointer' }}
									>
										<Image
											src={cartImage}
											width='40px'
											height='40px'
											onClick={() => navigate('/cart/detail/:id')}
										></Image>{' '}
										{cartData.length > 0 && (
											<Badge
												bg='danger'
												pill
												style={{ height: '25px', width: '25px' }}
												className='d-flex align-items-center justify-content-center fs-6 position-absolute ms-4'
											>
												{cartData.length}
											</Badge>
										)}
										<Dropdown>
											<Dropdown.Toggle variant='' id='dropdown-basic'>
												<Image
													src={profileImage}
													width='45px'
													height='45px'
												></Image>
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Link
													to='/profile'
													className='text-dark text-decoration-none'
												>
													Profile
												</Link>
												<p
													className='text-danger'
													onClick={() => {
														setIsLogin(false);
													}}
												>
													Logout
												</p>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
							</>
						) : (
							<>
								<div className='d-flex gap-5'>
									<div
										className='d-flex align-items-center gap-3'
										style={{ cursor: 'pointer' }}
									>
										<Dropdown>
											<Dropdown.Toggle variant='' id='dropdown-basic'>
												<Image
													src={profileImage}
													width='45px'
													height='45px'
												></Image>
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Link
													to='/profile'
													className='text-dark text-decoration-none'
												>
													Profile
												</Link>
												<p>Product</p>
												<p
													className='text-danger'
													onClick={() => {
														setIsLogin(false);
													}}
												>
													Logout
												</p>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
							</>
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
				setUserRole={setUserRole}
			/>
			<Register
				show={showRegister}
				setShow={setShowRegister}
				setShowLogin={setShowLogin}
			/>
		</>
	);
};
