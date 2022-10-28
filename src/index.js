import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LoginContext } from './contexts/LoginContext';
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
import { setAuthToken } from './config/api';

const root = ReactDOM.createRoot(document.getElementById('root'));

const PrivateRoute = () => {
	const { isLogin, setIsLogin } = useContext(LoginContext);

	return isLogin ? <Outlet /> : <Navigate to='/' />;
};

function AppRouter() {
	const token = localStorage.getItem('token');

	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (token) {
			setIsLogin(true);
			setAuthToken(token);
		} else {
			setIsLogin(false);
		}
		console.log(token);
	}, [token]);

	const [cartData, setCartData] = useState([]);
	const client = new QueryClient();
	return (
		<LoginContext.Provider value={{ isLogin, setIsLogin }}>
			<CartContext.Provider value={{ cartData, setCartData }}>
				<QueryClientProvider client={client}>
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
									path='/cart/detail/:id'
									element={<CartOrder />}
								></Route>
								<Route exact path='/profile' element={<Profile />}></Route>
								<Route
									exact
									path='/profile/edit'
									element={<EditProfile />}
								></Route>
								{/* partner / admin */}
								<Route
									exact
									path='/partner/profile'
									element={<ProfilePartner />}
								></Route>
								<Route
									exact
									path='/partner/profile/edit'
									element={<EditProfilePartner />}
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
						</Routes>
					</BrowserRouter>
				</QueryClientProvider>
			</CartContext.Provider>
		</LoginContext.Provider>
	);
}

root.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
