import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(data);
    updateChartData(data);
  }, []);

  const updateChartData = (data) => {
    const categories = {};
    data.forEach(exp => {
      categories[exp.category] = (categories[exp.category] || 0) + exp.amount;
    });
    
    setChartData({
      labels: Object.keys(categories),
      datasets: [{
        data: Object.values(categories),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57'],
      }]
    });
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setExpenses(updatedExpenses);
    updateChartData(updatedExpenses);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <Link to="/add-expense" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add Expense</Link>
      <div className="mb-4">
        <Chart type="pie" data={chartData} />
      </div>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index} className="p-2 border-b border-gray-300 flex justify-between items-center">
            <span>{exp.category}: ${exp.amount}</span>
            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
