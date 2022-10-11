import './App.css';
import { Container, Image } from 'react-bootstrap';
import { Banner } from './components/Banner';

function App() {
	return (
		<Container fluid className='p-0' style={{ height: '558px' }}>
			<Banner />
			<Container className='section  mt-5 w-75' style={{ height: '200px' }}>
				<h1 className='mb-4'>Popular Restaurant</h1>
				{/* list container */}
				<div className=' w-100 d-flex' style={{ height: '80px' }}>
					{/* data map */}
					<div className='card shadow d-flex w-25 border-0'>
						<Image src=''></Image>
						<h3>Burger King</h3>
					</div>
				</div>
			</Container>
			<Container
				className='section bg-danger mt-5 w-75'
				style={{ height: '200px' }}
			>
				<h1>Popular Restaurant</h1>
				{/* list container */}
				<div className='bg-success w-100 d-flex'>
					{/* data map */}
					<div className='card shadow d-flex align-items-center'>
						<Image src=''></Image>
						<h3>Burger King</h3>
					</div>
				</div>
			</Container>
		</Container>
	);
}

export default App;
