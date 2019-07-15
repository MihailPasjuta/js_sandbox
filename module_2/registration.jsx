import React from 'react';
import "./style.css"
var validator = require("email-validator");
var result;
export default class Login extends React.Component{
	
	constructor(){
		super();
		
		this.state={
			name:'',
			username:'',
			country:'',
			age:'',
			password:'',
			password2:'',
			
			first: true,
			name_input:false,
			username_input: false,
			country_input: false,
			age_input: false,
			btn1: true,
			btn2:false,
			email_input:false,
			password_input: false,
			password2_input: false,
			btn3: false
		}
		this.firstStep=this.firstStep.bind(this)
		this.secondStep=this.secondStep.bind(this)
		this.nameChange=this.nameChange.bind(this)
		this.usernameChange=this.usernameChange.bind(this)
		this.signUp=this.signUp.bind(this)
	}
	
	firstStep(){
		this.setState({
			first: false,
			name_input: true,
			username_input: true,
			country_input: true,
			age_input: true,
			btn1: false,
			btn2: true
		});
	}
	secondStep(){
		this.setState({
			first: false,
			name_input: false,
			username_input: false,
			country_input: false,
			age_input: false,
			btn1: false,
			email_input:true,
			password_input: true,
			password2_input: true,
			btn2: false,
			btn3:true
		});
	}
	
	nameChange(){result=validator.validate(event.target.value);
			this.setState({
				name: event.target.value
			})
	}
	usernameChange(){
			this.setState({
				username: event.target.value
		})
	}
	countryChange(){
			this.setState({
				country: event.target.value
		})
	}
	ageChange(){
			this.setState({
				age: event.target.value
		})
	}
	
	passwordChange(){
			this.setState({
				password: event.target.value
		})
	}
	password2Change(){
			this.setState({
				password2: event.target.value
		})
	}
	
		signUp(){
			if(password!=password2)alert("Пароли не совпадают!")
		}
	
	render(){
		return(
		<div className="registr">
			<div className="form">
				<div className={this.state.first+"_circle"}></div>
				<button onClick={this.firstStep} className={this.state.btn1+"btn_1"}>GO</button>
				<input onChange={this.nameChange} type="text" className={this.state.name_input+"name_input"} placeholder="Name"></input>
				<input onChange={this.usernameChange} type="text" className={this.state.username_input+"username_input"} placeholder="Username"></input>
				<input onChange={this.countryChange} type="text" className={this.state.country_input+"country_input"} placeholder="Country"></input>
				<input onChange={this.ageChange} type="number" className={this.state.age_input+"age_input"} placeholder="Age"></input>
				<button onClick={this.secondStep} className={this.state.btn2+"btn_2"}>Next step</button>
				
				<input className={this.state.email_input+"name_input"} placeholder="E-mail"></input>
				<input onChange={this.passwordChange} type="password" className={this.state.password_input+"username_input"} placeholder="Password"></input>
				<input onChange={this.password2Change} type="password" className={this.state.password2_input+"country_input"} placeholder="Password again"></input>
				<button onClick={this.signUp} className={this.state.btn3+"btn_2"}>Sign Up</button>
				
			</div>
		</div>
		)
	}
}