import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom';
import { addToDo } from '../Redux/Actions/index.jsx';
import { GrFormClose } from 'react-icons/gr';
import { TheButton } from './Header.jsx';
import { useSelector, useDispatch } from 'react-redux';

function Wrapper() {

	const oldTodos = useSelector(state => state.showTodos);
	const dispatch = useDispatch();

	//Function to close input
	const wrapper = document.querySelector('#newWrapper');
	const close = () => {
		wrapper.classList.add('close');
	}

	const [image, setImage] = useState('');
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [priority, setPriority] = useState('Low');

	const submitForm = e => {
		e.preventDefault();
		//Validate the form
		if (!title || !desc || !priority) {
			return
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

		const created_time = `${day} ${month} ${year}`;

		//Allow submission
		const todo = {
			title: title,
			desc : desc,
			prio: priority,
			created: `Created ${created_time}`,
			edited: `Edited ${created_time}`,
			done: false
		};

		//SUBMIT TO REDUX
		dispatch(addToDo(todo));
		
		//Reset the form
		setTitle('');
		setDesc('');
		setPriority('Low');

		//Close the wrapper
		wrapper.classList.add('close');


	}

	return reactDOM.createPortal (
		<React.Fragment>
			<div className="newTodo">

				<div className="Close" title="Close" onClick={close}>
					<GrFormClose />
				</div>

				<h1>New task</h1>
				<form action="" onSubmit={submitForm}>
					<label htmlFor="">Add image</label>
					<div className="fileWrapper">
						<p>Tap to add image</p>
						<input type="file" />
					</div>
					<br /><br />

					<label htmlFor="">Title</label>
					<input
						type="text" 
						placeholder="Task title (140 Characters)..."
						value={title}
						onChange={e => setTitle(e.target.value)}
						maxLength="140"
					/>
					<br /><br />

					<label htmlFor="">Description</label>
					<textarea
						placeholder="240 Characters"
						value={desc}
						onChange={e => setDesc(e.target.value)}
						maxLength="240"
					>
					</textarea>
					<br /><br />

					<label htmlFor="">Priority</label>
					<select id="" value={priority} onChange={e => setPriority(e.target.value)}>
						<option value="Low">Low</option>
						<option value="Medium">Medium</option>
						<option value="High">High</option>
					</select>
					<br /> <br />

					<TheButton text="CREATE TASK" />
				</form>
			</div>
		</React.Fragment>,
		document.getElementById('newWrapper')
	)
}

export default Wrapper