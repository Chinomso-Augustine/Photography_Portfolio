import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/home.js"
import Navbar from './components/Home/Navbar.js'
import About from './components/Aboutme/About.js'
import ContactForm from './components/Home/contactForm.js';
import Soccer from './components/Pages/Soccer.js';
import Graduation from './components/Pages/Graduation.js';

import BasketBall from "./components/Pages/basketball.js"
import VolleyBall from './components/Pages/volleyball.js';
import Football from './components/Pages/Football.js'; 
import Professional from './components/Pages/professional.js'

function App() {
  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element = {<About />} />
        <Route path='/ContactForm' element={<ContactForm />} />
        <Route path='/Soccer' element={<Soccer />} />
        <Route path='/Graduation' element={<Graduation />} />
        <Route path='/Basketball' element={<BasketBall />} />
        <Route path='/VolleyBall' element={<VolleyBall />} />
        <Route path='/Football' element={<Football />} />
        <Route path='/Football' element={<Football />} />
        <Route path='/Professional' element={<Professional/>} />

      </Routes>
    </Router>
  );
}

export default App;
