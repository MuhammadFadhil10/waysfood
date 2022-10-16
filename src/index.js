import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LoginContext } from './contexts/LoginContext';

import RestaurantMenus from './pages/RestaurantMenus.js';
import { CartContext } from './contexts/CartContext';
import CartOrder from './pages/CartOrder';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ProfilePartner from './pages/admin/ProfilePartner';
import EditProfilePartner from './pages/admin/EditProfilePartner';
import AddProduct from './pages/admin/AddProduct';
import DashboardAdmin from './pages/admin/DashboardAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppRouter() {
	const [isLogin, setIsLogin] = useState(false);
	const [cartData, setCartData] = useState([]);
	return (
		<LoginContext.Provider value={{ isLogin, setIsLogin }}>
			<CartContext.Provider value={{ cartData, setCartData }}>
				<BrowserRouter>
					<Navigation />
					<Routes>
						<Route exec path='/' element={<App />}></Route>
						<Route
							exec
							path='/menu/list/:restaurant/:id'
							element={<RestaurantMenus />}
						></Route>
						<Route exec path='/cart/detail/:id' element={<CartOrder />}></Route>
						<Route exec path='/profile' element={<Profile />}></Route>
						<Route exec path='/profile/edit' element={<EditProfile />}></Route>
						{/* partner / admin */}
						<Route
							exec
							path='/partner/profile'
							element={<ProfilePartner />}
						></Route>
						<Route
							exec
							path='/partner/profile/edit'
							element={<EditProfilePartner />}
						></Route>
						<Route
							exec
							path='/partner/add-product'
							element={<AddProduct />}
						></Route>
						<Route
							exec
							path='/partner/dashboard'
							element={<DashboardAdmin />}
						></Route>
					</Routes>
				</BrowserRouter>
			</CartContext.Provider>
		</LoginContext.Provider>
	);
}

root.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
