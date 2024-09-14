import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './controllers/Navbar';
import ExpenseList from './controllers/ExpenseList';
import AddExpense from './controllers/AddExpense';
import Budget from './controllers/Budget';
import Login from './controllers/Login';
import Signup from './controllers/Signup';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen w-100%">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<h1 className="text-black text-3xl font-bold">Welcome to Expense Tracker</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
