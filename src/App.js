import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import AppRouter from './AppRouter';

const App = () => {

	return (
		<BrowserRouter>
			<HeaderContainer />
			<AppRouter />
		</BrowserRouter>
	);
};

export default App;