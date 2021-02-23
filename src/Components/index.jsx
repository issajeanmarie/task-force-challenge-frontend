import React from 'react';
import { Header, TheButton } from './Header.jsx';
import Menu from './Menu.jsx';
import Contents from './Contents/index.jsx';
import ReadTodo from './ReadTodo.jsx';
import { changeShow } from '../Redux/Actions/index.jsx';
import { useSelector, useDispatch } from 'react-redux';

function Index({className}) {

	//Get class to hide and show
	const dispatch = useDispatch();
	const oldShow = useSelector(state => state.changeShow);

	//Variables to hide and show
	let hide = '';
	let show = '';

	if (oldShow) {
		hide = 'hide_read';
		show = '';
	} else{
		hide = '';
		show = 'hide_read'
	}

	return (
		<React.Fragment>
			<div className='blackCont'></div>
			<ReadTodo className={show} />
			<div className={`elements shadow ${hide}`}>
				<Header />
				<Menu></Menu>
				<Contents Button = {TheButton} />
			</div>
		</React.Fragment>
	)
}

export default Index