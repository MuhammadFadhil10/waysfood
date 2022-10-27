import { useState } from 'react';
import { FloatingLabel, Form, Container, Modal } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { API } from '../../config/api';
import { GlobalButton } from '../atoms/GlobalButton';
import { GlobalInput } from '../atoms/GlobalInput';
import { Login } from './Login';

export const Register = ({ show, setShow, setShowLogin }) => {
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [regisData, setRegisData] = useState({
		email: '',
		password: '',
		fullname: '',
		gender: '',
		phone: '',
		role: '',
	});

	const registerHandler = async () => {
		const response = await API.post('/register', regisData);
		console.log(response.data);
	};

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				className=' d-flex flex-column justify-content-center align-items-center'
			>
				<Container className='d-flex flex-column gap-4 justify-content-center align-items-center p-5'>
					<h1 style={{ color: '#FFC700' }} className='align-self-start'>
						Register
					</h1>
					<Form className='w-100 d-flex flex-column gap-3'>
						<div>
							<GlobalInput
								label='Email'
								type='email'
								placeholder='email'
								name='email'
								value={regisData.email}
								onChange={(e) => {
									setRegisData({
										...regisData,
										[e.target.name]: e.target.value,
									});
								}}
							/>
							<GlobalInput
								label='Password'
								type='password'
								placeholder='password'
								name='password'
								value={regisData.password}
								onChange={(e) => {
									setRegisData({
										...regisData,
										[e.target.name]: e.target.value,
									});
								}}
							/>
							<GlobalInput
								label='Full Name'
								type='text'
								placeholder='text'
								name='fullname'
								value={regisData.fullname}
								onChange={(e) => {
									setRegisData({
										...regisData,
										[e.target.name]: e.target.value,
									});
								}}
							/>
							<Form.Select
								aria-label='Default select example'
								name='gender'
								value={regisData.gender}
								onChange={(e) => {
									setRegisData({
										...regisData,
										[e.target.name]: e.target.value,
									});
								}}
							>
								<option>Gender</option>
								<option value='male'>Male</option>
								<option value='female'>Female</option>
							</Form.Select>
							<GlobalInput
								label='Phone'
								type='number'
								placeholder='phone'
								className='mt-3'
								name='phone'
								value={regisData.phone}
								onChange={(e) => {
									setRegisData({
										...regisData,
										[e.target.name]: e.target.value,
									});
								}}
							/>
							<Form.Select
								aria-label='Default select example'
								name='role'
								value={regisData.role}
								onChange={(e) => {
									setRegisData({
										...regisData,
										[e.target.name]: e.target.value,
									});
								}}
							>
								<option value='user'>As User</option>
								<option value='partner'>As Partner</option>
							</Form.Select>
						</div>
						<GlobalButton
							name='Register'
							bgColor='#433434'
							onClick={() => {
								// write code above
								setShow(false);
								registerHandler();
							}}
						/>
					</Form>
					<p className='text-muted'>
						Already have an account ? Click{' '}
						<span
							style={{ cursor: 'pointer' }}
							className='text-primary cursor-pointer'
							onClick={() => {
								setShow(false);
								setShowLogin(true);
							}}
							clasName='text-primary'
						>
							Here
						</span>
					</p>
				</Container>
			</Modal>
			{/* WHY ? :'))) */}
			{/* <Login show={showLogin} setShow={setShowLogin} /> */}
		</>
	);
};
