import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { SignInAction } from '../../store/actions/index';
import axios from 'axios'

class Login extends React.Component {
	state = {
		email: "",
		password: "",
	}

	handleChange(event) {
		const { name, value } = event.target
		this.setState({
			[name]: value
		})
	}

	signIn = (e) => {
		e.preventDefault();
		const token = "token"
		const API_KEY = "http://localhost:3001/users"
		const { email, password } = this.state;
		axios.get(API_KEY, {
			withCredentials: true,
		},
			{
				auth: {
					username: email,
					password: password
				}
			})
			.then(res => {
				window.localStorage.setItem("token", token);
				this.props.SignInAction(this.props.isAuthed);
			})
	}

	render() {
		const { authFailed } = this.state
		let validation;
		if (authFailed) {
			validation = <div style={{ color: "red" }}>It looks like you have entered incorrect email or password </div>
		}
		return (
			<div className="logincontainer">
				<div className="container vh100">
					<div className="card">
						<div className="card-header">
							<h3>Sign In</h3>
							<div className="d-flex justify-content-end social_icon">
								<span><i className="fab fa-facebook-square"></i></span>
								<span><i className="fab fa-google-plus-square"></i></span>
								<span><i className="fab fa-twitter-square"></i></span>
							</div>
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-user"></i></span>
									</div>
									<input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} className="form-control" placeholder="username" />
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-key"></i></span>
									</div>
									<input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} className="form-control" placeholder="password" />
								</div>
								{validation}
								<div className="row align-items-center remember">
									<input type="checkbox" />Remember Me
								</div>
								<div className="form-group">
									<input type="submit" value="Login" onClick={this.signIn} className="btn float-right login_btn" />
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="links text-center">
								<div style={{ fontSize: "14px" }}>Don't have an account. Let's create an account</div>
								<Link to="/user/signup" className="" >Create Account</Link>
							</div>
							<div className="d-flex justify-content-center">
								<Link to="#">Forgot your password?</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		isAuthed: state.AuthReducer.isAuthed,
		isLoading:state.LoadingReducer.isLoading
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		SignInAction: bindActionCreators(SignInAction, dispatch),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);