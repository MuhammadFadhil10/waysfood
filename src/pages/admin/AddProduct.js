import { Container, Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
import { GlobalButton } from '../../components/atoms/GlobalButton';
import {
	IoLocationSharp,
	IoMapOutline,
	IoTrash,
	IoTrashOutline,
	IoAttach,
} from 'react-icons/io5';
import { useState } from 'react';
import { API } from '../../config/api';

const AddProduct = () => {
	const formData = new FormData();

	const [message, setMessage] = useState('');

	const [productForm, setProductForm] = useState({
		title: '',
		price: 0,
		image: null,
		qty: 0,
	});

	formData.append('title', productForm.title);
	formData.append('price', productForm.price);
	formData.append('image', productForm.image);
	formData.append('qty', productForm.qty);

	const addProductHandler = async () => {
		if (!productForm.image) {
			setMessage('image field required!');
			return;
		}
		setMessage('');
		try {
			const response = await API.post('/product/create', formData);
			setMessage('Success add product!');
		} catch (err) {
			setMessage(err.response.data.message);
			console.log(err);
		}
	};

	return (
		<Container className='w-75' style={{ marginTop: '90px' }}>
			<Form>
				<h4 className='mb-4'>Add Product</h4>
				{message != '' && <Alert variant={'success'}>{message}</Alert>}
				<div className='d-flex gap-3'>
					<FloatingLabel
						controlId='floatingInput'
						label='Title'
						className='mb-3 w-75 shadow'
					>
						<Form.Control
							type='text'
							placeholder='Title'
							name='title'
							value={productForm.title}
							onChange={(e) => {
								setProductForm({ ...productForm, title: e.target.value });
							}}
						/>
					</FloatingLabel>
					<div
						className='w-25 d-flex align-items-center justify-content-between border rounded px-2 bg-white shadow'
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
									setProductForm({ ...productForm, image: e.target.files[0] });
								}}
							/>
						</label>
						<IoAttach size={40} />
						<input type='file' hidden />
					</div>
				</div>
				<FloatingLabel
					controlId='floatingInput'
					label='Price'
					className='mb-3 w-100 shadow'
				>
					<Form.Control
						type='number'
						placeholder='price'
						name='price'
						value={productForm.price}
						onChange={(e) => {
							setProductForm({ ...productForm, price: e.target.value });
						}}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInput'
					label='Quantity'
					className='mb-3 w-100 shadow'
				>
					<Form.Control
						type='number'
						placeholder='qty'
						name='qty'
						value={productForm.qty}
						onChange={(e) => {
							setProductForm({ ...productForm, qty: e.target.value });
						}}
					/>
				</FloatingLabel>

				<GlobalButton
					name='Save'
					className='float-end w-25 border-0'
					bgColor='#433434'
					onClick={addProductHandler}
				/>
			</Form>
		</Container>
	);
};

export default AddProduct;
