const select1_1=document.getElementById('select1_1');
const select1_2=document.getElementById('select1_2');
const btn_result1=document.getElementById('result1');
const input1=document.getElementById('input_res1');
const error1=document.getElementById('error1');

const select2_1=document.getElementById('select2_1');
const select2_2=document.getElementById('select2_2');
const btn_result2=document.getElementById('result2');
const start=document.getElementById('start');
const end=document.getElementById('end');

const show_result2=document.getElementById('show_result2');

select1_1.selectedIndex=0;
select1_2.selectedIndex=1;
select2_1.selectedIndex=0;
select2_2.selectedIndex=1;
btn_result1.addEventListener('click',(event)=>{
			if(select1_1.selectedIndex==0){
				if(select1_2.selectedIndex==0){
					error1.innerHTML="Выбирайте разные валюты";
					input_res1.value="";
				}else
				if(select1_2.selectedIndex==1){
					error1.innerHTML="";
					fetch("https://api.exchangeratesapi.io/latest?base=GBP",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>input_res1.value=res.rates.USD);
				}else
				if(select1_2.selectedIndex==2){
					error1.innerHTML="";
					fetch("https://api.exchangeratesapi.io/latest?base=GBP",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>input_res1.value=res.rates.EUR);
				}
			}else
			
			if(select1_1.selectedIndex==1){
				if(select1_2.selectedIndex==0){
					error1.innerHTML="";
					fetch("https://api.exchangeratesapi.io/latest?base=USD",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>input_res1.value=res.rates.GBP);
				}else
				if(select1_2.selectedIndex==1){
					error1.innerHTML="Выбирайте разные валюты";
					input_res1.value="";
				}else
				if(select1_2.selectedIndex==2){
					error1.innerHTML="";
					fetch("https://api.exchangeratesapi.io/latest?base=USD",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>input_res1.value=res.rates.EUR);
				}
			}else
			
			if(select1_1.selectedIndex==2){
				if(select1_2.selectedIndex==0){
					error1.innerHTML="";
					fetch("https://api.exchangeratesapi.io/latest?base=EUR",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>input_res1.value=res.rates.GBP);
				}else
				if(select1_2.selectedIndex==1){
					error1.innerHTML="";
					fetch("https://api.exchangeratesapi.io/latest?base=EUR",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>input_res1.value=res.rates.USD);
				}else
				if(select1_2.selectedIndex==2){
				error1.innerHTML="Выбирайте разные валюты";
					input_res1.value="";
				}
			}
		});
		
		var strt;
		var endd;
btn_result2.addEventListener('click',(event)=>{
	strt=start.value;
	selectedOption1 = select2_1.options[select2_1.selectedIndex];
		selectedOption2 = select2_2.options[select2_2.selectedIndex];
	fetch("https://api.exchangeratesapi.io/history?start_at="+start.value+"&end_at="+end.value+"&base="+selectedOption1.text,{method: 'GET'})
					.then(res1=>res1.json())
					.then(res1=>{console.log(res1);
						
						
					});
});

//fetch('https://api.exchangeratesapi.io/latest?symbols=USD,GBP')
//.then(res=>input_res1.value=res);