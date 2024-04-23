
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import {Contact} from './pages/Contact.jsx';
import {Register} from './pages/Register.jsx';
import {Login} from './pages/Login.jsx';
import {Services} from './pages/Services.jsx';
import {Error} from './pages/Error.jsx';
import {Logout} from './pages/Logout.jsx';
import {Navbar} from './components/Navbar.jsx';
// import {Footer} from './components/Footer/Footer.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NewRegister from './components/Register.jsx';
import NewHome from './components/Home.jsx';
import NewContact from './components/Contact.jsx';
import NewServices from './components/Services.jsx';
import NewLogin from './components/Login.jsx';
import Pro from './components/Pros.jsx';
import Term from './components/Term.jsx';

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss";
import "./styles/login.scss";
import "./styles/register.scss";
import "./styles/index.scss";
import "./styles/pro.scss";




function App() {
  return (
    <>

      <Router>
        <Header/>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<NewContact />} /> 
          <Route path="/register" element={<NewRegister />} />
          <Route path="/login" element={<NewLogin />} />
          <Route path="/services" element={<NewServices />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/term" element={<Term />} />
          <Route path="*" element={<Error />} />
        </Routes> 

        <Footer />

      </Router>
    </>
  );
}

export default App;