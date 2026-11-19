import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-[#C8102E]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImg} 
                alt="Yash Tent & Decoration Logo" 
                className="h-12 w-auto object-contain bg-white/10 p-1 rounded-lg" 
              />
              <h3 className="text-xl font-serif text-white font-bold leading-tight">
                Yash Tent &amp; Light Decoration
              </h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Making Every Celebration Grand. We provide premium tent, light, and wedding decoration services with a touch of elegance and tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C8102E] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C8102E] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://wa.me/919680709044" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
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
              <li><Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="text-xs">▸</span> Terms of Service</Link></li>
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
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-[#C8102E] mt-1 shrink-0" />
                <span className="text-sm">Near S'K One Tech Support, Palawa, Rajasthan 301706</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaPhoneAlt className="text-[#D4AF37] mt-1 shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a 
                    href="https://wa.me/919680709044" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm hover:text-[#25D366] transition-colors"
                  >
                    Sumit (kuku) Yadav: +91 9680709044 (WhatsApp)
                  </a>
                  <a 
                    href="tel:+919818222764" 
                    className="text-sm hover:text-white transition-colors"
                  >
                    Surendar kumar: +91 9818222764
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#C8102E] shrink-0" />
                <a 
                  href="mailto:raosumityadav420@gmail.com" 
                  className="text-sm hover:text-white transition-colors break-all"
                >
                  raosumityadav420@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Yash Tent & Light Decoration. All Rights Reserved.
              <span className="hidden md:inline text-gray-600 mx-2">&bull;</span>
              <span className="block md:inline text-xs md:text-sm text-gray-400 mt-1 md:mt-0 font-medium">
                Copyright &copy; {new Date().getFullYear()} Sahil Yadav
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">&bull;</span>
            <Link to="/terms-of-service" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
