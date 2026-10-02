import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MassAndSacraments from './pages/MassAndSacraments';
import Leadership from './pages/Leadership';
import Ministries from './pages/Ministries';
import Gallery from './pages/Gallery';
import Giving from './pages/Giving';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mass-and-sacraments" element={<MassAndSacraments />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/activities" element={<Ministries />} />
          <Route path="/ministries" element={<Navigate to="/activities" replace />} />
          <Route path="/news" element={<Navigate to="/activities" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Giving />} />
          <Route path="/giving" element={<Navigate to="/donate" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
