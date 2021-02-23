import React from 'react';
import styled from 'styled-components';
import Todos from './Contents/index.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { 
	deleteToDo, 
	doneToDo, 
	changeDelete,
	changeEdit,
	changeRead,
	changeShow
} from '../Redux/Actions/index.jsx';
import { MdEdit } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';

function ReadTodo({className}) {

	//Function to delete todo
	const dispatch = useDispatch();
	const oldState = useSelector(state => state.showTodos);
	const oldDelete = useSelector(state => state.changeDelete);
	const oldEdit = useSelector(state => state.changeEdit);
	const oldRead = useSelector(state => state.changeRead);

	//Get data to show
	const newTodo = oldState[oldRead] || {};

	const Done = () => {
		//Change state
		const newState = [...oldState];
		newState[oldRead].done = true;

		//Change my to do too
		dispatch(doneToDo(newState));
	}

	//Close the read document
	const CloseIT = () => {
		dispatch(changeShow(false));
	}

	//Function to close input
	const openForm = () => {
		const wrapper = document.querySelector('#deleteWrapper');
		wrapper.classList.remove('close');

		//Create GLOBAL STORE FOR ID TO DELETE
		dispatch(changeDelete(oldRead));
	}
	const openEditForm = () => {
		const wrapper = document.querySelector('#editWrapper');
		wrapper.classList.remove('close');

		//Create GLOBAL STORE FOR ID TO EDIT
		dispatch(changeEdit(oldRead));
	}

	const Element = styled.div`
		background: #FFFFFF;
		width: 70%;
		height: 700px;
		border-radius: 4px;
		margin: -160px auto 2% auto;

		.title{
			color: #0C0D0D;
			font-size: 1.6em;
			padding: 20px 30px;
		}

		p.desc{
			padding: 6px 30px;
			color: #1C2834;
			font-weight: bold;
			font-size: 0.9em;
			span{
				display: block;
				color: #495D69;
				padding-top: 6px;
				font-size: 0.76em;
			}
		}

	`;

	const Content = styled.div`
		width: 100%;
		height: 250px;
		background-image: url('./img/IB_logo.png');
		background-size: cover;
		background-repeat: no-repeat;
	`;

	//Styles
	const Todo = styled.div`
		padding: 20px;
		width: 100%;
		margin: 8px;
		display: ${props => props.done === 'true' ? 'flex' : 'grid'};
		grid-template-columns: 20px 1fr 1fr 150px 1fr 5% 90px 30px 30px 120px;
		align-items: center;
		grid-column-gap: 3px;
		box-sizing: border-box;
		opacity: ${props => props.done === 'true' ? 0.4 : 1};
		position: relative;


		.date-1, .date-2{
			color: #495D69;
			font-size: 0.7em;
			font-weight: bold;
			margin-right: 5px;
			grid-column: 3/3;
		}

		.date-2{
			grid-column: 4/8
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
			right: 30px;
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
		font-size: 0.65em;
		line-height: 21px;
	`;

	return (
		<Element className={className}>
			<div className="Header-read">
				<img src='./img/IB_logo.png' alt="Awesomity" />
				<span onClick={CloseIT}><GrFormClose /></span>
			</div>
			<Content></Content>
			<br />

			<Todo done={`${newTodo.done}`}>

				<Priority type={newTodo.prio?.toLowerCase()} title="Priority">{newTodo.prio}</Priority>
				<p className="date date-1">{newTodo.created}</p>
				<p className="date date-2">{newTodo.edited}</p>
				<p
					className="edit" 
					title="Edit" 
					onClick={() => openEditForm()}
					done={`${newTodo.done}`}
				>
					<MdEdit />
				</p>

				<p
					className="delete" 
					title="Delete"
					onClick={() => openForm()}
					done={`${newTodo.done}`}
				>
					<GrFormClose />
				</p>

				<button
					className="Done" title="Done" done={`${newTodo.done}`}
					onClick={Done}
				>
					Done
				</button>

		</Todo>

		<h1 className="title">{newTodo.title}</h1>
		<p className="desc">
			Description <br />
			<span>
				{newTodo.desc}
			</span>
		</p>

		</Element>
	)
}

export default ReadTodo