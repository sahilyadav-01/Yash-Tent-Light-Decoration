import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { FaRing, FaLightbulb, FaCamera, FaBirthdayCake, FaMusic, FaUtensils, FaChair, FaSpa } from 'react-icons/fa';

const Services = () => {
  const allServices = [
    {
      title: "Wedding Decoration",
      description: "Complete wedding setups including mandap, entrance, and seating arrangements with luxurious themes.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
      icon: <FaRing size={24} />
    },
    {
      title: "Tent House",
      description: "Premium waterproof and AC tents available in various sizes and colors for all weather conditions.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaChair size={24} />
    },
    {
      title: "Light Decoration",
      description: "Mesmerizing LED setups, chandeliers, fairy lights, and custom projection mapping for your venue.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1140&q=80",
      icon: <FaLightbulb size={24} />
    },
    {
      title: "Stage Decoration",
      description: "Designer stages with floral backgrounds, props, and specialized lighting focusing on the couple.",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaCamera size={24} />
    },
    {
      title: "Flower Decoration",
      description: "Imported and exotic floral arrangements for tables, pathways, mandaps, and stage backgrounds.",
      image: "https://images.unsplash.com/photo-1523688882641-9c6e39266730?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaSpa size={24} />
    },
    {
      title: "Birthday & Parties",
      description: "Themed birthday decorations, balloon arches, and party setups for kids and adults.",
      image: "https://images.unsplash.com/photo-1530105805126-73595d288d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaBirthdayCake size={24} />
    },
    {
      title: "DJ & Sound System",
      description: "High-quality line array sound systems, DJ setups, and live music arrangements.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaMusic size={24} />
    },
    {
      title: "Catering Setup",
      description: "Elegant buffet counters, dining arrangements, and premium cutlery setups.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      icon: <FaUtensils size={24} />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Yash Tent & Light Decoration</title>
        <meta name="description" content="Explore our wide range of event decoration and management services." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-[#1F2937] text-white relative">
        <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Services Background" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need for a spectacular celebration
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What We Offer" 
            subtitle="From intimate gatherings to grand celebrations, we provide complete end-to-end event solutions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {allServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
