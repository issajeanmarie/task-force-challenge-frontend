import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { searchTodo } from '../Redux/Actions/index.jsx';
import { useSelector, useDispatch } from 'react-redux';


function Search() {

	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');

	const triggerSearch = (e) => {
		setSearchValue(e.target.value);

		//Set state
		dispatch(searchTodo(e.target.value));
	}

	return (
		<div className="searchBox">
			<input
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