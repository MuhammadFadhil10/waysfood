import { Dropdown, Image, Badge } from 'react-bootstrap';

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import cartImage from '../../assets/icon/cart.svg';
import profileImage from '../../assets/image/profile.png';
import addProduct from '../../assets/icon/add-product-dropdown.svg';
import logout from '../../assets/icon/logout-dropdown.svg';
import profile from '../../assets/icon/profile-dropdown.svg';
import { UserContext } from '../../contexts/UserContext';

const NavProfile = ({ setIsLogin }) => {
	const navigate = useNavigate();
	const userProfile = useContext(UserContext);
	const { cartData, setCartData } = useContext(CartContext);
	const role = localStorage.getItem('role');

	const logoutHandler = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('role');
		setIsLogin(false);
	};

	return (
		<>
			<div className='d-flex gap-5'>
				<div
					className='d-flex align-items-center gap-3'
					style={{ cursor: 'pointer' }}
				>
					{role === 'user' && (
						<>
							<Image
								src={cartImage}
								width='40px'
								height='40px'
								onClick={() => navigate('/cart/detail/:id')}
							></Image>
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
						</>
					)}

					<Dropdown>
						<Dropdown.Toggle variant='' id='dropdown-basic'>
							<Image src={userProfile?.image} width='45px' height='45px' className='rounded-pill'></Image>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								className=' align-items-center border-bottom'
								style={{ height: '50px' }}
							>
								<Link
									to={role === 'user' ? '/profile' : '/partner/profile'}
									className='text-dark text-decoration-none d-flex gap-2'
								>
									<Image src={profile} width='25px' />
									Profile
								</Link>
							</Dropdown.Item>
							{role === 'partner' && (
								<Dropdown.Item
									className='d-flex gap-2 align-items-center border-bottom'
									style={{ height: '50px' }}
								>
									<Link
										to='/partner/add-product'
										className='text-dark text-decoration-none d-flex gap-2'
									>
										<Image src={addProduct} width='25px' />
										Add Product
									</Link>
								</Dropdown.Item>
							)}
							<Dropdown.Item
								className='d-flex gap-2 align-items-center'
								style={{ height: '50px' }}
								onClick={() => {
									logoutHandler();
									navigate('/');
								}}
							>
								<Image src={logout} width='25px' />
								Logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</>
	);
};

export default NavProfile;
