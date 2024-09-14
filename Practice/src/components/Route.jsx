import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

// Component to handle routing
function Rout() {
    const users = [
        { id: 1, name: "Astik", email: "astik@gmail.com" },
        { id: 2, name: "Ankit", email: "astik@gmail.com" },
        { id: 3, name: "Asu", email: "astik@gmail.com" },
        { id: 4, name: "Anil", email: "astik@gmail.com" },
        { id: 5, name: "Ajit", email: "astik@gmail.com" },
        { id: 6, name: "Ashutosh", email: "astik@gmail.com" },
        { id: 7, name: "T", email: "astik@gmail.com" },
    ];

    return (
        <Router>
            <h1>React Dynamic Routing</h1>
            <nav>
                {users.map((item) => (
                    <Link to={`/user/${item.id}`} key={item.id}>
                        <h3>{item.name}</h3>
                    </Link>
                ))}
            </nav>

            <Routes>
                <Route path="/user/:id" element={<User />} />
            </Routes>
        </Router>
    );
}

// Functional component to display user details
function User() {
    const { id } = useParams();
    return (
        <div>
            <h1>Hii User Number: {id}</h1>
        </div>
    );
}

export default Rout;
