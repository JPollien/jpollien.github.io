import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

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
	
	  
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        {/*<Route path="/pricing" element={<Layout><Pricing /></Layout>} />*/}
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
	  

      <footer className="footer">
        <p>&copy; 2025 Downeast Landscape Imaging. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
