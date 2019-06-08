"use strict"
var randomEmail = require('random-email');
var validator = require("email-validator");
const div=document.getElementById('my_div');
const button1=document.getElementById('button1');
const button_exit=document.getElementById('exit');
const txt=document.getElementById('txt');
var result;
window.addEventListener('click',(event)=>console.log('move',event));
button1.addEventListener('click',(event)=>{
	div.style.display="block";
	div.innerHTML=randomEmail();
});

window.addEventListener('click',(event)=>console.log('move',event));
button_exit.addEventListener('click',(event)=>{
	div.style.display="none";
});
if(txt.value=="")txt.style.borderColor="#808080";
window.addEventListener('change',(event)=>console.log('move',event));
txt.addEventListener('change',(event)=>{
	result=validator.validate(txt.value);
	if(txt.value=="")txt.style.borderColor="#808080";
	else
		if(txt.value!=""){
	if(result==true){
		txt.style.borderColor="#00FF00";
	}
	if(result==false){
		txt.style.borderColor="#FF0000";
	}
		}
});