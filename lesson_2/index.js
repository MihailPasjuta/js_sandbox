"use strict";
///////1 задание
var object={ a: 1, b: [], c: '',g:'sa'};
var array1=['b','c'];
function removeKeys(obj, arr){
	var result={};
		for(var key in obj){
			if(arr.indexOf(key)==(-1))
				result[key]=obj[key];		
		}
		return result;
}
//console.log(removeKeys(object,array1));
////////Задание 2
var array2=[[1, "a", 2], [{}, 2, 3], [null, -3, Infinity]];
function clearNumbers(arr){
	
	for(var i=0;i<arr.length;i+=1){
		var demo=arr[i];
		var demo1=[];
		var k=0;
		for(var j=0;j<demo.length;j+=1){
			if(!isNaN(demo[j])&&demo[j]!=null||demo[j]==Infinity){
				demo1[k]=demo[j];
				k+=1;
			}
		}
		//return demo1;
		arr[i]=demo1;
	}
	return arr;
}
console.log(clearNumbers(array2));

//////////Задание 3

function reverse(){
	var result=[];
	var a=[];
	for(var i=0;i<arguments.length;i+=1){
		result[i]=arguments[i];
	}
	result.reverse();
	for(var j=0;j<result.length;j+=1){
		a=result[j].split('');
		result[j]=a.reverse();
		result[j]=result[j].join('');
	}
	return result;
}
//console.log(reverse('123','435','123456 789'));





























