import React, { useContext, useEffect, useState } from 'react';

import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';
import { UserContext } from '../../contexts/UserContext';

const GeoRouting = ({ partnerLocation }) => {
	const map = useMap();
	const { userProfile, refetch } = useContext(UserContext);

	const defaultMarker = [-6.408596, 106.764748];
	useEffect(() => {
		// map.on('click', (e) => {

		L.Routing.control({

			waypoints: [
				L.latLng(
					userProfile?.location.split(',')[0],
					userProfile?.location.split(',')[1]
				),
				L.latLng(partnerLocation.split(',')[0], partnerLocation.split(',')[1]),
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
			pointMarkerStyle: {
				color: 'red',
			},
		}).addTo(map);
		// });
	}, []);
	return null;
};

export default GeoRouting;
