import React, { useState, useEffect } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    setCurrentUser(user);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserData = users.find(user => user.username === user);
    if (currentUserData) {
      setTodos(currentUserData.todos);
    }
  }, []);

  const handleAddTodo = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(user => {
      if (user.username === currentUser) {
        user.todos.push(newTodo);
        return user;
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mb-4">Logout</button>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="p-2 border-b border-gray-200">{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
