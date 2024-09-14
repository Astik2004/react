import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Expense Tracker</div>
        <div>
          <Link to="/expenses" className="mr-4">Expenses</Link>
          <Link to="/budget" className="mr-4">Budget</Link>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/signup" className="mr-4">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
