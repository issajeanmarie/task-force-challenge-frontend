import React, {useState, useEffect} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { searchTodo } from '../Redux/Actions/index.jsx';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


function Search() {

	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');

	const triggerSearch = (e) => {
		setSearchValue(e.target.value);

		//Set state
		dispatch(searchTodo(e.target.value));
	}

	const Input = styled.input`
		background: #F4F5F6;
		background-image: url('./img/loupe.png');
		background-size: 15px;
		background-repeat: no-repeat;
		background-position: 6% 50%;
	`;

	return (
		<div className="searchBox">
			<Input
				type="search"
				placeholder="Search"
				name=""
				id="search"
				value={searchValue}
				onChange={triggerSearch}
				
			/>
			<button>Search</button>
		</div>
	)
}

export default Search