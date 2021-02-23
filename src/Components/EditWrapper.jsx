import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom';
import { changeEdit, editToDo, changeShow } from '../Redux/Actions/index.jsx';
import { GrFormClose } from 'react-icons/gr';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

function EditWrapper() {

	//Get the ID of element to edit

	const oldTodos = useSelector(state => state.showTodos);
	const oldEditID = useSelector(state => state.changeEdit);
	const dispatch = useDispatch();

	//Function to close input
	const wrapper = document.querySelector('#editWrapper');
	const close = () => {
		wrapper.classList.add('close');
	}

	//OLD VALUES
	const oldTitle = oldTodos[oldEditID]?.title;
	const oldDesc = oldTodos[oldEditID]?.desc;
	const oldPriority = oldTodos[oldEditID]?.prio;
	const oldDate = oldTodos[oldEditID]?.created;

	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [priority, setPriority] = useState('Low');

	const submitForm = e => {
		e.preventDefault();

		//Close the read if open
		dispatch(changeShow(false));

		//Validate form
		if ((title == ' ') || (desc == ' ')) {
			return;
		}

		//Get the date
		const monthNames = [
			'Jan', 'Feb', 'Mar',
			'Apr', 'May', 'Jun',
			'Jul', 'Aug', 'Sep',
			'Oct', 'Nov', 'Dec'
		];

		const date  = new Date();
		const year  = date.getFullYear();
		const month = monthNames[date.getUTCMonth()];
		const day	= date.getUTCDate();

		const edited_time = `${day} ${month} ${year}`;

		//GET NEW DATA TO UPDATE
		const todo = {
			title: title || oldTitle,
			desc: desc || oldDesc,
			prio: priority || oldDesc,
			edited: edited_time
		}

		//NEW TODOS STATE
		const newTodos = [...oldTodos];
		newTodos[oldEditID].title = todo.title;
		newTodos[oldEditID].desc = todo.desc;
		newTodos[oldEditID].prio = todo.prio;
		newTodos[oldEditID].edited = todo.edited;

		dispatch(editToDo(newTodos))

		//Reset the form
		setTitle('');
		setDesc('');
		setPriority('Low');

		//Close the wrapper
		wrapper.classList.add('close');


	}

	const Button = styled.button`
		background: #0C0D0D;
		color: #F4F5F6;
		border: none;
		border-radius: 4px;
		min-width: 120px;
		padding: 12px 25px;
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
			<div className="newTodo">

				<div className="Close" title="Close" onClick={close}>
					<GrFormClose />
				</div>

				<h1>Edit task</h1>
				<form action="" onSubmit={submitForm}>

					<label htmlFor="">Title</label>
					<input
						type="text" 
						placeholder="Task title (140 Characters)..."
						value={title || oldTitle}
						onChange={e => setTitle(e.target.value || ' ')}
						maxLength="140"
					/>
					<br /><br />

					<label htmlFor="">Description</label>
					<textarea
						placeholder="240 Characters"
						value={!desc ? oldDesc : desc}
						onChange={e => setDesc(e.target.value || ' ')}
						maxLength="240"
					>
					</textarea>
					<br /><br />

					<label htmlFor="">Priority</label>
					<select id="" value={priority || oldPriority} onChange={e => setPriority(e.target.value)}>
						<option value="Low">Low</option>
						<option value="Medium">Medium</option>
						<option value="High">High</option>
					</select>
					<br /> <br />

					<Button>EDIT TASK</Button>
				</form>
			</div>
		</React.Fragment>,
		document.getElementById('editWrapper')
	)
}

export default EditWrapper