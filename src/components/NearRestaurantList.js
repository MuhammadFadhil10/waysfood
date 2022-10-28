import { useContext, useState, useEffect } from 'react';
import { Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoginContext, UserContext } from '../contexts/LoginContext';
import { NearRestaurant } from '../data/NearRestaurant';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const NearRestaurantList = () => {
	const navigate = useNavigate();
	const { isLogin, setIsLogin } = useContext(LoginContext);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showRegisterModal, setShowRegisterModal] = useState(false);
	const [userRole, setUserRole] = useState('');

	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			{NearRestaurant.map((item, index) => {
				return (
					<Card
						key={index}
						className='w-25 shadow-sm d-flex align-items-center border-0'
						style={{ height: '221px', cursor: 'pointer' }}
						onClick={() => {
							!isLogin
								? setShowLoginModal(true)
								: navigate(`/menu/list/${item.name}/${index}`);
						}}
						data-aos='fade-up'
						data-aos-duration='1000'
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
				isLogin={isLogin}
				setIsLogin={setIsLogin}
				setShowRegister={setShowRegisterModal}
				setUserRole={setUserRole}
			/>
			<Register
				show={showRegisterModal}
				setShow={setShowRegisterModal}
				setShowLogin={setShowLoginModal}
			/>
		</>
	);
};
