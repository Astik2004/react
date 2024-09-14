import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './utils/Loaders';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [country, setCountry] = useState('IN'); // Default to India

  const dataFetch = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
      if (res?.data) {
        setData([res.data]); // Wrap in array to match previous structure
      } else {
        throw new Error('Data not available');
      }
    } catch (err) {
      setError('Failed to fetch data. The API might be down or unreachable.');
      console.error('Data fetch error:', err);
    } finally {
      setTimeout(() => setLoading(false), 2000); // Simulate a delay
    }
  };

  useEffect(() => {
    dataFetch();
  }, [country]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <p>Loading...</p>
          <Loader />
        </div>
      ) : error ? (
        <div className="error-message">
          <h2>{error}</h2>
        </div>
      ) : (
        <div>
          <center>
            <h1>COVID-19 DASHBOARD</h1>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Country</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Active</th>
                  <th>Last Update</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.country}</td>
                    <td>{item.cases}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                    <td>{item.active}</td>
                    <td>{new Date(item.updated).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </center>
        </div>
      )}
    </>
  );
};

export default App;
