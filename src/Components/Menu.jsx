import React from 'react';
import styled from 'styled-components';
import SingleMenu from './SingleMenu.jsx';
import { useSelector } from 'react-redux';

function Menu() {

	const showTodos = useSelector(state => state.showTodos);
	//Active tasks
	const activeTaks = showTodos.filter(showTodo => showTodo.done === false);
	//Done tasks
	const doneTaks = showTodos.filter(showTodo => showTodo.done === true);
	//Active high tasks
	const activeHigh = showTodos.filter(showTodo => showTodo.done === false && showTodo.prio === 'High');
	//Closed high tasks
	const closedHigh = showTodos.filter(showTodo => (showTodo.done === true && showTodo.prio === 'High'));

	const Menu = styled.div`
		background: #F4F5F6;
		padding: 25px 12px;
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		overflow-x: auto;
	`;

	const types = [
		'Total Tasks',
		'Active Tasks',
		'Tasks Done',
		'Active High Priority',
		'Closed High Priority' 
	];

	return (
		<React.Fragment>
			<Menu>

				<SingleMenu type='Total Tasks' number={showTodos.length} />
				<SingleMenu type='Active Tasks' number={activeTaks.length} />
				<SingleMenu type='Tasks Done' number={doneTaks.length} />
				<SingleMenu type='Active High Priority' number={activeHigh.length} />
				<SingleMenu type='Closed High Priority' number={closedHigh.length} />
			</Menu>
		</React.Fragment>
	)
}

export default Menu