import React from 'react';
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { SignUpAction } from '../../store/actions';
import axios from 'axios';
class SignUp extends React.Component {
	state={
		fname:"",
		lname:"",
		email:"",
		password:"",
		confirmPassword:"",
		errors:{},
		isValid:false
	}
	validateInput = () => {
		const {fname, lname, email, password, confirmPassword } = this.state
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(fname !== "" && lname !== "" && email !== "" && reg.test(email) && password !== "" && password  === confirmPassword){
			this.setState({
				isValid:true
			})
		}
		else{
			this.setState({
				isValid:false
			})
		}
	}

	handleChange = (event) => {
		const {name, value}= event.target
		this.setState({
			[name] : value,
		},function(){
			this.validateInput()
		})
	}
	signUp = (e) => {
		e.preventDefault();
		const token = "token";
		const API_USERS ="http://localhost:3001/users";
		const {fname, lname, email, password} = this.state
		const user = {fname, lname, email, password}
		axios.post(API_USERS,user)
		.then(res => {
			if(res.data.required){
				if(res.data.emaileExist){
					console.log("email already exist")
				}
			}
			else{
				window.localStorage.setItem("token", token);
			}
		}).catch(error => {
			console.log(error.response)
		});
	}

	render(){
		return (
			<div className="logincontainer">
				<div className="container vh100">
					<SignUpForm state={this.state} handleChange={this.handleChange} signUp={this.signUp}/>
				</div>
			</div>	
			  );
	}
}
const mapStateToProps = (state) => {
	return {
	  loggedIn: state.AuthReducer.loggedIn,
	};
  };
const mapDispatchToProps = (dispatch) => {
	return {
		signUpAction: bindActionCreators(SignUpAction, dispatch)
		}
	}
export default connect(mapStateToProps,mapDispatchToProps )(SignUp);
