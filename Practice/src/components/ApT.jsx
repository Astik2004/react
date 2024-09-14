import React, { useEffect, useState } from 'react';

function ApI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Example API call - replace with your actual endpoint
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json())
      .then((resp) => {
        setUsers(resp);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Get API Call</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              {/* Assuming phone is used for mobile */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApI;
