import React, { useEffect, useState } from 'react';

import L from 'leaflet';
import { useMap } from 'react-leaflet';

const Geocoder = ({ form, setForm, userDefaultLocation }) => {
	const map = useMap();
	// show marker user location when user open map
	userDefaultLocation &&
		L.marker({
			lat: userDefaultLocation.split(',')[0],
			lng: userDefaultLocation.split(',')[1],
		})
			.addTo(map)
			.bindPopup('hahaha')
			.openPopup();
	// event click on map
	map.on('click', (e) => {
		setForm({ ...form, location: `${e.latlng.lat},${e.latlng.lng}` });
		L.marker(e.latlng).addTo(map).bindPopup().openPopup();
	});
	// search map control
	L.Control.geocoder({
		defaultMarkGeocode: false,
	})
		.on('markgeocode', function (e) {
			var latlng = e.geocode.center;
			setForm({ ...form, location: `${latlng.lat},${latlng.lng}` });
			L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
			map.fitBounds(e.geocode.bbox);
			console.log(e);
		})
		.addTo(map);
	return null;
};

export default Geocoder;
