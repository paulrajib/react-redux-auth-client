import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../utils/APIService';
import { AuthUser as AuthUserActions } from '../actions';
import Nav from './nav/Nav';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	
	constructor(props) {
		super(props);
		var accessToken = this.props.accessToken.accessToken;
		var user = this.props.authUser.authUser;
		if(user === null && accessToken !== null)
		{
			sendRequest('/api/users/detail', 'get').then((response) => {
				var data = response.data;
				if(data.success === true)
				{
					var user = data.user;
					this.props.dispatch(AuthUserActions.setAuthUser(user));
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

export default connect(state => ({
    accessToken: state.AccessToken,
    authUser: state.AuthUser
})) (App);