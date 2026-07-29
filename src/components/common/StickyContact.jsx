import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaComments } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2"
          >
            <a href="https://wa.me/919680709044" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white dark:bg-gray-800 p-2 pr-4 rounded-full shadow-lg group hover:bg-[#25D366] transition-colors">
              <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center">
                <FaWhatsapp size={20} />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-white whitespace-nowrap">Chat on WhatsApp</span>
            </a>
            
            <a href="tel:+919680709044" className="flex items-center gap-3 bg-white dark:bg-gray-800 p-2 pr-4 rounded-full shadow-lg group hover:bg-[#1F2937] transition-colors">
              <div className="w-10 h-10 bg-[#1F2937] text-white rounded-full flex items-center justify-center">
                <FaPhone size={18} />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-white whitespace-nowrap">Call Us Now</span>
            </a>
            
            <a href="https://maps.google.com/?q=Lucknow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white dark:bg-gray-800 p-2 pr-4 rounded-full shadow-lg group hover:bg-[#C8102E] transition-colors">
              <div className="w-10 h-10 bg-[#C8102E] text-white rounded-full flex items-center justify-center">
                <FaMapMarkerAlt size={18} />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-white whitespace-nowrap">Get Directions</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#C8102E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <FaComments size={24} />
      </button>
    </div>
  );
};

export default StickyContact;
