import React from 'react';
import "./style.css"
var validator = require("email-validator");
var result;
import book from './book.svg'
export default class First extends React.Component{
	constructor(){
		super();
		this.state={
			nextStep:'home'
		};
		this.Click=this.Click.bind(this)
	}


  Click(){
	  this.props.nextStep('registration1')
  }

  render() {
    return(
		<div className="form">
			
			<div className="ellipse1_1"></div>
			<div className="ellipse1_2"></div>
			<div className="ellipse1_3">
				<div className="book"><svg width="86" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M81.5 7.833h-1.833v51.34c0 2.023-1.652 3.66-3.676 3.66-21.954-.002-30.642 6.485-30.725 6.549l-2.284 1.756-2.248-1.756c-.083-.064-8.77-6.55-30.725-6.549-2.024 0-3.676-1.637-3.676-3.66V7.834H4.5A3.666 3.666 0 0 0 .833 11.5v62.333A3.666 3.666 0 0 0 4.5 77.5h77a3.666 3.666 0 0 0 3.667-3.667V11.5A3.666 3.666 0 0 0 81.5 7.833z" fill="url(#paint0_linear)"/>
					<path d="M41.167 6.671C37.599 4.678 28.55.79 11.87.515A1.85 1.85 0 0 0 10 2.357v55c0 1.003.82 1.808 1.822 1.824 16.71.268 25.772 4.162 29.345 6.157V6.67z" fill="url(#paint1_linear)"/><path d="M74.13.515C57.449.79 48.401 4.678 44.833 6.67v58.667c3.574-1.995 12.636-5.889 29.345-6.157C75.18 59.165 76 58.36 76 57.357v-55A1.85 1.85 0 0 0 74.13.515z" fill="url(#paint2_linear)"/>
					<defs><linearGradient id="paint0_linear" x1="43" y1="7.833" x2="43" y2="77.5" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="paint1_linear" x1="25.583" y1=".514" x2="25.583" y2="65.338" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient>
					<linearGradient id="paint2_linear" x1="60.417" y1=".514" x2="60.417" y2="65.338" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></svg>
				</div>
			</div>
			<div className="text1_1">Read Books</div>
			<div className="text1_2">Create your account to get started. After that, you can share books and make friends.</div>
			<button className="btn1" onClick={ this.Click }>
				<div>
					<svg width="22" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 9h20" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
					<path d="M13 16l7-7-7-7" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
					</svg>
				</div>
			</button>
			<div className="ellipse1_4"></div>
		</div>
	)
  }
}