import { FloatingLabel, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalForm } from '../../components/atoms/GlobalForm';

export const Login = () => {
	return (
		<Container className='d-flex flex-column justify-content-center align-items-center'>
			<div>
				<h1 style={{ color: '#FFC700' }}>Login</h1>
				<Form>
					<GlobalForm label='Name' type='text' placeholder='email' />
					<GlobalForm label='Password' type='password' placeholder='password' />
				</Form>
				<p className='text-muted'>
					Don't have an account ? click <Link to='/register'>Here</Link>
				</p>
			</div>
			{/* <Form>
				<Form.Group>
					<FloatingLabel label='Email'>
						<Form.Control type='text' placeholder='email'></Form.Control>
					</FloatingLabel>
				</Form.Group>
				<Form.Group>
					<FloatingLabel label='Password'>
						<Form.Control type='password' placeholder='password'></Form.Control>
					</FloatingLabel>
				</Form.Group>
			</Form> */}
		</Container>
	);
};
