import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

import cancel from '../../assets/icon/cancel.svg';
import success from '../../assets/icon/success.svg';

function DashboardAdmin() {
	return (
		<Container>
			<h2 className='mt-5'>Income Transaction</h2>
			<Table
				className='border border-2 border-secondary my-5  '
				bordered
				hover
				responsive
			>
				<thead style={{ backgroundColor: '#E5E5E5' }}>
					<tr className='bg-secondary border-dark'>
						<th>No</th>
						<th>Name</th>
						<th>Address</th>
						<th>Products Order</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Sugeng No Pants</td>
						<td>Cileungsi</td>
						<td>Pkaket Geprek, Paket ke..</td>
						<td className='d-flex text-warning justify-content-center'>
							Waiting Approve
						</td>
						<td>
							<div className='d-flex justify-content-center'>
								<Button variant='danger' size='sm' className='btn-table1 me-3'>
									Cancel
								</Button>
								<Button variant='success' size='sm' className='btn-table2'>
									Approve
								</Button>
							</div>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Sugeng No Pants</td>
						<td>Cileungsi</td>
						<td>Pkaket Geprek, Paket ke..</td>
						<td className='d-flex text-success justify-content-center'>
							Success
						</td>
						<td>
							<div className='d-flex text-success justify-content-center'>
								<img src={success} />
							</div>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Sugeng No Pants</td>
						<td>Cileungsi</td>
						<td>Pkaket Geprek, Paket ke..</td>
						<td className='d-flex text-danger justify-content-center'>
							Cancel
						</td>
						<td>
							<div className='d-flex text-success justify-content-center'>
								<img src={cancel} />
							</div>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Sugeng No Pants</td>
						<td>Cileungsi</td>
						<td>Pkaket Geprek, Paket ke..</td>
						<td
							className='d-flex justify-content-center'
							style={{ color: '#00D1FF' }}
						>
							Success
						</td>
						<td>
							<div className='d-flex text-success justify-content-center'>
								<img src={success} />
							</div>
						</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
}

export default DashboardAdmin;
