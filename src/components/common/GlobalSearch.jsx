import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_DATA = [
  { id: 1, title: 'Wedding Decoration', type: 'Service', path: '/services' },
  { id: 2, title: 'Corporate Events', type: 'Service', path: '/services' },
  { id: 3, title: 'Silver Package', type: 'Package', path: '/packages' },
  { id: 4, title: 'Gold Package', type: 'Package', path: '/packages' },
  { id: 5, title: 'Platinum Package', type: 'Package', path: '/packages' },
  { id: 6, title: 'How to book?', type: 'FAQ', path: '/faq' },
  { id: 7, title: 'Refund Policy', type: 'FAQ', path: '/faq' },
  { id: 8, title: 'Gallery of Weddings', type: 'Gallery', path: '/gallery' },
];

const GlobalSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = MOCK_DATA.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden relative z-10"
          >
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <FiSearch className="text-gray-400 text-xl ml-2" />
              <input 
                ref={inputRef}
                type="text"
                placeholder="Search services, packages, FAQs..."
                className="w-full px-4 py-2 bg-transparent text-gray-900 dark:text-white outline-none text-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <FiX className="text-xl" />
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {query.trim().length > 1 ? (
                results.length > 0 ? (
                  <ul className="py-2">
                    {results.map(item => (
                      <li key={item.id}>
                        <button 
                          onClick={() => handleSelect(item.path)}
                          className="w-full flex items-center justify-between px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                        >
                          <span className="text-gray-900 dark:text-white font-medium">{item.title}</span>
                          <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full">
                            {item.type}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    No results found for "{query}"
                  </div>
                )
              ) : (
                <div className="p-8 text-center text-gray-400 dark:text-gray-500 text-sm">
                  Type at least 2 characters to search
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GlobalSearch;
