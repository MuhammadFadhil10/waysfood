import { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/api';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const { data: userProfile, refetch } = useQuery(
		'userProfileCache',
		async () => {
			try {
				// console.log(isLoading);
				const response = await API.get(`/user/${localStorage.id}`);
				// console.log(isLoading);
				return response.data.data;
			} catch (err) {
				console.log(err);
				if (err.response.data.message == 'unauthorized') {
					console.log('kontol');
					localStorage.removeItem('token');
					localStorage.removeItem('role');
					localStorage.removeItem('id');
				}
			}
		}
	);

	return (
		<UserContext.Provider value={{ userProfile, refetch }}>
			{children}
		</UserContext.Provider>
	);
};
