import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import BasicTodoList from './components/BasicTodoList';
import ShortCircuitEvaluation from './components/ShortCircuitEvaluation';
import BasicForms from './components/forms/BasicForms';
import UseEffect1 from './components/useEffect Hook/UseEffect1';
import UseEffect2 from './components/useEffect Hook/UseEffect2';
import UseEffectApi from './components/useEffect Hook/UseEffectApi';
import Uncontrolled from './components/forms/Uncontrolled';
import UseReducer from './components/UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
    {/* <UseStateArray></UseStateArray> */}
     {/* <UseStateObject></UseStateObject> */}
     {/* <BasicTodoList></BasicTodoList> */}
     {/* <ShortCircuitEvaluation></ShortCircuitEvaluation> */}
     {/* <BasicForms></BasicForms> */}
     {/* <UseEffect1></UseEffect1> */}
     {/* <UseEffect2></UseEffect2> */}
     {/* <UseEffectApi></UseEffectApi> */}
     {/* <Uncontrolled></Uncontrolled> */}
     <UseReducer></UseReducer>
    </div>
  );
}

export default App;
