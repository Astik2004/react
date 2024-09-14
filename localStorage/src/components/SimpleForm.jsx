import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState(() => {
    // Get the initial list of users from localStorage if it exists
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new user object
    const newUser = { name, email };
    
    // Update the users array
    const updatedUsers = [...users, newUser];
    
    // Store the updated array in local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Update the users state with the new user
    setUsers(updatedUsers);
    
    // Reset form fields
    setName('');
    setEmail('');
    
    alert('User data saved to local storage!');
  };

  return (
    <div>
      <h2>React Form to Store Multiple Users</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Stored Users:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserForm;
