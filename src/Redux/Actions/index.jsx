export const showToDos = () => ({
	type: 'SHOW_TODO'
})

export const addToDo = (payload) => ({
	type: 'ADD_TO_DO',
	payload: payload
})

export const deleteToDo = (payload) => ({
	type: 'DELETE_TODO',
	payload: payload
})

export const doneToDo = (payload) => ({
	type: 'DONE_TODO',
	payload: payload
})

export const editToDo = (val) => ({
	type: 'EDIT_TO_DO',
	payload: val
});

export const changeDelete = (val) =>({
	type: 'CHANGE_DELETE_ID',
	payload: val
})

export const changeEdit = (val) =>({
	type: 'CHANGE_EDIT_ID',
	payload: val
})

export const searchTodo = (val) =>({
	type: 'SEARCH',
	payload: val
})

export const filterTodo = (val) =>({
	type: 'FILTER',
	payload: val
})