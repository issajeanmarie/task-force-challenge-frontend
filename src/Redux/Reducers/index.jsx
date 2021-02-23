import showTodos from './showTodos.jsx';
import changeDelete from './changeDelete.jsx';
import changeEdit from './changeEdit.jsx';
import changeRead from './changeRead.jsx';
import changeShow from './changeShow.jsx';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	showTodos: showTodos,
	changeDelete: changeDelete,
	changeEdit: changeEdit,
	changeRead: changeRead,
	changeShow: changeShow
})

export default allReducers;