import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark/80 backdrop-blur-md border-t border-gray-800 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="text-white font-bold text-2xl inline-block mb-4">
              <span className="text-primary">Hersi</span>K<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital experiences with clean, 
              efficient code and beautiful designs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/HersiKopani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/hersi-kopani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hersi.kopani@gmail.com" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-primary transition-colors">Blogs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Tirana, Albania
              </li>
              <li>
                <a 
                  href="mailto:hersi.kopani@gmail.com" 
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} /> hersi.kopani@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://hersikopani.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={16} /> hersikopani.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Hersi K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;