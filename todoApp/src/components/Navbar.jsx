import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ToDoApp</div>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
