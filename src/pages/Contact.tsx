import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Get in Touch"
            subtitle="Let's discuss your project or just say hello"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
            <div className="lg:col-span-2">
              <div className="card h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out if you have any questions about my work, 
                  are interested in working together, or just want to connect.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-primary/20 rounded-lg mr-4">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-gray-400">Bandung, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-primary/20 rounded-lg mr-4">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a 
                        href="mailto:contact@ekizulfar.com" 
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        contact@ekizulfar.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-primary/20 rounded-lg mr-4">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-400">Available upon request</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/HersiKopani" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-background-light hover:bg-primary/20 text-gray-300 hover:text-primary rounded-lg transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/hersi-kopani/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-background-light hover:bg-primary/20 text-gray-300 hover:text-primary rounded-lg transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium mb-4">Availability</h4>
                  <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                    <p className="text-success flex items-center">
                      <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
                      Available for freelance projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-background-dark/50">
        <div className="container-custom">
          <div className="rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56211042157!2d107.54313908859444!3d-6.903475341602078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1712151485584!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bandung, Indonesia Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;