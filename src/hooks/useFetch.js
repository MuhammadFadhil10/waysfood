import { useState } from 'react';
import { API } from '../config/api';

async function useFetch(method, uri, data) {
	const [data, setData] = useState(null);

	if (method == 'post' || method == 'POST') {
		const response = await API.post(uri, data);
		setData(response.data);
	}

	return {
		data: data,
	};
}
