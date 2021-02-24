import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import { showToDos } from '../Redux/Actions/index.jsx';
import { useDispatch } from 'react-redux';
import { BiFilter } from 'react-icons/bi';

export function Header() {

	const dispatch = useDispatch();
	const [state, setState] = useState(false);

	useEffect(() => {
		const filters = document.querySelector('#filters');

		//Set state by default
		if (state) {
			filters.classList.remove('close');
		} else{
			filters.classList.add('close');
			dispatch(showToDos());
		}
	})

	return (
		<div className="Header">
			<div className="logo">
				<img src='./img/IB_logo.png' alt="Awesomity" />
			</div>
			<div className="rightMenu">
				<Search />
				<div className="filterCont" onClick={() => setState(!state)}>
					<BiFilter />
				</div>
				<TheButton text="NEW TASK" />
			</div>
		</div>
	)
}

export function TheButton({text}) {

	//Function to close input
	const openForm = () => {
		const wrapper = document.querySelector('#newWrapper');
		wrapper.classList.remove('close');
	}


	return(
		<button className="theButton" onClick={openForm}>{ text }</button>
	)
}