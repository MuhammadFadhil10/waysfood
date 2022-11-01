import React, { useContext, useEffect, useState } from 'react';

import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';
import { UserContext } from '../contexts/UserContext';

const GeoRouting = () => {
	const map = useMap();
	const { userProfile, refetch } = useContext(UserContext);
	

	const defaultMarker = [-6.408596, 106.764748];

	useEffect(() => {
		map.on('click', (e) => {
			L.Routing.control({
				waypoints: [
					L.latLng(-6.408596, 106.764748),
					L.latLng(e.latlng.lat, e.latlng.lng),
				],
				lineOptions: {
					styles: [
						{
							color: 'blue',
							weight: 6,
						},
					],
				},
				routeWhileDragging: false,
				geocoder: L.Control.Geocoder.nominatim(),
				addWaypoints: true,
				draggableWaypoints: false,
				fitSelectedRoutes: true,
				showAlternatives: false,
			}).addTo(map);
		});
	}, []);
	return null;
};

export default GeoRouting;
