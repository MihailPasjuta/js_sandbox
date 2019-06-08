"use strict"
function print(n){
	var str='&nbsp';
	document.write('`<br\/>');
	for(let i=n;i>0;i-=1){
		if(i<=n&&i>1)
			document.write(str.repeat(n-i+1)+'*'+str.repeat(i*2-2)+'*'+str.repeat(n-i+1)+'<br\/>');
		if(i==1)
		document.write(str.repeat(n-i+2)+'*'+str.repeat(n-i+2)+'<br\/>`');
	}
}
print(5);
function print2(n){
	var str1='&nbsp';
	document.write('`<br\/>');
	for(let i=0;i<=n;i+=1){
		if(i<=n&&i>1)
			document.write(str1.repeat(n-i+1)+'*'+str1.repeat(i*2-2)+'*'+str1.repeat(n-i+1)+str1.repeat(n-i+1)+'*'+str1.repeat(i*2-2)+'*'+str1.repeat(n-i+1)+'<br\/>');
		if(i==1)
		document.write(str1.repeat(n-i+2)+'*'+str1.repeat(n-i+2)+str1.repeat(n-i+2)+'*'+str1.repeat(n-i+2)+'<br\/>');
	}
	for(let i=n-1;i>0;i-=1){
		if(i<=n&&i>1)
			document.write(str1.repeat(n-i+1)+'*'+str1.repeat(i*2-2)+'*'+str1.repeat(n-i+1)+str1.repeat(n-i+1)+'*'+str1.repeat(i*2-2)+'*'+str1.repeat(n-i+1)+'<br\/>');
		if(i==1)
		document.write(str1.repeat(n-i+2)+'*'+str1.repeat(n-i+2)+str1.repeat(n-i+2)+'*'+str1.repeat(n-i+2));
	}
	document.write('<br\/>`');
}
print2(5);

//Верное решение
/*function print(num){
	let result='\n';
	
	for(let i=0;i<num-1;i+=1){
		result+=''.repeat(i);
		result+='*';
		result+=''.repeat(num*2-i*2-3);
		result+='*\n';
	}
	result+=' '.repeat(num-1);
	result+='*\n';
	
	return result;
}
function getArgValue(name,history){
	while(true){
	const answer=parseFloat(promt(`Enter arg value for ${name}`));
	history.push(answer);
	const number=parseFloat(answer);
	if(answer==='exit'){
		return false;
	}
	if(!isNaN(answer)){
		return answer;
	}
	}
}
function calculate(){
	const result={
		history: [],
		formula: '',
		args:{},
	};
	args=result.srgs;
while(true){
	const answer=promt('Which formula?');
	result.history.push(answer);
	if(answer==='exit'){
		return result;
	}
	if(answer==='1'){
		result.formula='y=kx+b';
		result.args={};
		const k=getArgValue('k',result.history);
		if(k===false){
			return result;
		}
		else{
			args.k=k;
		}
		const x=getArgValue('x',result.history);
		if(x===false){
			return result;
		}
		else{
			args.x=x;
		}
		const b=getArgValue('b',result.history);
		if(b===false){
			return result;
		}
		else{
			args.b=b;
		}
		alert(result.args.k*result.args.x+result.args.b);
	}	
	if(answer==='2'){
		result.formula='y=x^2';
		const x=getArgValue('x',result.history);
		if(x===false){
			return result;
		}
		else{
			args.x=x;
		}
		alert(result.args.x**2);//  ** - оператор возведения в степень
	}
}	
	return result;
}*/