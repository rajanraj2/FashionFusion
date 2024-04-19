
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import {Contact} from './pages/Contact';
import {Register} from './pages/Register';
import {Login} from './pages/Login';
import {Services} from './pages/Services.jsx';
import {Error} from './pages/Error.jsx';
import {Logout} from './pages/Logout.jsx';
import {Navbar} from './components/Navbar.jsx';
import {Footer} from './components/Footer/Footer.jsx';


function App() {
  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes> 

        <Footer />

      </Router>
    </>
  );
}

export default App;