import logo from './logo.svg';
import './App.css';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import BasicTodoList from './components/BasicTodoList';
import ShortCircuitEvaluation from './components/ShortCircuitEvaluation';
import BasicForms from './components/forms/BasicForms';

function App() {
  return (
    <div className="App">
    {/* <UseStateArray></UseStateArray> */}
     {/* <UseStateObject></UseStateObject> */}
     {/* <BasicTodoList></BasicTodoList> */}
     {/* <ShortCircuitEvaluation></ShortCircuitEvaluation> */}
     <BasicForms></BasicForms>
    </div>
  );
}

export default App;
