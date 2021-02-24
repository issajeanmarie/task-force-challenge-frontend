import Elements from './Components/index.jsx';
import Wrapper from './Components/Wrapper.jsx';
import DeleteWrapper from './Components/DeleteWrapper.jsx';
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
        <EditWrapper />
      </>
  );
}

export default App;
