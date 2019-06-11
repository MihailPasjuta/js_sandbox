import cats from './img/1.png';
function matrixDiff(arrs){
	var result=0;
	var arr=[];
	for(let i=0;i<arrs.length-1;i+=1){
		for(let j=0;j<arrs.length;j+=1){
			for(let z=0;z<arrs.length;z+=1){
				if(arrs[i][j][z]!=arrs[i+1][j][z]){
					arr[j]=Math.abs(arrs[i][j][z]-arrs[i+1][j][z]);		
				}
			}	
		}
	}
	for(let k=0;k<arr.length;k++){
	result+=arr[k];}
return result;
}

const cat = document.createElement('img');

function stickyCat(){
	cat.setAttribute('src',cats);
	cat.style.width='100px';
	cat.style.position='absolute';
	window.addEventListener('mousemove',(event) => {
		cat.style.top=`${event.y}px`;
		cat.style.left=`${event.x}px`;
	});
	document.body.append(cat);
}
function unstickTheCat(){
	document.body.removeChild(cat);
}

window.stickyCat = stickyCat;
window.unstickTheCat = unstickTheCat;