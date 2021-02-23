import React from 'react';
import styled from 'styled-components';

function SingleMenu({type, number}) {


	return (
		<div className="singleMenu shadow-md">
			<h1>{number}</h1>
			<p>{type}</p>
		</div>
	)
}

export default SingleMenu