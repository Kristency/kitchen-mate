/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
	let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

	sagaMiddleware.run(rootSaga);

	// Make reducers hot reloadable, see http://mxs.is/googmo
	/* istanbul ignore next */
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			store.replaceReducer(createReducer(store.injectedReducers));
		});
	}

	return store;
}
