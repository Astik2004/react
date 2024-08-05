import React from 'react'
import {Outlet,Link} from 'react-router-dom';

function layout() {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <Outlet/>
        <footer>
            <h1>This is Footer</h1>
        </footer>
      </nav>
    </>
  )
}

export default layout
