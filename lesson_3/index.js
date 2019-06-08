"use strict"
class Human{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayHello(){
		console.log('Hello, my name is '+this.name+', I am '+this.age+' old');
	}
}
class AlevelStudent extends Human{
	constructor(name,age,marks){
		super(name,age);
		this.marks=marks;
	}
	averageMark(){
		var sum=0;
		for(let i=0;i<this.marks.length;i+=1){
			sum+=this.marks[i];
		}
		return sum/this.marks.length;
	}
}

const me=new Human('Ivan',19);
const student=new AlevelStudent('Michael',23,[1,2,3,4,5]);

class Calculator{
	constructor(result){
		this.result=result;
	}
	reset(){
		this.result=0;
		//return this.result;
	}
	add(num){
		this.result+=num;
		//return this.result;
	}
	sub(num){
		this.result-=num;
		//return this.result;
	}
	mul(num){
		this.result*=num;
		//return this.result;
	}
	div(num){
		this.result/=num;
		//return this.result;
	}
	pow(num){
		this.result=Math.pow(this.result,num);
		//return this.result;
	}
	sqrt(){
		this.result=Math.sqrt(this.result);
		//return this.result;
	}
	getResult(){
		return this.result;
	}
}

const a=new Calculator(0);

class Point{
	constructor(x,y){
			this.x=x;
			this.y=y;
	}
	toString(){
	return `Point[${this.x},${this.y}]`;
	}
	set(x,y){
		this.x=x;
		this.y=y;
	//return `Point[${x},${y}]`;
	}
	getX(){
		return this.x;
	}
	getY(){
		return this.y;
	}
}

class Line{
	constructor(point1,point2){
		this.point1=point1;
		this.point2=point2;
	}
	toString(){
		return `Line(${this.point1} - ${this.point2})`;
	}
	length(){
		return Math.sqrt(Math.pow(this.point2.x-this.point1.x,2)+Math.pow(this.point2.y-this.point1.y,2));
	}
}

class WeightedPoint extends Point{
	constructor(x,y,weight){
		super(x,y);
		this.weight=weight;
	}
	toString(){
		return `${this.weight}&${super.toString()}`;
	}
	set(x,y,weight){
		this.x=x;
		this.y=y;
		this.weight;
	}
	getWeight(){
		return this.weight;
	}
}






















