import React from 'react';

export default class WrapInEmoji extends React.Component{
	constructor(){
		super();
		this.state = {
			first: String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513),
			second: String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513),
		};
    this.randEmoji1 = this.randEmoji1.bind(this);
	this.randEmoji2 = this.randEmoji2.bind(this);
	}
	randEmoji1(){
		this.setState({
		first: this.state.first= String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513)
		});
	}
	randEmoji2(){
		this.setState({
		second: this.state.second=String.fromCodePoint(Math.floor(Math.random() * (128586 - 128513)) + 128513)
		});
	}
	render(){
		
		return(
		<div>
			<span onClick={this.randEmoji1}>{this.state.first}</span>
				{this.props.children}
			<span onClick={this.randEmoji2}>{this.state.second}</span>
		</div>
		)
	}
}