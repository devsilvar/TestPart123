import './App.css';
import FetchData from './components/2.intermidiate concepts/FetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoApp from './components/2.intermidiate concepts/LiftingState';
import Concepts from './components/3.Advaced Concepts/Concepts';
import ModalPortal from './components/3.Advaced Concepts/ModalPortal';

function App() {
  return (
    <>
      <h3>Display For Task 1</h3>
      <div className='card'>
        <div className='card-header'>Data Fetching Application</div>
        <div className='card-body'>
          <FetchData />
        </div>
      </div>

      <h3 className='mt-5'>Display For Task 2</h3>
      <div className='card'>
        <div className='card-header'>Todo Application</div>
        <div className='card-body'>
          <TodoApp />
        </div>
      </div>

      <h3 className='mt-5'>Display For Taks 3</h3>
      <div className='card'>
        <div className='card-header'>Theme useContext Application</div>
        <div className='card-body'>
          <Concepts />
        </div>
      </div>

      <h3 className='mt-5'>Display For Task 3.5</h3>
      <div className='card'>
        <div className='card-header'>Portal Application</div>
        <div className='card-body'>
          <ModalPortal ModalContent='You should close this Tab Now' />
        </div>
      </div>
    </>
  );
}

export default App;
