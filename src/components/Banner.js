import { Container, Image } from 'react-bootstrap';
import pizzaImage from '../assets/image/pizza.png';

export const Banner = () => {
	return (
		<Container
			className='d-flex justify-content-center align-items-center h-100 shadow'
			style={{ backgroundColor: '#FFC700' }}
			fluid
		>
			<div className='mb-5 d-flex h-100 gap-5 align-items-center'>
				<div className='banner-left d-flex flex-column gap-4'>
					<h1 style={{ color: '#433434' }}>
						Are you hungry? <br /> Express Home Delivery
					</h1>
					<div className='d-flex gap-4'>
						<div
							style={{
								backgroundColor: '#433434',
								width: '110px',
								height: '3px',
								marginTop: '12px',
							}}
						></div>
						<div>
							<p
								style={{
									width: '274px',
									height: '76px',
									display: 'inline-block',
								}}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s.
							</p>
						</div>
					</div>
				</div>
				<div className='banner-Right App-logo'>
					<Image src={pizzaImage}></Image>
				</div>
			</div>
		</Container>
	);
};
