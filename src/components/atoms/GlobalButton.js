import { Button, Spinner } from 'react-bootstrap';

export const GlobalButton = ({
	name,
	variant,
	bgColor,
	onClick,
	textColor,
	icon,
	isLoading,
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
					border: 'none',
				}
			}
			onClick={onClick}
			{...rest}
		>
			{isLoading ? (
				<>
					<Spinner
						as='span'
						animation='border'
						role='status'
						size='sm'
					></Spinner>
				</>
			) : (
				name
			)}
		</Button>
	);
};
