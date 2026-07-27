import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCalendarCheck, FaImages, FaRing, FaLightbulb, FaCamera } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
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
      <section className="py-24 bg-[#FAFAFA]">
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
              className="inline-block border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
