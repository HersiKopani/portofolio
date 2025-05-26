import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Hersi K.';
    
    return () => {
      document.title = 'Hersi K. - Portfolio';
    };
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom text-center">
        <div className="relative mx-auto w-40 h-40 mb-8">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"></div>
          <div className="relative bg-background-dark border-4 border-primary rounded-full w-full h-full flex items-center justify-center">
            <p className="text-6xl font-bold">404</p>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            to="/"
            variant="primary"
            icon={<Home size={18} />}
          >
            Back to Home
          </Button>
          <Button
            to="/contact"
            variant="outline"
            icon={<ArrowRight size={18} />}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;