import React from 'react';
import styled from 'styled-components';

function SingleMenu({type, number}) {

	const Menu = styled.div`
		background: #FFFFFF;
		padding: 12px;
		border-radius: 4px;
		width: 130px;

		h1{
			color: #C1CF16;
			font-size: 1.5em;
		}

		p{
			font-weight: bold;
			color: #0C0D0D;
			font-size: 0.6em;
		}
	`;

	return (
		<Menu className="shadow-md">
			<h1>{number}</h1>
			<p>{type}</p>
		</Menu>
	)
}

export default SingleMenu