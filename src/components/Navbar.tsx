import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import mapCV from '../assets/HersiKopani_SeniorJavaEng.pdf';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-background-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="text-white font-bold text-2xl z-50">
          <span className="text-primary">Hersi</span>K<span className="text-primary">.</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          {/* <NavLink to="/blogs" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Services
          </NavLink> */}
          <NavLink to="/blogs" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
          <a 
            href={mapCV}
            className="btn btn-primary flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            <span>Resume</span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-background-dark/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 ease-in-out z-40 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center space-y-6 text-xl">
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Projects
            </NavLink>
            <NavLink to="/blogs" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Blogs
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
            <a 
              href="/resume.pdf" 
              className="btn btn-primary flex items-center gap-2 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;