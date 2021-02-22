let stateVal = [];

const backup = JSON.parse(localStorage.getItem('todoList'));
if (backup) {
	stateVal = backup
}

const showTodos = (state = stateVal, action) => {
	switch(action.type) {
		case 'SHOW_TODO':
			return state = stateVal;

		case 'SEARCH':
			{
				//Filter array
				const oldData = [...stateVal];
				const search = action.payload.toLowerCase()
				const result = 
				 oldData.filter(data => data.title.toLowerCase().includes(search));
				return state = result;
			}

		case 'FILTER':
			{
				//Filter array
				const oldData = [...stateVal];
				const filterBy = action.payload;
				const result = 
				 oldData.filter(data => data.prio === filterBy);
				return state = result;
			}

		case 'DELETE_TODO':
			{
				const backup = JSON.stringify(action.payload)
				localStorage.setItem('todoList', backup);

				return(
					state = action.payload,
					stateVal = state
				)
			}

		case 'DONE_TODO':
			{
				const backup = JSON.stringify(action.payload)
				localStorage.setItem('todoList', backup);

				return(
					state = action.payload,
					stateVal = state
				)
			}

		case 'ADD_TO_DO':
			{
				const newState = [...stateVal, action.payload]
				const backup = JSON.stringify(newState)
				localStorage.setItem('todoList', backup);

				return (
					state = newState,
					stateVal = state
				)
			}

		case 'EDIT_TO_DO':
			{
				const backup = JSON.stringify(action.payload)
				localStorage.setItem('todoList', backup);

				return (
					state = action.payload,
					stateVal = state
				)
			}
		default:
			return state;
	}
}

export default showTodos;