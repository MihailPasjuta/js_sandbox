"use strict"
///part1
function makeImages(){
	for(let i=0;i<arguments.length;i+=1){
		const div =document.createElement('div');
		document.body.append(div);
		const image=document.createElement('img');
		div.append(image);
		image.src=arguments[i];
	}
}
//makeImages('images/1.jpg','images/2.jpg','images/3.jpg');
///part2
class FormBuilder{
	constructor(form){
		this.form=form;
	}
	appendTo(target){
		this.form=form.createElement(this.target);
		form.append(this.target);
	}
	addInput(name){
		inp=form.createElement('input');
		this.form.append(inp);
		inp.style.type='text';
		inp.style.name=this.name;
	}
	addCheckbox(name){
		chBox=form.createElement('Checkbox');
		this.form.append(chBox);
		inp.style.name=this.name;
	}
	addButton(name){
		btn=form.createElement('Button');
		this.form.append(btn);
		inp.style.name=this.name;
	}
	destroy(){
		this.form.delete;
	}
}
///part3
function newColor(){
	var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
	return c;
}
function randLeft(){
	var lft=Math.floor(Math.random() * (1350));
	return lft+'px';
}
function randTop(){
	var tp=Math.floor(Math.random() * (600));
	return tp+'px';
}
function initBall(){
	const ball=document.createElement('div');
	document.body.append(ball);
	ball.style.backgroundColor=newColor();
	ball.style.width="40px";
	ball.style.height="40px";
	ball.style.borderRadius='50%';
	ball.style.position='absolute';
	ball.style.left=randLeft();
	ball.style.top=randTop();
	ball.addEventListener('click',()=>{
    ball.style.left=randLeft();
	ball.style.top=randTop();
	ball.style.backgroundColor=newColor();
	event.stopPropagation();
	});
	document.addEventListener('click',(event)=>{
		ball.remove();
		});
}
//initBall();
