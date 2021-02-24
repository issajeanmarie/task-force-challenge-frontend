import React from 'react';
import { filterTodo } from '../Redux/Actions/index.jsx';
import { useSelector, useDispatch } from 'react-redux';

/**
 *This method filters the todo list. It returns todos based on the
 chosen priority.
 @function FilterChoice
*/
function FilterChoice() {

	const dispatch = useDispatch();

	const filter = e => {
		//Set state
		dispatch(filterTodo(e));
	}

	return (
		<div id="filters" className="shadow-md priorities close">
			<h1>FILTER BY PRIORITY</h1>
			<p onClick={() => filter('Low')}>Low priority</p>
			<p onClick={() => filter('Medium')}>Medium priority</p>
			<p onClick={() => filter('High')}>High priority</p>
		</div>
	)
}

export default FilterChoice