import { FloatingLabel, Form } from 'react-bootstrap';

export const GlobalForm = ({ label, ...rest }) => {
	return (
		<Form.Group className='mb-3'>
			<FloatingLabel label={label}>
				<Form.Control {...rest}></Form.Control>
			</FloatingLabel>
		</Form.Group>
	);
};
