
import { Facebook, Instagram, Twitter, Linkedin, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-khodiyar-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-khodiyar-light-blue" />
              <span className="ml-2 text-xl font-bold font-heading">AAI Shree Khodiyar</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing premium car rental services with comfort, safety, and reliability for all your transportation needs.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-khodiyar-light-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-khodiyar-light-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-khodiyar-light-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-khodiyar-light-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Home</a></li>
              <li><a href="#fleet" className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Airport Transfers</li>
              <li className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Corporate Travel</li>
              <li className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Outstation Travel</li>
              <li className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Wedding & Events</li>
              <li className="text-gray-300 hover:text-khodiyar-light-blue transition-colors">Hourly Rentals</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and promotional offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-3 py-2 bg-white/10 rounded-l-md flex-1 text-white focus:outline-none" 
              />
              <button type="submit" className="bg-khodiyar-light-blue px-4 py-2 rounded-r-md hover:bg-khodiyar-gold transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; 2025 AAI Shree Khodiyar Car Rental Service. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 text-sm hover:text-khodiyar-light-blue">Privacy Policy</a>
            <a href="#" className="text-gray-300 text-sm hover:text-khodiyar-light-blue">Terms of Service</a>
            <a href="#" className="text-gray-300 text-sm hover:text-khodiyar-light-blue">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
