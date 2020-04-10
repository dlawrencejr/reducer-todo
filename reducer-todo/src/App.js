import React, {useReducer} from 'react';
import {initialState,todoReducer} from './reducers/Reducers'
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'
import './App.css';

function App() {
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    const addTodo = (input) => {
      const newTodo = {
        todo: input,
        completed: false,
        id: Math.random()
      }
      dispatch({ type: "ADD-TODO", payload: newTodo })
    }

    const handleComplete = (id) => {
      dispatch({ type: "COMPLETE-TODO", payload: id })
    }

    const clearComplete = () => {
      dispatch({ type: "CLEAR-COMPLETED" })
    }

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
     
      <div className='todo-form'>

      <TodoForm addTodo={addTodo} />
      <br></br>
      <button className='clear-button' onClick={(e) => {
        e.preventDefault()
        clearComplete()
      }}>Clear Todo</button>
      </div>
     
    </div>
  );
}
export default App;