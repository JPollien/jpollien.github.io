import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        {/*<Link to="/pricing">Pricing</Link>*/}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
	
	  <div className="page-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/*<Route path="/pricing" element={<Pricing />} />*/}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
	  </div>

      <footer className="footer">
        <p>&copy; 2025 Downeast Landscape Imaging. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
