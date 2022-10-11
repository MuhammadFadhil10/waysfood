import { Button } from 'react-bootstrap';

export const GlobalButton = ({ name, variant, bgColor }) => {
	return (
		<Button
			variant={variant}
			className='border-0'
			style={bgColor && { backgroundColor: bgColor }}
		>
			{name}
		</Button>
	);
};
