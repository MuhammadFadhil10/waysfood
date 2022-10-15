import { Dropdown, Image, Badge } from 'react-bootstrap';

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import cartImage from '../../assets/icon/cart.svg';
import profileImage from '../../assets/image/profile.png';

const NavProfile = ({ role, setIsLogin }) => {
	const navigate = useNavigate();
	const { cartData, setCartData } = useContext(CartContext);
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
							<Image src={profileImage} width='45px' height='45px'></Image>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								className='d-flex align-items-center border-bottom'
								style={{ height: '50px' }}
							>
								<Link to='/profile' className='text-dark text-decoration-none'>
									Profile
								</Link>
							</Dropdown.Item>
							<Dropdown.Item
								className='d-flex align-items-center'
								style={{ height: '50px' }}
							>
								<p
									className='text-danger'
									onClick={() => {
										setIsLogin(false);
									}}
								>
									Logout
								</p>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</>
	);
};

export default NavProfile;
