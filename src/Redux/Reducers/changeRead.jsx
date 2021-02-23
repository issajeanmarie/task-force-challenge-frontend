const oldReadID = (state = 0, action) => {
	switch(action.type){
		case 'CHANGE_READ_ID':
			return state = action.payload;
		default:
			return state;
	}
}

export default oldReadID;