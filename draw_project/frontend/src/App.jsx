import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home.jsx';
import Accueil from './pages/Accueil/Accueil.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import About from './pages/About/About.jsx';


/* composant pour définir les routes */

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/accueil' element={<Accueil />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;
