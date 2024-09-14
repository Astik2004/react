import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Todo from './components/Todo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div className="container mx-auto p-4">
        {isLoggedIn ? (
          <Todo setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <>
            <Login setIsLoggedIn={setIsLoggedIn} />
            <Signup />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
