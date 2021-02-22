import showTodos from './showTodos.jsx';
import changeDelete from './changeDelete.jsx';
import changeEdit from './changeEdit.jsx';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	showTodos: showTodos,
	changeDelete: changeDelete,
	changeEdit: changeEdit,
})

export default allReducers;