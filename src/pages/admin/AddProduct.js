import { Container, Form, FloatingLabel, Button } from 'react-bootstrap';
import { GlobalButton } from '../../components/atoms/GlobalButton';
import {
	IoLocationSharp,
	IoMapOutline,
	IoTrash,
	IoTrashOutline,
	IoAttach,
} from 'react-icons/io5';

const AddProduct = () => {
	return (
		<Container className='w-75' style={{ marginTop: '90px' }}>
			<Form>
				<h4 className='mb-4'>Add Product</h4>
				<div className='d-flex gap-3'>
					<FloatingLabel
						controlId='floatingInput'
						label='Title'
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
					label='Price'
					className='mb-3 w-100 shadow'
				>
					<Form.Control type='number' placeholder='price' />
				</FloatingLabel>

				<GlobalButton
					name='Save'
					className='float-end w-25 border-0'
					bgColor='#433434'
				/>
			</Form>
		</Container>
	);
};

export default AddProduct;
