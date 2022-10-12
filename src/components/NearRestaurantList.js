import { useContext, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import { NearRestaurant } from '../data/NearRestaurant';
import { Login } from './auth/Login';
import { Register } from './auth/Register';

export const NearRestaurantList = () => {
	const navigate = useNavigate();
	const { isLogin, setIsLogin } = useContext(LoginContext);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showRegisterModal, setShowRegisterModal] = useState(false);
	return (
		<>
			{NearRestaurant.map((item) => {
				return (
					<Card
						className='w-25 d-flex align-items-center border-0'
						style={{ height: '221px' }}
						onClick={() => {
							!isLogin
								? setShowLoginModal(true)
								: navigate('/product/list/:restId');
						}}
					>
						<Card.Header className='border-0'>
							<Image src={item.image} className='bg-primary '></Image>
						</Card.Header>
						<Card.Body className='align-self-start'>
							<h1 className='fs-6'>{item.name}</h1>
							<p>{item.distance}</p>
						</Card.Body>
					</Card>
				);
			})}
			<Login
				show={showLoginModal}
				setShow={setShowLoginModal}
				setShowRegister={setShowRegisterModal}
			/>
			<Register
				show={showRegisterModal}
				setShow={setShowRegisterModal}
				setShowLogin={setShowLoginModal}
			/>
		</>
	);
};
