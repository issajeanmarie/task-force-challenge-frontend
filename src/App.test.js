import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Empty from './Components/Contents/Empty.jsx';
import Index from './Components/Contents/index.jsx';
import Todos from './Components/Contents/Todos.jsx';

//See if the all components run
it('renders', () => {
	const {queryByTestId}  = render(<Todos />)

	expect(queryByTestId("todos")).toBeTruthy();
})

//See if the all components run
it('renders', () => {
	const {queryByTestId}  = render(<Index />)

	expect(queryByTestId("all-components")).toBeTruthy();
})

it('renders', () => {
	const {queryByTestId}  = render(<Empty />)

	expect(queryByTestId("Empty")).toBeTruthy();
})