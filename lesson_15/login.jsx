import React from 'react';
import "./style.css"
var validator = require("email-validator");
var result;
export default class Login extends React.Component{
	
	constructor(){
		super();
	
		this.state={
			email: '',
			password: '',
			psw_inp: true,
			clicked: true,
			error:''
		}
	this.emailChange=this.emailChange.bind(this)
	this.passwordChange=this.passwordChange.bind(this)
	this.LogIn=this.LogIn.bind(this)
	}
	emailChange(){
		result=validator.validate(event.target.value);
		if(result==true){
		this.setState({
			email: event.target.value,
			psw_inp: false,
			error: ''
		})}
		else
		{
			this.setState({
				error: 'Invalid email address'
			})
		}
	}
	passwordChange(){
		this.setState({
			password: event.target.value,
			clicked: false
		})
	}
	
	LogIn(){
		if(this.state.email!="react@snowball.alevel.com"||this.state.password!="YouSimplyTheBest2019")
			this.setState({
				error: 'Invalid email address or password'
			})
	}
	
	render(){
		return(
		<div className="form">
			<div className="head">YOUR<br/> ART<br/> MUSEUM</div>
			<div className="address">151 3rd st<br/>San Francisco, CA 94103</div>
			<div className="error">{this.state.error}</div>
			
			<input onChange={this.emailChange} type="text" className="e-mail" placeholder="Email address"/>
			<input onChange={this.passwordChange} disabled={this.state.psw_inp} type="password" placeholder="Password" className="password" />
			
			<div className="forgot"><a href="#" className="forgot_link">Forgot your password?</a></div>
			
			<button disabled={this.state.clicked} onClick={this.LogIn} className="btn_login">
			<span className="log">Log In</span>
			</button>
			
			<div className="have_not"><a href="#" className="have_not_link">Don't have an account?</a></div>
		</div>
		)
	}
}
