import { Container, Form, FloatingLabel, Button, Modal, Image } from 'react-bootstrap';
import { GlobalButton } from '../../components/atoms/GlobalButton';
import map from '../../assets/image/map.png';

import {
	IoLocationSharp,
	IoMapOutline,
	IoTrash,
	IoTrashOutline,
	IoAttach,
} from 'react-icons/io5';
import { useState } from 'react';

const EditPartnerProfile = () => {
	const [modalShow, setModalShow] = useState(false);
	return (
		<Container className='w-75' style={{ marginTop: '90px' }}>
			<Form>
				<h4 className='mb-4'>Edit Profile Partner</h4>
				<div className='d-flex gap-3'>
					<FloatingLabel
						controlId='floatingInput'
						label='Name Partner'
						className='mb-3 w-75 shadow'
					>
						<Form.Control type='text' placeholder='Title' />
					</FloatingLabel>
					<div
						className='w-25 d-flex align-items-center justify-content-between border rounded px-2 bg-white shadow'
						style={{ height: '58px' }}
					>
						<label htmlFor='' className=''>
							<p className='m-0'>Attach Image</p>
						</label>
						<IoAttach size={30} />
						<input type='file' hidden />
					</div>
				</div>
				<FloatingLabel
					controlId='floatingInput'
					label='Email'
					className='mb-3 w-100 shadow'
				>
					<Form.Control type='email' placeholder='Email' />
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Phone Number'
					className='mb-3 w-100 shadow'
				>
					<Form.Control type='text' placeholder='Phone Number' />
				</FloatingLabel>
				<div className='d-flex mb-5 gap-3'>
					<FloatingLabel
						controlId='floatingInput'
						label='Location'
						className='mb-3 w-75 shadow'
					>
						<Form.Control type='Location' placeholder='Location' />
					</FloatingLabel>
					<Button
						className='w-25 border-0'
						style={{ height: '58px', backgroundColor: '#433434' }}
						onClick={() => setModalShow(true)}
					>
						<span>Select On Map </span>
						<IoMapOutline />
					</Button>
				</div>

				<GlobalButton
					name='Save'
					className='float-end w-25 border-0'
					bgColor='#433434'
				/>
			</Form>
			{/* modal */}
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Image src={map} />
			</Modal>
		</Container>
	);
};

export default EditPartnerProfile;
