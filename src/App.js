import React, { useState } from 'react';
import './App.css';


function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = prompt('Agregar nueva tarea:');
    setTodos([...todos, { task: newTodo, completed: false }]);
  }

  function completeTask(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  }

  return (
    <div>
      <center>
      <h1>Listado de tareas</h1><hr className='new1'></hr>
      <button className='button button1' onClick={addTodo}>Agregar una nueva tarea</button><hr className='new1'></hr>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task} <button className='button button1' onClick={() => completeTask(index)}>Completar</button>
          </li>
        ))}
    </center>
    </div>
  );
}

export default TodoList;
