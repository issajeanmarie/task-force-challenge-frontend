import Elements from './Components/index.jsx';
import { useSelector } from 'react-redux';
import Wrapper from './Components/Wrapper.jsx';
import DeleteWrapper from './Components/DeleteWrapper.jsx';
import EditWrapper from './Components/EditWrapper.jsx';
import { 
			addToDo,
			deleteToDo,
			doneToDo,
			editToDo,
      changeDelete,
      changeEdit
 		} from './Redux/Actions/index.jsx';

/**
 * This is the documentation
*/
function App() {


  return (
      <>
        <Elements />
        <Wrapper />
        <DeleteWrapper />
        <EditWrapper />
      </>
  );
}

export default App;
