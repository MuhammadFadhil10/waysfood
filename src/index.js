import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LoginContext } from './contexts/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppRouter() {
	const [isLogin, setIsLogin] = useState(false);
	return (
		<LoginContext.Provider value={{ isLogin, setIsLogin }}>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path='/' element={<App />}></Route>
				</Routes>
			</BrowserRouter>
		</LoginContext.Provider>
	);
}

root.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
