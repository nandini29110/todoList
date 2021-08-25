import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import ToDoInput from "./components/ToDoInput";

function App() {
  return (
    <div className="App">
    <h1>TODO List</h1>
    <ToDoInput/>
    </div>
  );
}

export default App;
