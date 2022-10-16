import { Card, Container, Image, Row, Col } from 'react-bootstrap';
import { Populars } from '../data/Popular';

export const PopularList = () => {
	return (
		<>
			<div className=' w-100 '>
				<Row>
					{Populars.map((item, index) => {
						return (
							<Col key={index} className='my-3 col-12 col-md-3'>
								<Card width='18 rem'>
									<Card.Body className='d-flex align-items-center shadow'>
										<Card.Img
											variant='top'
											src={item.image}
											style={{ width: '50px', marginRight: '15px' }}
										/>
										<Card.Title>{item.name}</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
		</>
	);
};
