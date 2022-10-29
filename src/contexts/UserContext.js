import { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/api';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const { data: userProfile } = useQuery('userProfileCache', async () => {
		try {
			const response = await API.get(`/user/${localStorage.id}`);
			console.log(response.data.data);
			return response.data.data;
		} catch (err) {
			console.log(err);
		}
	});

	return (
		<UserContext.Provider value={userProfile}>{children}</UserContext.Provider>
	);
};
