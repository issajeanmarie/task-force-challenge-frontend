import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { searchTodo, showToDos } from '../Redux/Actions/index.jsx';
import { useSelector, useDispatch } from 'react-redux';


function Search() {

	const dispatch = useDispatch();
	const oldState = useSelector(state => state.showTodos);

	const [searchValue, setSearchValue] = useState('');

	const triggerSearch = (e) => {
		setSearchValue(e.target.value);

		//Change it
		const newTodos = [...oldState];
		const result = newTodos.filter(todo => {
			const search = todo.title.toLowerCase();
			return search.includes(e.target.value.toLowerCase());
		});

		//Set state
		dispatch(searchTodo(result));
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