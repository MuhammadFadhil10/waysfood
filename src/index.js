import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LoginContext, LoginContextProvider } from './contexts/LoginContext';
import { Outlet, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import RestaurantMenus from './pages/RestaurantMenus.js';
import { CartContext } from './contexts/CartContext';
import CartOrder from './pages/CartOrder';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ProfilePartner from './pages/admin/ProfilePartner';
import EditProfilePartner from './pages/admin/EditProfilePartner';
import AddProduct from './pages/admin/AddProduct';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import NotFound from './pages/error/NotFound';

import { setAuthToken } from './config/api';
import { UserContextProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const PrivateRoute = () => {
	const token = localStorage.getItem('token');
	return token ? <Outlet /> : <Navigate to='/' />;
};

const AdminRoute = () => {
	const role = localStorage.getItem('role');
	return role == 'partner' ? <Outlet /> : <Navigate to='/' />;
};

function AppRouter() {
	const [isLogin, setIsLogin] = useState(false);

	// keep user login if auth token is still in local storage
	useEffect(() => {
		if (localStorage.token) {
			setIsLogin(true);
			setAuthToken(localStorage.token);
		} else {
			setIsLogin(false);
		}
	}, [localStorage.token]);

	const [cartLength, setCartLength] = useState(0);
	const client = new QueryClient();
	return (
		<QueryClientProvider client={client}>
			<LoginContext.Provider value={{ isLogin, setIsLogin }}>
				<UserContextProvider>
					<CartContext.Provider value={{ cartLength, setCartLength }}>
						<BrowserRouter>
							<Navigation />
							<Routes>
								<Route exact path='/' element={<App />}></Route>
								<Route
									exact
									path='/menu/list/:restaurant/:id'
									element={<RestaurantMenus />}
								></Route>
								<Route exact path='/' element={<PrivateRoute />}>
									<Route
										exact
										path='/cart/detail'
										element={<CartOrder />}
									></Route>
									<Route exact path='/profile' element={<Profile />}></Route>
									<Route
										exact
										path='/profile/edit/:id'
										element={<EditProfile />}
									></Route>
									{/* partner / admin */}
									<Route exact path='/' element={<AdminRoute />}>
										<Route
											exact
											path='/partner/profile'
											element={<Profile />}
										></Route>
										<Route
											exact
											path='/partner/profile/edit/:id'
											element={<EditProfile />}
										></Route>
										<Route
											exact
											path='/partner/add-product'
											element={<AddProduct />}
										></Route>
										<Route
											exact
											path='/partner/dashboard'
											element={<DashboardAdmin />}
										></Route>
									</Route>
								</Route>
								<Route path='*' element={<NotFound />} />
							</Routes>
						</BrowserRouter>
					</CartContext.Provider>
				</UserContextProvider>
			</LoginContext.Provider>
		</QueryClientProvider>
	);
}

root.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
