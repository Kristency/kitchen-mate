/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
// import { ConnectedRouter } from 'connected-react-router';
// import history from 'utils/history';
// import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
//const initialState = {};
const store = configureStore();

// specifying which DOM element to load everything in
const MOUNT_NODE = document.getElementById('app');

//creating custom theme
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: {
			main: amber.A400,
			light: amber[200],
			dark: amber[700]
		},
		type: 'dark'
	}
});

const render = (messages) => {
	ReactDOM.render(
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Provider store={store}>
				<LanguageProvider messages={messages}>
					{/*<ConnectedRouter history={history}>*/}
					<App />
					{/* </ConnectedRouter> */}
				</LanguageProvider>
			</Provider>
		</MuiThemeProvider>,
		MOUNT_NODE
	);
};

if (module.hot) {
	// Hot reloadable React components and translation json files
	// modules.hot.accept does not accept dynamic dependencies,
	// have to be constants at compile-time
	module.hot.accept([ './i18n', 'containers/App' ], () => {
		ReactDOM.unmountComponentAtNode(MOUNT_NODE);
		render(translationMessages);
	});
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
	new Promise((resolve) => {
		resolve(import('intl'));
	})
		.then(() => Promise.all([ import('intl/locale-data/jsonp/en.js') ]))
		.then(() => render(translationMessages))
		.catch((err) => {
			throw err;
		});
} else {
	render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
	require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
