import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../utils/AuthService';
import AuthHome from './AuthHome';
import PublicHome from './PublicHome';

class Home extends Component {
	render() {
		let home = null;
		if(this.props.accessToken.accessToken == null)
		{
			home = <PublicHome/>;
		}
		else
		{
			home = <AuthHome/>;
		}
		return (
			home
		);
	}
}

export default connect(state => ({
    accessToken: state.AccessToken,
    authUser: state.AuthUser
}))(Home);