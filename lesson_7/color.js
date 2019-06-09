"use strict"
export default class Color{
	constructor(r,g,b){
		this.r=r;
		this.g=g;
		this.b=b;
	}
	toString(){
		return `rgb(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)})`;
	}
	toBlack(){
		this.r=0;
		this.g=0;
		this.b=0;
	}
	toWhite(){
		this.r=255;
		this.g=255;
		this.b=255;
	}
	getLightness(){
		var result;
		result=(this.r+this.g+this.b)/3;
		return result;
	}
	toGrayscale(){
		var result;
		result=(this.r+this.g+this.b)/3;
		this.r=result;
		this.g=result;
		this.b=result;
	}
	invert(){
		this.r=255-this.r;
		this.g=255-this.g;
		this.b=255-this.b;
	}
	random(){
		this.r=Math.floor(Math.random() * (255));
		this.g=Math.floor(Math.random() * (255));
		this.b=Math.floor(Math.random() * (255));
	}
}