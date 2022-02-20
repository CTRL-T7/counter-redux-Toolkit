import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {
const {count} = useSelector((state) => state.counter);
const dispatch =useDispatch();
  return (
    <div className="App">
     <h1>The count is :{count}</h1>
     <button onClick={() => dispatch(increment()) }>increment</button>
     <button onClick={() => dispatch(decrement())}>decrement</button>
     <button onClick={() => dispatch(incrementByAmount(22))}>Incremen by 22</button>

    </div>
  );
}

export default App;
