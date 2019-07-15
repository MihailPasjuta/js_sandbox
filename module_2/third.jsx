import React from 'react';
import "./style.css"
var validator = require("email-validator");
var result;
export default class Third extends React.Component{
constructor(){
		super();
		this.state={
			nextStep:'registration2'
		};
		this.Click=this.Click.bind(this)
	}


  Click(){
	  this.props.nextStep('singIn')
  }

  render() {
    return(
		<div className="form">
			<button onClick={ this.Click }>Third</button>
		</div>
	)
  }
}