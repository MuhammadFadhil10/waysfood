import {
	Container,
	Form,
	FloatingLabel,
	Button,
	Modal,
	Image,
} from 'react-bootstrap';
import { GlobalButton } from '../components/atoms/GlobalButton';
import map from '../assets/image/map.png';
import {
	IoLocationSharp,
	IoMapOutline,
	IoTrash,
	IoTrashOutline,
	IoAttach,
} from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { GlobalInput } from '../components/atoms/GlobalInput';
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { useNavigate } from 'react-router-dom';
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';

const EditProfile = () => {
	const navigate = useNavigate();
	const [modalShow, setModalShow] = useState(false);
	const { userProfile, refetch } = useContext(UserContext);
	const [userLocation, setUserLocation] = useState(null);
	const markerIcon = L.icon({
		iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
		// iconSize: [100, 100],
	});

	L.Marker.prototype.options.icon = markerIcon;

	const formData = new FormData();

	const [form, setForm] = useState({
		fullName: userProfile?.fullName,
		image: userProfile?.image,
		email: userProfile?.email,
		phone: userProfile?.phone,
		location: userProfile?.location,
	});
	formData.append('fullname', form.fullName);
	formData.append('image', form.image);
	formData.append('email', form.email);
	formData.append('phone', form.phone);
	formData.append('location', form.location);

	const editProfileHandler = async () => {
		try {
			const response = await API.patch(
				`user/update/${localStorage.id}`,
				formData
			);
			navigate('/profile');
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		refetch();
	}, []);

	// navigator.geolocation.getCurrentPosition((position) => console.log(position));

	return (
		<Container className='w-75' style={{ marginTop: '90px' }}>
			<Form>
				<h4 className='mb-4'>Edit Profile</h4>
				<div className='d-flex gap-3'>
					<FloatingLabel
						controlId='floatingInput'
						label='Full Name'
						className='mb-3 w-75 shadow'
						name='fullname'
					>
						<Form.Control
							type='text'
							placeholder='Title'
							value={form.fullName}
							onChange={(e) => {
								setForm({ ...form, fullName: e.target.value });
							}}
						/>
					</FloatingLabel>
					<div
						className='w-25 d-flex align-items-center justify-content-between
						border rounded px-2 bg-white shadow'
						style={{ height: '58px' }}
					>
						<label htmlFor='file-upload' style={{ cursor: 'pointer' }}>
							<p className='position-absolute mt-2' style={{ zIndex: '9999' }}>
								Attach Image
							</p>
							<Form.Control
								type='file'
								style={{ opacity: '0', zIndex: '-1' }}
								id='file-upload'
								name='image'
								onChange={(e) => {
									console.log(e.target.files[0]);
									setForm({ ...form, image: e.target.files[0] });
								}}
							/>
						</label>
						<IoAttach size={40} />
						<input type='file' hidden />
					</div>
				</div>
				<FloatingLabel
					controlId='floatingInput'
					label='Email'
					className='mb-3 w-100 shadow'
				>
					<Form.Control
						type='email'
						placeholder='Email'
						name='email'
						value={form.email}
						onChange={(e) => {
							setForm({ ...form, email: e.target.value });
						}}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Phone Number'
					className='mb-3 w-100 shadow'
					name='phone'
				>
					<Form.Control
						type='text'
						placeholder='Phone Number'
						value={form.phone}
						onChange={(e) => {
							setForm({ ...form, phone: e.target.value });
						}}
					/>
				</FloatingLabel>
				<div className='d-flex mb-5 gap-3'>
					<FloatingLabel
						controlId='floatingInput'
						label='Location'
						className='mb-3 w-75 shadow'
						name='location'
						value={form.location}
						onChange={(e) => {
							setForm({ ...form, location: e.target.value });
						}}
					>
						<Form.Control type='Location' placeholder='Location' />
					</FloatingLabel>
					<Button
						className='w-25 border-0'
						style={{ height: '58px', backgroundColor: '#433434' }}
						onClick={() => {
							setModalShow(true);

							navigator.geolocation.getCurrentPosition((position) => {
								setUserLocation((prev) => position);
								console.log(userLocation);
							});
						}}
					>
						<span>Select On Map </span>
						<IoMapOutline />
					</Button>
				</div>

				<GlobalButton
					name='Save'
					className='float-end w-25 border-0'
					bgColor='#433434'
					onClick={editProfileHandler}
				/>
			</Form>
			{/* modal */}
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				style={{ overflow: 'hidden' }}
			>
				{/* <Image src={map} /> */}
				{userLocation && (
					<MapContainer
						center={{
							lat: userLocation?.coords?.latitude,
							lng: userLocation?.coords?.longitude,
						}}
						zoom={13}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker
							position={{
								lat: userLocation?.coords?.latitude,
								lng: userLocation?.coords?.longitude,
							}}
						>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</MapContainer>
				)}
			</Modal>
		</Container>
	);
};

export default EditProfile;
