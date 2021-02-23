const oldShowStatus = (state = false, action) => {
	switch(action.type){
		case 'CHANGE_SHOW_STATUS':
			return state = action.payload;
		default:
			return state;
	}
}

export default oldShowStatus;