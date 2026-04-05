import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './Commit/Header';
import Footer from './Commit/Footer';
import Enquiry from './Commit/Enquiry';
import Notfound from './Commit/Notfound';
import About from './Commit/About';
import Products from './Commit/Products';
import Home from './Commit/Home';
import Privacy from './Commit/Privacy';
import Trems from './Commit/Trems';
import Product3DStl from './Commit/Product3DStl';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
        page_path: location.pathname,
      });
    }

    // Scroll to top on route chang
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/' element={<Home />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Trems />} />
        <Route path='/3d' element={<Product3DStl />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
