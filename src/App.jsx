import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter
import Layout from './components/shared/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="o-nas" element={<About />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
