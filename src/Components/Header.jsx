import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';

import { BiFilter } from 'react-icons/bi';

export function Header() {

	const [state, setState] = useState(false);

	useEffect(() => {
		const filters = document.querySelector('#filters');

		//Set state by default
		if (state) {
			filters.classList.remove('close');
		} else{
			filters.classList.add('close');
		}
	})

	const Header = styled.div`
		padding: 20px;
		display: flex;
		align-items: center;
	`;

	const Logo = styled.div`
		flex: 1 1 auto;

		img{
			width: 30px;
		}
	`;

	const Side = styled.div`
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const Filter = styled.div`
		background: #F4F5F6;
		width: 80px;
		height: 35px;
		border-radius: 4px;
		margin-right: 24px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	`;

	return (
		<Header>
			<Logo>
				<img src='./img/IB_logo.png' alt="Awesomity" />
			</Logo>
			<Side>
				<Search />
				<Filter onClick={() => setState(!state)}>
					<BiFilter />
				</Filter>
				<TheButton text="NEW TASK" />
			</Side>
		</Header>
	)
}

export function TheButton({text}) {

	//Function to close input
	const openForm = () => {
		const wrapper = document.querySelector('#newWrapper');
		wrapper.classList.remove('close');
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


	return(
		<Button onClick={openForm}>{ text }</Button>
	)
}