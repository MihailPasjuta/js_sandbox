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
