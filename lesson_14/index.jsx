import React from 'react';
import ReactDOM from 'react-dom';
import WrapInEmoji from './wrapinemoji';
import Timer from './timer';
ReactDOM.render((

<WrapInEmoji>Some Text</WrapInEmoji>


	), document.getElementById('root'));
	
ReactDOM.render((

<Timer></Timer>

	), document.getElementById('timer'));