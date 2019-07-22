export default function reducer(state, payload){
	switch(payload.type){
		case 'TOGGLE':
				if(state.check=='true')
				return{check: 'false' } 
			else
				return {check: 'true' }
	}
	if(state){
		return state;
	}
	
	return {check:'false'};
}