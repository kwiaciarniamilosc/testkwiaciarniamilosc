import React from 'react';
import { HelmetProvider } from 'react-helmet-async';  // ✅ Added HelmetProvider at the top
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import BlogIndex from './pages/Blog/index';
import BlogDetail from './pages/Blog/Detail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>  {/* ✅ Wrap the whole app properly */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="galeria" element={<Gallery />} />
            <Route path="blog" element={<BlogIndex />} />
            <Route path="blog/:postId" element={<BlogDetail />} />
            <Route path="o-nas" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>  
  );
}

export default App;
