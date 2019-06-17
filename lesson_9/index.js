"use strict"
function newColor(){
	var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
	return c;
}

const div=document.getElementById('screen');
const dialog=document.getElementById('answer');
const dialog1=document.getElementById('clicks1');

function drawOnScrool(){

		div.style.backgroundColor=newColor();
		
}
function waitForScrool(){
	return new Promise((resolve)=>{
		window.addEventListener('scroll',resolve);
	});
}
waitForScrool()
.then(()=>drawOnScrool());

//////////////////////////////////////////////////

function waitForAnswer(){
	return new Promise((resolve,reject)=>{
		window.addEventListener('keydown',(event)=>{
			if(event.code=="KeyY"){resolve();}
			if(event.code=="KeyN"){reject();}
		});
	});
}
function setText(text){
	dialog.innerHTML=text;
}
setText('Вы сделали домашнее задание? Y / N');
waitForAnswer()
.then(()=>setText('Так держать!'))
.catch(()=>setText('Нужно подтянуть('));

////////////////////////////////////////////////
function makeSeconds(n){
	var variant=['секунд','секунда','секунды'];
	var n1=n%10;
	if(n>10&&n<20) return variant[0];
	if(n1>1&&n1<5) return variant[2];
	if(n1==1) return variant[1];
	return variant[0];
}

function makeClicks(n){
	var variant=['кликов','клик','клика'];
	var n1=n%10;
	if(n>10&&n<20) return variant[0];
	if(n1>1&&n1<5) return variant[2];
	if(n1==1) return variant[1];
	return variant[0];
}

function waitForTime(ms){
	return new Promise((resolve)=>{
		setTimeout(resolve,ms*1000);
	});
}
function waitForClicks(clicks){
	var k=0;
		return new Promise((resolve,reject)=>{
			window.addEventListener('click',(event)=>{
				k+=1;
				if(k==clicks)resolve();
			});
		});
}

function setText1(text){
	clicks1.innerHTML=text;
}

function clickChallange(clicks,ms){
	setText1(`У вас есть ${ms} ${makeSeconds(ms)}, чтобы сделать ${clicks} ${makeClicks(clicks)}`);
	Promise.race([waitForTime(ms),waitForClicks(clicks)])
		.then(()=>setText1('Good job, comrade.'))
		.catch(()=>setText1('100 кликов вне очереди.'));
	
}

clickChallange(3,5);