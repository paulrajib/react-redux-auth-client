import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import routes from './routes';

export const store = createStore(
	combineReducers({
		...reducers,
	}),
	applyMiddleware(thunk)
)

const Root = () => <Provider store={store}><Router>{routes}</Router></Provider>

ReactDOM.render(<Root />, document.getElementById('root'));
