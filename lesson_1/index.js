"use strict";
/////////1 Задание
var n=39;
function makeGreetings(n){
	var variant=['год','года','лет'];
	var n1=n%10;
	if(n>10&&n<20) return ('Мой возраст '+n+' '+variant[2]);
	if(n1>1&&n1<5) return ('Мой возраст '+n+' '+variant[1]);
	if(n1==1) return ('Мой возраст '+n+' '+variant[0]);
	return ('Мой возраст '+n+' '+variant[2]);
}

//console.log(makeGreetings(n));

////////2 Задание
var array=[1,2,4,6,7,8,5,3,5,6];
var n=4;
function splitArray(array, n){
	var result=[];
	for(var i=0;i<array.length/n;i++)
	{
		result[i]=array.slice((i*n),(i*n)+n);
	}
	return result;
}
//console.log(splitArray(array, n));
function splitArray(arr, num){
	var result[];
	if(Array.isArray(arr)||!num||num<0)return result;
	for(var i=0;i<arr.length;i+=num){
		result.push(arr.slice(i,i+num));
	}
	
	return result;
}
//////Задание 3

function add(a){
	return function(b){
		return a+b;
	}
}



/////Задание 4
var res = [
 { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
 { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
 { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
];
function transformData(res){
	var result=[];
	for(var i=0;i<res.length;i++)
	{
		var demo=[];
		
		demo=res[i];
			if(demo.mark>5)
			result+=demo.login+": \'"+demo.firstName+' '+demo.lastName+'\' ';	
				
	}
	return result;
}
//console.log(transformData(res));

function transformData(data){
	var result={};
	for(var i=0;i<data.length;i+=1){
		if(data[i].mark>5){
			result[data[i].login]=(data[i].firstName+" "+data[i].lastName).trim();
		}
	}
	return result;
}

///trim()-удаляет пробелы в начале и конце строки
//////////////5 Задание
function addInfinite(a){
	
	function inner(b){
		inner.result+=b;
		return inner;
	}
	inner.result=a;
	return inner;
}




















