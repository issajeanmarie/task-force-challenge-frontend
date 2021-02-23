import React from 'react';

function SingleMenu({type, number}) {


	return (
		<div className="singleMenu shadow-md">
			<h1>{number}</h1>
			<p>{type}</p>
		</div>
	)
}

export default SingleMenu