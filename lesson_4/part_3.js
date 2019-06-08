"use strict"
//var str='374456f7';
function func3(str){
	var new_str='**********';
	if(str.length>6&&str.length<=10){
		new_str=new_str.slice(0,str.length-4);
		str=str.slice(str.length-4);
		return new_str+str;
	}
	else
	{
		console.log("Ошибка");
	}
}
//console.log(func3(str));
var arr=[10,-1,5,6];
function func4(arr){
	var max=-Infinity, summ;
	for(let k=0;k<arr.length;k+=1){
		summ=0;
		for(let i=k;i<arr.length;i+=1){
			summ=summ+arr[i];
			if(summ>max)max=summ;
		}
	}
	return max;
}
console.log(func4(arr));
//var array=[2,[3,[4,5],[78]],[7,[8]]];
function func5(array){
		for(let i=0;i<array.length;i+=1){
			if(Array.isArray(array[i])){
				array = [].concat.apply([], array);
			}
		}
	return array;
}
//console.log(func5(array));

function mask(str){
	let result='';
	for(let i=0;i<str.length;i+=1){
		if(i<str.length-4){
			result+='*';
		}
		else{
			result+=str[i];
		}
	}
}
function add(arr){
	for(let i=0;i<arr.length;i+=1){
		if(Array.isArray(arr[i])){
			arr(arr[i],result);
		}
		else{
			result.push(arr[i]);
		}
	}
}
function func5(arr){
	const result=[];
	add(arr,result);
	return result;
}















