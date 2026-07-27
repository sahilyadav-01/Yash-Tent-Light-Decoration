import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCalendarCheck, FaImages } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yash Tent & Light Decoration | Home</title>
        <meta name="description" content="Premium Tent, Light & Wedding Decoration Services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Wedding Decoration" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-6 drop-shadow-2xl leading-tight"
          >
            Creating Memorable <span className="text-[#D4AF37]">Celebrations</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-100 mb-12 font-light drop-shadow-md"
          >
            Premium Tent, Light & Wedding Decoration Services
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              to="/booking" 
              className="bg-[#C8102E] hover:bg-red-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <FaCalendarCheck /> Book Now
            </Link>
            <Link 
              to="/gallery" 
              className="bg-white hover:bg-gray-100 text-[#1F2937] px-8 py-4 rounded-full font-medium text-lg transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <FaImages /> View Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F2937] font-bold mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-16"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             Detailed services will be implemented here. We offer a comprehensive range of decoration and event management services tailored to your specific needs.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
