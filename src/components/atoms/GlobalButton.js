import { Button } from 'react-bootstrap';

export const GlobalButton = ({
	name,
	variant,
	bgColor,
	onClick,
	textColor,
}) => {
	return (
		<Button
			variant={variant}
			className={!variant && 'border-0'}
			style={bgColor && { backgroundColor: bgColor, color: textColor }}
			onClick={onClick}
		>
			{name}
		</Button>
	);
};
