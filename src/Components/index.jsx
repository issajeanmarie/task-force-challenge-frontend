import React from 'react';
import styled from 'styled-components';
import { Header, TheButton } from './Header.jsx';
import Menu from './Menu.jsx';
import Contents from './Contents/index.jsx';
import ReadTodo from './ReadTodo.jsx';

function Index() {

	const BlackCont = styled.div`
		width: 100%;
		height: 230px;
		background: #1C2834;
	`;

	const Element = styled.div`
		background: #FFFFFF;
		width: 70%;
		height: 700px;
		border-radius: 4px;
		margin: -160px auto 2% auto;
	`;


	return (
		<React.Fragment>
			<BlackCont />
			<ReadTodo />
			{/*<Element className="shadow allElements">
				<Header />
				<Menu></Menu>
				<Contents Button = {TheButton} />
			</Element>*/}
		</React.Fragment>
	)
}

export default Index