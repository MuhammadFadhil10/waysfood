import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Geocoder from './Geocoder';
import 'https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js';
import GeoRouting from './GeoRouting';
import L from 'leaflet';

const Map = ({ routing, userProfile, form, setForm, partnerLocation }) => {
	const markerIcon = L.icon({
		iconUrl: 'http://localhost:8000/uploads/placeholder.png',
		iconSize: [30, 30],
	});

	L.Marker.prototype.options.icon = markerIcon;
	return (
		<MapContainer
			center={{
				lat: userProfile?.location
					? userProfile?.location.split(',')[0]
					: -6.175602,
				lng: userProfile?.location
					? userProfile?.location.split(',')[1]
					: 106.827214,
			}}
			zoom={13}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{routing ? (
				<GeoRouting partnerLocation={partnerLocation} />
			) : (
				<Geocoder
					form={form}
					setForm={setForm}
					userDefaultLocation={userProfile && userProfile.location}
				/>
			)}
		</MapContainer>
	);
};

export default Map;
