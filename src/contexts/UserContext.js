import { createContext } from 'react';
import { useQuery } from 'react-query';
import { API } from '../config/api';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const { data: userProfile } = useQuery('userProfileCache', async () => {
		const response = await API.get('/profile');
		console.log(response.data.data);
		return response.data.data;
	});
	return (
		<UserContext.Provider value={userProfile}>{children}</UserContext.Provider>
	);
};
