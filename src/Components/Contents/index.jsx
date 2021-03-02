import Empty from './Empty.jsx';
import Todos from './Todos.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAll } from '../../Redux/Actions/index.jsx';

function Contents({Button}) {

	//Function to close input
	const openForm = () => {
		const wrapper = document.querySelector('#newWrapper');
		wrapper.classList.remove('close');
	}

	const showTodos = useSelector(state => state.showTodos);
	const dispatch = useDispatch()
	let counter = 1;

	return(
		<div className="Contents">

			{
				showTodos.length === 0 ? 
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

					<button className="delete" onClick={() => dispatch(deleteAll())}>Delete all</button>
				</>
			}
		</div>
	)
}

export default Contents;