"use strict"
const div=document.getElementById('my_div');
const button1=document.getElementById('button1');
const button_exit=document.getElementById('exit');

window.addEventListener('click',(event)=>console.log('move',event));
button1.addEventListener('click',(event)=>{
	div.style.display="block";
});

window.addEventListener('click',(event)=>console.log('move',event));
button_exit.addEventListener('click',(event)=>{
	div.style.display="none";
});