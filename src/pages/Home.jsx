import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FaCalendarCheck, FaImages, FaRing, FaLightbulb, FaCamera } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const { t } = useTranslation();
  const highlightServices = [
    {
      title: "Wedding Decoration",
      description: "Transform your special day into a fairy tale with our premium wedding decoration services, featuring elegant florals and luxurious setups.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
      icon: <FaRing size={24} />
    },
    {
      title: "Tent & Light Setup",
      description: "Spectacular tent layouts combined with mesmerizing lighting to create the perfect ambiance for evening celebrations and receptions.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaLightbulb size={24} />
    },
    {
      title: "Stage Decoration",
      description: "Make a statement with our custom-designed stages that serve as the perfect focal point for the bride, groom, and special guests.",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaCamera size={24} />
    }
  ];

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
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-100 mb-12 font-light drop-shadow-md"
          >
            {t('hero.subtitle')}
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
      <section className="py-24 bg-[#FAFAFA] dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Premium Services" 
            subtitle="We offer a comprehensive range of decoration and event management services tailored to your specific needs, ensuring every detail is perfect."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {highlightServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                delay={index * 0.2}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-8 py-3 rounded-full font-bold transition-all shadow-sm hover:shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-[#1a0a0d] to-gray-900 text-white border-y border-red-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">15+</h3>
              <p className="text-gray-300 text-sm md:text-base font-medium">Years of Excellence</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">1,200+</h3>
              <p className="text-gray-300 text-sm md:text-base font-medium">Grand Celebrations</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">100%</h3>
              <p className="text-gray-300 text-sm md:text-base font-medium">Customer Happiness</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">50+</h3>
              <p className="text-gray-300 text-sm md:text-base font-medium">Skilled Craft Crew</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Action Banner */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Planning a Wedding or Special Celebration?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            From regal royal tents to mesmerizing LED light tunnels and bespoke stage setups, we make every moment unforgettable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-[#C8102E] hover:bg-red-800 text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Book Event Online
            </Link>
            <a
              href="https://wa.me/919680709044"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
