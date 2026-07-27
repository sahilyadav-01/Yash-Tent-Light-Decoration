import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className={`text-2xl font-serif font-bold ${scrolled || !isHome ? 'text-[#C8102E]' : 'text-white'}`}>
            Yash Tent
          </span>
          <span className={`text-xs tracking-wider ${scrolled || !isHome ? 'text-gray-600' : 'text-gray-200'}`}>
            & Light Decoration
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium hover:text-[#D4AF37] transition-colors ${
                scrolled || !isHome ? 'text-[#1F2937]' : 'text-white'
              } ${location.pathname === link.path ? 'text-[#D4AF37]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-[#C8102E] hover:bg-red-800 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="text-[#1F2937]" />
          ) : (
            <FiMenu className={scrolled || !isHome ? 'text-[#1F2937]' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[#1F2937] font-medium text-2xl hover:text-[#C8102E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-[#C8102E] text-white px-10 py-4 rounded-full font-medium text-xl mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
