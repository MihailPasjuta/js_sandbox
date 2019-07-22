import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import {Store} from './store';
import * as Constants from'./actions';
	
	function List(props){
		let new_name='';
		return(
		<div>
		{props.check}
			<input
				onChange={props.checking}
				name="isGoing"
				type="checkbox"
			/>
			
			<br/>
			{props.count}
			<button onClick={props.plus}>Increment</button>
			{props.list.map(student=>(
				<div 
					key={student.name}
					onClick={props.remove.bind(null, student.name)}
				>
					{student.name}
				</div>
			))}
			<button onClick={()=>props.add(new_name)}>ADD</button>
			<input type="text" onChange={(event)=>new_name=event.target.value}></input>
			
				
		</div>
		)
	}
	
	const ListConnected = connect(
		(state)=>({
			list: state.students,
			count: state.counter.count,
			check: state.enabled.check
			}),
		(dispatch)=>({
			remove:(name)=> dispatch({type: Constants.REMOVE, name}),
			add:(name)=> dispatch({type: Constants.ADD, name}),
			plus:()=>dispatch({type: Constants.PLUS}),
			checking:()=>dispatch({type: 'TOGGLE'})
		}),
	)(List);
	
	ReactDOM.render((
	<Provider store={Store}>
		<ListConnected/>
	</Provider>
	), document.getElementById('root'));