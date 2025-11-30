import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/home"
import Navbar from './components/Home/Navbar'
import About from './components/Aboutme/About'
import ContactForm from './components/Home/contactForm';
import Soccer from './components/Pages/Soccer.js';
import Graduation from './components/Pages/Graduation';

import Basketball from './components/Pages/Basketball';
import Volleyball from './components/Pages/Volleyball';
import Football from './components/Pages/Football'; 
import Professional from './components/Pages/Professional'

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
        <Route path='/Basketball' element={<Basketball />} />
        <Route path='/Volleyball' element={<Volleyball />} />
        <Route path='/Football' element={<Football />} />
        <Route path='/Professional' element={<Professional/>} />

      </Routes>
    </Router>
  );
}

export default App;
