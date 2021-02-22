const oldDeleteID = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_DELETE_ID':
			return state = action.payload;
		default:
			return state;
	}
}

export default oldDeleteID;