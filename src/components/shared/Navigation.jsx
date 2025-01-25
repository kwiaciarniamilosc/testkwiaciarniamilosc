import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="relative text-gray-800 hover:text-pink-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-pink-500 after:left-0 after:bottom-[-4px] after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={`${import.meta.env.BASE_URL}/assets/images/logo/logo.png`} alt="Kwiaciarnia Miłość" className="h-12 w-auto" /> {/*header part logo */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/o-nas">O nas</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/galeria">Galeria</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:733060191" className="flex items-center space-x-2 text-pink-500 hover:text-pink-600">
              <Phone className="h-5 w-5" />
              <span>733 060 191</span>
            </a>
            <a
              href="https://wolt.com/pl/pol/warsaw/venue/pracownia-kwiatw-i-balonw-mio"
              className="inline-flex items-center px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors"
            >
              <span>Zamów teraz</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-pink-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link to="/o-nas" className="block px-3 py-2 text-gray-800 hover:text-pink-500">O nas</Link>
          <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:text-pink-500">Blog</Link>
          <Link to="/galeria" className="block px-3 py-2 text-gray-800 hover:text-pink-500">Galeria</Link>
          <Link to="/kontakt" className="block px-3 py-2 text-gray-800 hover:text-pink-500">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;