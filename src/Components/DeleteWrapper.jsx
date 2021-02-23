import React from 'react';
import reactDOM from 'react-dom';
import { GrFormClose } from 'react-icons/gr';
import { TheButton } from './Header.jsx';
import { deleteToDo, changeDelete, changeShow } from '../Redux/Actions/index.jsx'
import { useSelector, useDispatch } from 'react-redux';

function DeleteWrapper() {

	const oldTodos = useSelector(state => state.showTodos);
	const oldDelete = useSelector(state => state.changeDelete);
	const dispatch = useDispatch();


	//Function to close input
	const wrapper = document.querySelector('#deleteWrapper');

	const close = () => {
		wrapper.classList.add('close');
	}



	const Delete = () => {
		//Change state
		const newState = [...oldTodos];
		newState.splice(oldDelete, 1);

		dispatch(deleteToDo(newState));

		//Close the wrapper
		close();

		//Close read cont if open
		dispatch(changeShow(false));
	}

	return reactDOM.createPortal (
		<React.Fragment>
			<div className="deleteTodo">
				<h1>Are you sure?</h1>
				<p>
					If you delete this task you won't be able to reverse this action
				</p>
				<button className="theButton" onClick={Delete}>DELETE TASK</button>
				<p className="cancer" onClick={close}>Cancer</p>
			</div>
		</React.Fragment>,
		document.getElementById('deleteWrapper')
	)
}

export default DeleteWrapper