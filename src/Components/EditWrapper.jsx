import React, { useState } from 'react';
import reactDOM from 'react-dom';
import { editToDo } from '../Redux/Actions/index.jsx';
import { GrFormClose } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';

/**
 *This method allows to edit todos
 It takes inputs and changes the todo list in global state
 @function EditWrapper
*/
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

	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [priority, setPriority] = useState('Low');

	const submitForm = e => {
		e.preventDefault();

		//Validate form
		if ((title === '') || (desc === '')) {
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

					<button className="theButton">EDIT TASK</button>
				</form>
			</div>
		</React.Fragment>,
		document.getElementById('editWrapper')
	)
}

export default EditWrapper