import React from 'react';
import reactDOM from 'react-dom';
import { deleteAll } from '../Redux/Actions/index.jsx';
import { useSelector, useDispatch } from 'react-redux';


/**
 *This method deletes todo.  
 It takes the id to delete from global state and filter the todos  
 and saves the new filtered global state.
 @function DeleteWrapper
*/
function DeleteAllWrapper() {

	const dispatch = useDispatch();


	//Function to close input
	const wrapper = document.querySelector('#deleteAllWrapper');

	const close = () => {
		wrapper.classList.add('close');
	}



	const Delete = () => {
		dispatch(deleteAll());
		wrapper.classList.add('close');
	}

	return reactDOM.createPortal (
		<React.Fragment>
			<div className="deleteTodo">
				<h1>Are you sure?</h1>
				<p>
					If you delete those tasks you won't be able to reverse this action
				</p>
				<button className="theButton" onClick={Delete}>DELETE ALL TASKS</button>
				<p className="cancer" onClick={close}>Cancer</p>
			</div>
		</React.Fragment>,
		document.getElementById('deleteAllWrapper')
	)
}

export default DeleteAllWrapper