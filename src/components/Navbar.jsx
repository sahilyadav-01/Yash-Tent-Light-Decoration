import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun, FiGlobe, FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/useAuthStore';
import { useThemeStore } from '../../store/useThemeStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { isAuthenticated, user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('yash_lang', newLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.packages'), path: '/packages' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className={`text-2xl font-serif font-bold ${scrolled || !isHome ? 'text-[#C8102E]' : 'text-white'}`}>
            Yash Tent
          </span>
          <span className={`text-xs tracking-wider ${scrolled || !isHome ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200'}`}>
            & Light Decoration
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-[#D4AF37] transition-colors ${
                scrolled || !isHome ? 'text-[#1F2937] dark:text-gray-200' : 'text-white'
              } ${location.pathname === link.path ? 'text-[#D4AF37]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4 border-l border-gray-300 pl-4 dark:border-gray-700">
            {/* Lang Toggle */}
            <button 
              onClick={changeLanguage}
              className={`text-xl hover:text-[#D4AF37] transition-colors ${scrolled || !isHome ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
              title="Toggle Language"
            >
              <FiGlobe />
            </button>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`text-xl hover:text-[#D4AF37] transition-colors ${scrolled || !isHome ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
              title="Toggle Theme"
            >
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>

            {/* Auth Button */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3 relative group">
                <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className={`text-xl hover:text-[#D4AF37] transition-colors ${scrolled || !isHome ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}>
                  <FiUser />
                </Link>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.role}</p>
                  </div>
                  <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {t('nav.dashboard')}
                  </Link>
                  <button onClick={logout} className="w-full text-left px-4 py-2 text-sm text-[#C8102E] hover:bg-red-50 dark:hover:bg-red-900/20">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className={`font-medium hover:text-[#D4AF37] transition-colors ${scrolled || !isHome ? 'text-[#1F2937] dark:text-gray-200' : 'text-white'}`}>
                {t('nav.login')}
              </Link>
            )}

            <Link
              to="/booking"
              className="bg-[#C8102E] hover:bg-red-800 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg ml-2 whitespace-nowrap"
            >
              {t('nav.book_now')}
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4 z-50 relative">
          <button onClick={toggleTheme} className={`text-xl ${scrolled || !isHome || isOpen ? 'text-[#1F2937] dark:text-white' : 'text-white'}`}>
             {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={`text-2xl ${scrolled || !isHome || isOpen ? 'text-[#1F2937] dark:text-white' : 'text-white'}`}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-6 lg:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#1F2937] dark:text-white font-medium text-2xl hover:text-[#C8102E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-16 h-px bg-gray-300 dark:bg-gray-700 my-2"></div>
            
            <button onClick={changeLanguage} className="text-[#1F2937] dark:text-gray-300 font-medium text-xl">
              {i18n.language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            </button>

            {isAuthenticated ? (
              <>
                <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} onClick={() => setIsOpen(false)} className="text-[#1F2937] dark:text-white font-medium text-xl">
                  {t('nav.dashboard')}
                </Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="text-[#C8102E] font-medium text-xl">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="text-[#1F2937] dark:text-white font-medium text-xl">
                {t('nav.login')}
              </Link>
            )}

            <Link
              to="/booking"
              className="bg-[#C8102E] text-white px-10 py-4 rounded-full font-medium text-xl mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.book_now')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
