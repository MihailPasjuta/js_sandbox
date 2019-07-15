import React from 'react';
import "./style.css"
var validator = require("email-validator");
var result;
export default class Second extends React.Component{
		constructor(){
		super();
		this.state={
			nextStep:'registration1',
			
			check_name: 'red',
			check_username: 'red',
			
			btn_enable: true,
			user_input: true,
			country_input: true,
			age_input: true,
			
			name:'',
			username:'',
			country:'',
			age:''
		};
		this.Click=this.Click.bind(this)
		this.nameChange=this.nameChange.bind(this)
		this.usernameChange=this.usernameChange.bind(this)
		this.countryChange=this.countryChange.bind(this)
		this.ageChange=this.ageChange.bind(this)
	}
	nameChange(){
	
		if(event.target.value.length>2)
		this.setState({
			name: event.target.value,
			user_input:false,
			check_name: 'lime'
		});
	}
	usernameChange(){
		this.setState({username:''});
		if(event.target.value.length>2)
		this.setState({
			username: event.target.value,
			country_input:false,
			check_username: 'lime'
		});
	}
	countryChange(){

		this.setState({
			country: event.target.value,
			age_input:false
		});
	}
	ageChange(){
		
		this.setState({
			age: event.target.value,
			btn_enable:false
		});
	}

  Click(){
	  fetch('https://authserver.worldthirteen.now.sh/check_username?username='+this.state.username)
					.then(data=>data.json())
					.then(data=>{
						if(data.status==='OK'){
							this.props.nextStep('registration2');
						}
						
							if(data.status==="CONFLICT"){
								this.setState=({
									check_username: 'red'
								});
							}
					})
		
		
			
	  
  }

  render() {
    return(
		<div className="form">
			<div className="ellipse2_1"></div>
			<div className="ellipse2_2">
				<div className="lamp">
					<svg width="72" height="72" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.82609 37.5652H1.56522C.701217 37.5652 0 36.8656 0 36c0-.8655.701217-1.5652 1.56522-1.5652h6.26087c.864 0 1.56521.6997 1.56521 1.5652 0 .8656-.70121 1.5652-1.56521 1.5652zM16.078 17.6431c-.4007 0-.8014-.1534-1.1066-.4587l-4.4265-4.428c-.61196-.612-.61196-1.6012 0-2.2132.612-.61197 1.6013-.61197 2.2133 0l4.4264 4.428c.612.612.612 1.6012 0 2.2132-.3052.3068-.7059.4587-1.1066.4587zM36 9.3913c-.864 0-1.5652-.69965-1.5652-1.56521V1.56522C34.4348.699652 35.136 0 36 0c.864 0 1.5652.699652 1.5652 1.56522v6.26087c0 .86556-.7012 1.56521-1.5652 1.56521zM55.9221 17.6431c-.4007 0-.8014-.1534-1.1067-.4587-.612-.612-.612-1.6012 0-2.2132l4.4265-4.428c.6104-.61197 1.6012-.61197 2.2132 0 .612.612.612 1.6012 0 2.2132l-4.4264 4.428c-.3053.3068-.7059.4587-1.1066.4587zM70.4347 37.5652h-6.2608c-.864 0-1.5653-.6996-1.5653-1.5652 0-.8655.7013-1.5652 1.5653-1.5652h6.2608c.864 0 1.5652.6997 1.5652 1.5652 0 .8656-.7012 1.5652-1.5652 1.5652zM35.9999 15.6521c-11.2195 0-20.3478 9.1283-20.3478 20.3478 0 8.2174 4.9883 15.6209 12.5217 18.7638v9.4101H43.826v-9.4101c7.5334-3.1429 12.5218-10.5464 12.5218-18.7638 0-11.2195-9.1284-20.3478-20.3479-20.3478zM32.8695 72.0001h6.2609c2.5935 0 4.6956-2.1021 4.6956-4.6957H28.1738c0 2.5936 2.1021 4.6957 4.6957 4.6957z"/>
					</svg>
				</div>
			</div>
			<div className="text2_1">Welcome</div>
			<div className="text2_2">Create your account to get started. After that, you can share books and make friends.</div>
			<div className="ellipse2_3"></div>
			
			<div className="input2_1name">NAME</div>
			<input onChange={this.nameChange} className="input2_1" type="text"></input>
			<div className="check1" style={{backgroundColor:this.state.check_name}}></div>
			
			<div className="input2_2name">USERNAME</div>
			<input onChange={this.usernameChange} className="input2_2" type="text" disabled={this.state.user_input}></input>
			<div className="check2" style={{backgroundColor:this.state.check_username}}></div>
			
			<div className="input2_3name">COUNTRY</div>
			<input onChange={this.countryChange} className="input2_3" type="text" disabled={this.state.country_input}></input>
			
			<div className="input2_4name">AGE</div>
			<input onChange={this.ageChange} className="input2_4" type="number" disabled={this.state.age_input}></input>
			
			<button disabled={this.state.btn_enable} className="btn2" onClick={ this.Click }><p className="btn2_name">NEXT STEP</p></button>
			<div className="bottom_text2">Already have an account? <a href="#">Login</a></div>
		</div>
	)
  }
}