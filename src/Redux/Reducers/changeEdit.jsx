const oldEditID = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_EDIT_ID':
			return state = action.payload;
		default:
			return state;
	}
}

export default oldEditID;