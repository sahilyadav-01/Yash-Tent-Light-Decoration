import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ title, description, image, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full text-[#C8102E] shadow-xl transform group-hover:-translate-y-2 transition-transform">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-serif text-[#1F2937] font-bold mb-3 group-hover:text-[#C8102E] transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-[#C8102E] font-medium hover:text-red-800 transition-colors group-hover:gap-3"
        >
          Read More <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
