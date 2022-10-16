import React from 'react';
import { Card, Col, Container, Image, Row, Alert } from 'react-bootstrap';

import profilePhoto from '../../assets/image/zayn.png';
import logo from '../../assets/icon/brand.svg';
import geprekImage from '../../assets/image/geprek-bensu.png';
import { GlobalButton } from '../../components/atoms/GlobalButton';
import { useNavigate } from 'react-router-dom';

const ProfilePartner = () => {
	const navigate = useNavigate();
	return (
		<Container className='mt-5'>
			<Row>
				<Col className='col-12 col-lg-6'>
					<h1 className='fs-3 mb-5'>My Profile</h1>
					<Row className='d-flex justify-content-star'>
						<Col className='col-5 col-lg-4'>
							<Image src={geprekImage} height='100%' width='180px' />
							<GlobalButton
								name='Edit Profile'
								bgColor='#433434'
								className='w-100 mt-3 border-0'
								onClick={() => navigate('/partner/profile/edit')}
							/>
						</Col>
						<Col>
							<div>
								<h1 className='fs-5'>Name Partner</h1>
								<p>Geprek Bensu</p>
							</div>
							<div>
								<h1 className='fs-5'>Email</h1>
								<p>bensu@gmail.com</p>
							</div>
							<div>
								<h1 className='fs-5'>Phone</h1>
								<p>083896833122</p>
							</div>
						</Col>
					</Row>
				</Col>
				<Col className='col-12 col-lg-6'>
					<h1 className='fs-3 mb-5'>History Transaction</h1>
					<div style={{ maxHeight: '300px', overflow: 'scroll' }}>
						<Card
							className='shadow d-flex flex-row justify-content-between p-2 mb-3'
							style={{ borderBox: 'box-sizing' }}
						>
							<div className=' d-flex flex-column justify-content-between '>
								<div style={{ lineHeight: '10px' }}>
									<p>Geprek Bensu</p>
									<p>
										<strong>Saturday,</strong> 12 March 2021
									</p>
								</div>
								<p className='text-danger'>Total: Rp 45.000</p>
							</div>
							<div className='d-flex flex-column align-items-center gap-3 w-25'>
								<Col>
									<Image src={logo} />
								</Col>
								<Col className='w-100 d-flex align-items-center justify-content-center'>
									{/* <p className='fs-6 text-success'>Finished</p> */}
									<Alert variant='success' className='p-1 w-100 text-center'>
										Finished
									</Alert>
								</Col>
							</div>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ProfilePartner;
