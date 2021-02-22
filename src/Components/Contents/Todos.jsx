import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { 
	deleteToDo, 
	doneToDo, 
	changeDelete,
	changeEdit 
} from '../../Redux/Actions/index.jsx'

import { MdEdit } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';

function Todos({showTodo, index, num}) {

	//Function to delete todo
	const dispatch = useDispatch();
	const oldState = useSelector(state => state.showTodos);
	const oldDelete = useSelector(state => state.changeDelete);
	const oldEdit = useSelector(state => state.changeEdit);

	const Done = () => {
		//Change state
		const newState = [...oldState];
		newState[index].done = true;

		dispatch(doneToDo(newState))
	}

	//Function to close input
	const openForm = () => {
		const wrapper = document.querySelector('#deleteWrapper');
		wrapper.classList.remove('close');

		//Create GLOBAL STORE FOR ID TO DELETE
		dispatch(changeDelete(index));
	}
	const openEditForm = () => {
		const wrapper = document.querySelector('#editWrapper');
		wrapper.classList.remove('close');

		//Create GLOBAL STORE FOR ID TO EDIT
		dispatch(changeEdit(index));
	}


	//Styles
	const Todo = styled.div`
		padding: 6px;
		width: 100%;
		margin: 8px;
		display: grid;
		grid-template-columns: 20px 1fr 1fr 150px 90px 90px 1fr 90px 1fr 30px 30px 80px;
		align-items: center;
		grid-column-gap: 3px;
		box-sizing: border-box;
		opacity: ${props => props.done === 'true' ? 0.4 : 1};
		position: relative;

		.num, .title{
			font-weight: bold;
			padding: 6px;
			font-size: 0.7em;
		}

		.title{
			grid-column: 2/5;
		}

		.date-1, .date-2{
			color: #495D69;
			font-size: 0.6em;
			font-weight: bold;
			margin-right: 5px;
			grid-column: 6/8;
		}

		.date-2{
			grid-column: 8/10;
		}

		.delete, .edit{
			background: #F4F5F6;
			width: 25px;
			height: 25px;
			text-align: center;
			line-height: 30px;
			color: #0C0D0D;
			border-radius: 4px;
			cursor: pointer;

			&:hover{
				background: #495D69;
			}
		}

		.delete{
			position: ${props => props.done === 'true' ? 'absolute' : ''};
			opacity: 1;
			right: 0;
		}

		.edit{
			display: ${props => props.done === 'true' ? 'none': ''}
		}

		button{
			background: #FFFFFF;
			border: 2px solid #1C2834;
			width: 80px;
			height: 25px;
			font-weight: bold;
			font-size: 0.65em;
			border-radius: 3px;
			cursor: pointer;
			display: ${props => props.done === 'true' ? 'none': ''}
		}
	`;

	const Priority = styled.div`
		background: ${props => {
			if (props.type === 'high') return '#0C0D0D';
			if (props.type === 'medium') return '#495D69';
			else	return '#F4F5F6';
		}};

		color: ${props => {
			if (props.type === 'high') return '#C1CF16';
			if (props.type === 'medium') return '#FFFFFF';
			else	return '#0C0D0D';
		}};

		border: none;
		border-radius: 50px;
		text-align: center;
		width: 80px;
		height: 20px;
		padding: 0 10px;
		margin: 0 4%;
		font-weight: bold;
		cursor: pointer;
		font-size: 0.60em;
		line-height: 21px;
	`;

	return (
		<Todo done={`${showTodo.done}`}>

			<p className="num">{num}</p>
			<p className="title">{showTodo.title}</p>
			<Priority type={showTodo.prio.toLowerCase()} title="Priority">{showTodo.prio}</Priority>
			<p className="date date-1">{showTodo.created}</p>
			<p className="date date-2">{showTodo.edited}</p>
			<p
				className="edit" 
				title="Edit" 
				done={`${showTodo.done}`}
				onClick={() => openEditForm()}
			>
				<MdEdit />
			</p>

			<p
				className="delete" 
				title="Delete"
				onClick={() => openForm()}
			>
				<GrFormClose />
			</p>

			<button
				className="Done" title="Done" done={`${showTodo.done}`}
				onClick={Done}
			>
				Done
			</button>

		</Todo>

	)
}

export default Todos