import React from 'react';
import ReactDOM from 'react-dom';
import First from './first';
import Second from './second';
import Third from './third';
export default class Registration extends React.Component{
	constructor(){
		super();
		this.state = {
			nextStep: 'home'
		}
		this.updateStep=this.updateStep.bind(this)
	}
	updateStep(value) {
		this.setState({nextStep: value});
	}

	render() {
		const { nextStep } = this.state;
		if(this.state.nextStep=='home'){
		return ( 
		<First nextStep={ this.updateStep }></First>
		)}
		else
		if(this.state.nextStep=='registration1'){
		return ( 
		<Second nextStep={ this.updateStep }></Second>
		)}
		else
		if(this.state.nextStep=='registration2'){
		return ( 
		<Third nextStep={ this.updateStep }></Third>
		)}
	}
}
	ReactDOM.render((
	<Registration></Registration>
	), document.getElementById('root'));