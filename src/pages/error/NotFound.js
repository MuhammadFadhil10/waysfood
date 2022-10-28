import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GlobalButton } from '../../components/atoms/GlobalButton';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<Container className='d-flex flex-column align-items-center pt-5' >
            <h1 className='text-danger'>404</h1>
			<h3>
				Ooops!, look like the page you've try to find is not in our sites! :({' '}
			</h3>
			<h5>Make sure your url is correct!</h5>
			<GlobalButton name='Go Home' variant='warning' onClick={() => navigate('/')} className='mt-3' />
		</Container>
	);
};

export default NotFound;
