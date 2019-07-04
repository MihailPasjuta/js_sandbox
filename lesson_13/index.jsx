import React from 'react';
import ReactDOM from 'react-dom';

function Circle({color, children}){
	const addition=children
	? <div style={{textAlign: "center", lineHeight: "6em"}}>{children}</div>
	: null;
	return(
		<div style={{backgroundColor: color, border:"1px solid black", marginTop: '15px', padding: "5px", width: "100px", height: "100px", borderRadius: "50%"}}>
				{addition}
		</div>
	)
}

function Rect({color, children}){
	const addition=children
	? <div style={{textAlign: "center", lineHeight: "6em"}}>{children}</div>
	: null;
	return(
		<div style={{backgroundColor: color, border:"1px solid black", marginTop: '15px', padding: "5px", width: "100px", height: "100px"}}>
				{addition}
		</div>
	)
}

ReactDOM.render((
<div>

<Circle color= "#228B23">Circle</Circle>
<Rect color= "#A52A2A">Rect</Rect>
</div>
	), document.getElementById('root'));
//////////////////////////////////////////////

function Address({country, city, street, location}){
	return(
		<footer style={{border:`${Math.random()*5}px solid black`, marginTop: '15px', padding: "5px"}}>
			<span>Country: {country}</span><br/>
			<span>City: {city}</span><br/>
			<span>Street: {street}</span><br/>
			<a href = {"https://www.google.com/maps/@"+location.lat+","+location.lng+",18.01z"}>Coordination</a>
		</footer>
	)
}


ReactDOM.render((
<div>
	<Address country = 'Ukraine' city="Poltava" street="Pozena" location={{lat:"49.5752169", lng: "34.5207418"}}></Address>
</div>
	), document.getElementById('footer'));