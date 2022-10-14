import { Button } from 'react-bootstrap';

export const GlobalButton = ({
	name,
	variant,
	bgColor,
	onClick,
	textColor,
	icon,
	...rest
}) => {
	return (
		<Button
			variant={variant}
			className={'border-0'}
			style={
				bgColor && {
					backgroundColor: bgColor,
					color: textColor,
				}
			}
			onClick={onClick}
			{...rest}
		>
			{name}
		</Button>
	);
};
