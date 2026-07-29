import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-[#C8102E]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Yash Tent & Light Decoration</h3>
            <p className="mb-6 text-sm leading-relaxed">
              Making Every Celebration Grand. We provide premium tent, light, and wedding decoration services with a touch of elegance and tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C8102E] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C8102E] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C8102E] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#D4AF37]"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Gallery</Link></li>
              <li><Link to="/packages" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Packages</Link></li>
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif text-white mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#D4AF37]"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Wedding Decoration</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Tent & Light Setup</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Stage Decoration</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Flower Decoration</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Event Management</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif text-white mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#D4AF37]"></span>
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C8102E] mt-1 shrink-0" />
                <span className="text-sm">123 Celebration Avenue, City Name, State 123456</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaPhoneAlt className="text-[#D4AF37] mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm">Sumit (kuku) Yadav: +91 9680709044</span>
                  <span className="text-sm">Surendar kumar: +91 9818222764</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#C8102E] shrink-0" />
                <span className="text-sm">info@yashtent.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Yash Tent & Light Decoration. All Rights Reserved.</p>
          <p>Designed for Elegance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
