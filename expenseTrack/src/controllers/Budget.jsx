import React, { useState, useEffect } from 'react';

function Budget() {
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const savedBudget = JSON.parse(localStorage.getItem('budget')) || 0;
    setBudget(savedBudget);
  }, []);

  const handleSetBudget = (e) => {
    e.preventDefault();
    const newBudget = parseFloat(e.target.budget.value);
    localStorage.setItem('budget', JSON.stringify(newBudget));
    setBudget(newBudget);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Budget</h2>
      <p className="mb-4">Current Budget: ${budget}</p>
      <form onSubmit={handleSetBudget}>
        <input
          type="number"
          name="budget"
          placeholder="Set Budget"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Set Budget</button>
      </form>
    </div>
  );
}

export default Budget;
