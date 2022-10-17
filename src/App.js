import './App.css';
import { Card, Container, Image } from 'react-bootstrap';
import { Banner } from './components/Banner';
import { PopularList } from './components/PopularList';
import { NearRestaurantList } from './components/NearRestaurantList';

function App() {
	return (
		<Container fluid className='p-0 vh-100'>
			<Banner />
			<Container className='section  mt-5 w-75' style={{ height: '200px' }}>
				<h1 className='mb-4 fs-2'>Popular Restaurant</h1>
				<div className=' w-100 d-flex gap-2' style={{ height: '80px' }}>
					<PopularList />
				</div>
			</Container>
			<Container className='section mt-5 w-75 h-auto'>
				<h1 className='mb-4 fs-2'>Restaurant Near You</h1>
				<div className='d-flex gap-2'>
					<NearRestaurantList />
				</div>
			</Container>
		</Container>
	);
}

export default App;
