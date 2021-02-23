import React from 'react';
import reactDOM from 'react-dom';
import { GrFormClose } from 'react-icons/gr';
import { TheButton } from './Header.jsx';
import { deleteToDo, changeDelete, changeShow } from '../Redux/Actions/index.jsx'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

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

	const Button = styled.button`
		background: #0C0D0D;
		color: #F4F5F6;
		border: none;
		border-radius: 4px;
		min-width: 120px;
		padding: 8px 25px;
		margin: 0 4%;
		font-weight: bold;
		cursor: pointer;
		font-size: 0.65em;

		&:hover{
			background: #495D69;
		}
	`;

	return reactDOM.createPortal (
		<React.Fragment>
			<div className="deleteTodo">
				<h1>Are you sure?</h1>
				<p>
					If you delete this task you won't be able to reverse this action
				</p>
				<Button onClick={Delete}>DELETE TASK</Button>
				<p className="cancer" onClick={close}>Cancer</p>
			</div>
		</React.Fragment>,
		document.getElementById('deleteWrapper')
	)
}

export default DeleteWrapper