import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register, login } from '../../utils/AuthService';
import { AccessToken as AccessTokenActions } from '../../actions';

class SignupForm extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.doSignup = this.doSignup.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	doSignup(e) {
		e.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		register(email, password).then((response) => {
			var data = response.data;
			if(data.success === true)
			{
				login(email, password).then((response) => {
					var data = response.data;
					if(data.success === true)
					{
						var token = data.token;
						this.props.dispatch(AccessTokenActions.setLoggedIn(token));
						this.props.history.push('/');
					}
				});
			}
		});
	}
	
	handleInputChange(e) {
		e.preventDefault();
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		});
	}
	
	render() {
		return (
			<form onSubmit={ this.doSignup }>
				<div className="col-md-12">
					<div className="form-group">
						<label className="control-label">Email</label>
						<input type="text" className="form-control" name="email" placeholder="Enter Email" onChange={this.handleInputChange}/>
					</div>
				</div>
				<div className="col-md-12">
					<div className="form-group">
						<label className="control-label">Password</label>
						<input type="password" className="form-control" name="password" placeholder="Enter Password" onChange={this.handleInputChange}/>
					</div>
				</div>
				<div className="col-md-12">
					<button type="submit" className="btn btn-default">Signup</button>
				</div>
			</form>
		);
	}
}

export default connect(state => ({
    accessToken: state.AccessToken
}))(withRouter(SignupForm));