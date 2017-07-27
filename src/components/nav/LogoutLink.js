import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../utils/AuthService';
import { AccessToken as AccessTokenActions } from '../../actions';

class LogoutLink extends Component
{	
	constructor(props) {
		super(props);
		this.doSignout = this.doSignout.bind(this);
	}
	
	doSignout(e)
	{
		e.preventDefault();
		this.props.dispatch(AccessTokenActions.setLoggedOut());
	}
	
	render()
	{
		return(
				<li><a href="/logout" onClick={this.doSignout}>Signout</a></li>
		);
	}
}

export default connect(state => ({
    accessToken: state.AccessToken
}))(LogoutLink);