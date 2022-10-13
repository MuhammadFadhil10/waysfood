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
						<Route path='/' element={<App />}></Route>
						<Route
							path='/menu/list/:restaurant/:id'
							element={<RestaurantMenus />}
						></Route>
						<Route path='/cart/detail/:id' element={<CartOrder />}></Route>
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
