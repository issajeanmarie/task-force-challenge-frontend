import Elements from './Components/index.jsx';
import Wrapper from './Components/Wrapper.jsx';
import DeleteWrapper from './Components/DeleteWrapper.jsx';
import DeleteAllWrapper from './Components/DeleteAllWrapper.jsx';
import EditWrapper from './Components/EditWrapper.jsx';

/**
 * The container of all components.    
 * It has FOUR main components wich include other components.
*/
function App() {

  return (
      <>
        <Elements />
        <Wrapper />
        <DeleteWrapper />
        <DeleteAllWrapper />
        <EditWrapper />
      </>
  );
}

export default App;
