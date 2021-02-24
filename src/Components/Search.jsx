import React, { useState } from 'react';
import { searchTodo } from '../Redux/Actions/index.jsx';
import { useDispatch } from 'react-redux';

/**
 *SEARCH METHOD.  
 *This method allows the user to make a search. 
 *It takes input and change the global state of todoes.
 @module Search
*/
function Search() {

	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');

/**
 *This function takes the user's input to make search.
 *function triggerSearch
*/
	const triggerSearch = (e) => {
		setSearchValue(e.target.value);

		//Set state
		dispatch(searchTodo(e.target.value));
	}

	const style = {
		backgroundImage: "url('./img/loupe.png')",
		backgroundSize: '15px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '6% 50%'
	}

	return (
		<div className="searchBox" data-testid="searchBox">
			<input
				style={style}
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