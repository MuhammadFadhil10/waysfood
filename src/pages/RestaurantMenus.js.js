import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GlobalButton } from '../components/atoms/GlobalButton';
import RestaurantList from '../components/RestaurantList';

const RestaurantMenus = () => {
	const { restaurant, id } = useParams();
	console.log(restaurant, id);
	return (
		<Container className=' d-flex flex-column mt-5'>
			<h1>{restaurant} Menu List</h1>
			<RestaurantList />
		</Container>
	);
};

export default RestaurantMenus;
