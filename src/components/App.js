import React, { Component } from 'react';
import { sendRequest } from '../utils/APIService';
import { getAccessToken, getAuthUser, dispatchAuthUser } from '../utils/StoreService';
import Nav from './nav/Nav';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	
	constructor(props) {
		super(props);
		var accessToken = getAccessToken();
		var user = getAuthUser();
		if(user === null && accessToken !== null)
		{
			sendRequest('/api/users/detail', 'get').then((response) => {
				var data = response.data;
				if(data.success === true)
				{
					var user = data.user;
					dispatchAuthUser(user);
				}
			});
		}
	}
	
	render() {
		return (
				<div>
					<Nav />
					{this.props.children}
				</div>
		);
	}
}

export default App;
