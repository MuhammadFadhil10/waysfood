import { Card, Container, Image, Row, Col } from 'react-bootstrap';
import { Populars } from '../data/Popular';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

export const PopularList = () => {
	const navigate = useNavigate();
	const { isLogin, setIsLogin } = useContext(LoginContext);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showRegisterModal, setShowRegisterModal] = useState(false);

	const { data: popularRestaurant, refetch } = useQuery(
		'nearRestaurentCache',
		async () => {
			const response = await API.get('/users?role=partner');
			return response.data.data;
		}
	);

	useEffect(() => {
		refetch();
		AOS.init();
	}, []);

	return (
		<>
			<div className=' w-100 '>
				<Row>
					{popularRestaurant?.map((item) => {
						return (
							<Col
								key={item.id}
								className='my-3 col-12 col-md-3'
								style={{ eight: '221px', cursor: 'pointer' }}
								onClick={() => {
									!isLogin
										? setShowLoginModal(true)
										: navigate(`/menu/list/${item.fullName}/${item.id}`);
								}}
							>
								<Card
									width='18 rem'
									data-aos='fade-up'
									data-aos-duration='1000'
									style={{ height: '100px' }}
								>
									<Card.Body className='d-flex align-items-center shadow'>
										<Card.Img
											className='bg-danger w-25'
											variant='top'
											src={item.image}
										/>
										<Card.Title>{item.fullName}</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
			<Login
				show={showLoginModal}
				setShow={setShowLoginModal}
				isLogin={isLogin}
				setIsLogin={setIsLogin}
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
