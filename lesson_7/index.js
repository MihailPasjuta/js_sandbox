//import Color from './color.js';
document.getElementById('images');

class MiniSlider{
	constructor(img=document.getElementById('images')){
		this.img=img;
		this.hideAll();
		this.show(0);
        this.createButtons();
	}
	hideAll(){
		for(let i=0;i<this.img.childElementCount;i+=1)
		this.img.chilren[i].style.display="none";
	}
	show(n){
		this.hideAll();
		this.img.chilren[n].style.display="block";
	}
	createButtons(){
        const prev = document.createElement('button');
        prev.className = 'buuton';
        prev.innerHTML = 'Prev';
        prev.style.position = 'absolute';
        prev.style.bottom = '0';
        prev.style.left = '0';

        const next = document.createElement('button');
        next.className = 'buuton';
        next.innerHTML = 'Next';
        next.style.position = 'absolute';
        next.style.bottom = '0';
        next.style.right = '0';


        this.id.appendChild(prev);
        this.id.appendChild(next);
    }
	next(){
		
	}
}