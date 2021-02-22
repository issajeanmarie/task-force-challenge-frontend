import Empty from './Empty.jsx';
import Todos from './Todos.jsx';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

function Contents({Button}) {

	//Function to close input
	const openForm = () => {
		const wrapper = document.querySelector('#newWrapper');
		wrapper.classList.remove('close');
	}

	const todos = ['Hello'];
	const Contents = styled.div`
		width: 100%;
		height: 475px;
		overflow-y: auto;
		padding: 20px;
		padding-right: 20px;
		box-sizing: border-box;

		//Make Scroll
		::-webkit-scrollbar {
		  width: 7px;
		}

		::-webkit-scrollbar-track {
		  background: #F4F5F6;
		}

		::-webkit-scrollbar-thumb {
		  background: #495D69;
		}

		::-webkit-scrollbar-thumb:hover {
		  background: #1C2834;
		}

		h1{
			color: #495D69;
			padding: 20px;
			padding-bottom: 10px;
			font-weight: bold;
			font-size: 1.6em;
		}
	`

	const showTodos = useSelector(state => state.showTodos);
	let counter = 1;

	return(
		<Contents>

			{
				showTodos.length == 0 ? 
				<Empty Button={Button} onClick={openForm} />
				:
				<>
					<h1>
						{showTodos.length} Taks
					</h1>

					{
						showTodos.map((showTodo, index) => (
							<Todos showTodo={showTodo} key={counter+1} index={index} num={counter++} />
						))
					}
				</>
			}
		</Contents>
	)
}

export default Contents;