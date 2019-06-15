/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import Header from 'Header';
import Footer from './Footer';
import Recipe from '../Recipe';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import GlobalStyle from '../../global-styles';

export default function App() {
	return (
		<div>
			{/* <Switch>
				<Route exact path="/" component={HomePage} />
				<Route component={NotFoundPage} />
			</Switch>
	  <GlobalStyle /> */}
			<Header />
			<Recipe />
			<Footer />
		</div>
	);
}
