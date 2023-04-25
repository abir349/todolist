
import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  return (
    <div className="App" >
      
      <Header/>

			<AddTodo />
			<TodoList />
    </div>
  );
}

export default App;
