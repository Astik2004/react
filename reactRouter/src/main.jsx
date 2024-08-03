import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Home from './Components/Home/Home.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
//1st Method
/* const router=createBrowserRouter([
   {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<AboutUs/>
      },
      {
        path:"contactus",
         element:<ContactUs/>
       }
     ]
   }
 ])*/

//2nd Mathod

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<AboutUs/>} />
        <Route path='contactus' element={<ContactUs/>} />
        <Route path='user/:userid' element={<User/>} />
        <Route path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
