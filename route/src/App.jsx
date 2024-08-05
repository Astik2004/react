import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import Nopage from './components/Nopage.jsx';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path="" element={<Home/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="*" element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
