import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

function Search() {

	const SearchBox = styled.div`
		display: flex;
		align-items: center;
		overflow: hidden;
		border-radius: 6px;
		height: 35px;
		flex: 0 0 auto;
		margin-right: 10px;

		input{
			background: #F4F5F6;
			background-image: url('./img/loupe.png');
			background-size: 15px;
			background-repeat: no-repeat;
			background-position: 6% 50%;
			border: none;
			flex: 1 1 auto;
			height: 35px;
			padding: 12px;
			padding-left: 34px;

			&:focus{
				background: #FFFFFF;
				border: 1px solid #0C0D0D;
				padding-left: 12px;
			}
		}

		button{
			background: #495D69;
			color: #FFFFFF;
			font-weight: bold;
			height: 35px;
			border: none;
			flex: 0 0 auto;
			padding: 0 20px;
			cursor: pointer;
		}
	`;
	return (
		<SearchBox>
			<input
				type="search"
				placeholder="Search"
				name=""
				id=""
			/>
			<button>Search</button>
		</SearchBox>
	)
}

export default Search