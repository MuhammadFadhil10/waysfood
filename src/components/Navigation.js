import { Navbar, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalButton } from './atoms/GlobalButton';
import brandImage from '../assets/icon/brand.svg';

export const Navigation = () => {
	return (
		<Navbar style={{ backgroundColor: '#FFC700' }}>
			<Container className='d-flex justify-content-between'>
				<Navbar.Brand href='#home'>
					<Image src={brandImage}></Image>
				</Navbar.Brand>
				<div className='d-flex gap-3'>
					<Link to='/register'>
						<GlobalButton name='register' bgColor='#433434' />
					</Link>
					<Link to='/login'>
						<GlobalButton name='Login' bgColor='#433434' />
					</Link>
				</div>
			</Container>
		</Navbar>
	);
};
