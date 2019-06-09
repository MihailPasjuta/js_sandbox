"use strict"
function print(num){
	let result='\n';
	var str1=' ';
	for(let i=0;i<num-1;i+=1){
		
		result+=str1.repeat(i);
		result+='*';
		result+=str1.repeat(num*2-i*2-3);
		result+='*\n';
	}
	result+=str1.repeat(num-1);
	result+='*\n';
	return console.log(result);
}

function print2(num){
	let result='\n';
	var str1=' ';
	result+=str1.repeat(num-1);
	result+='*';
	result+=str1.repeat(2*(num-1));
	result+='*\n';
	for(let i=1;i<num-1;i+=1){
		result+=str1.repeat(num*2-i-6);
		result+='*';
		result+=str1.repeat(i*2-1);
		result+='*';
		result+=str1.repeat(num*2-i*2-2);
		result+='*';
		result+=str1.repeat(i*2-1);
		result+='*\n';
	}
	

	for(let i=0;i<num-1;i+=1){
		result+=str1.repeat(i);
		result+='*';
		result+=str1.repeat(num*2-i*2-3);
		result+='*'+str1.repeat(i*2)+'*';
		result+=str1.repeat(num*2-i*2-3);
		result+='*\n';
	}
	result+=str1.repeat(num-1);
	result+='*';
	result+=str1.repeat(2*(num-1));
	result+='*\n';
	return console.log(result);
}
print(5);
print2(5);

