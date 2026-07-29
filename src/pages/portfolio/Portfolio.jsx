import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import SectionHeading from '../../components/SectionHeading';

const portfolioProjects = [
  {
    id: 1,
    title: 'The Royal Jaipur Wedding',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'Dec 2025',
    location: 'Taj Jai Mahal Palace',
    guests: '1200+',
    budget: 'Premium',
    description: 'A complete royal setup featuring an air-conditioned glass tent, exotic floral mandap, and intelligent DMX lighting across the palace grounds.'
  },
  {
    id: 2,
    title: 'Tech Summit 2026',
    category: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1505369711681-30db00438676?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'Jan 2026',
    location: 'Exhibition Center',
    guests: '3000+',
    budget: 'Platinum',
    description: 'Large scale corporate event setup with custom LED walls, line array sound systems, and premium seating arrangements.'
  },
  {
    id: 3,
    title: 'Silver Jubilee Anniversary',
    category: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1530103862676-de88921806a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'Feb 2026',
    location: 'Private Farmhouse',
    guests: '200+',
    budget: 'Gold',
    description: 'Elegant vintage theme decoration with fairy lights canopy, rustic wooden props, and a custom floral entrance.'
  }
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Yash Tent & Light Decoration</title>
      </Helmet>
      
      <div className="pt-32 pb-20 bg-[#FAFAFA] dark:bg-gray-900 min-h-screen transition-colors">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Take a deep dive into some of our most spectacular and memorable event setups."
          />
          
          <div className="mt-12 space-y-16">
            {portfolioProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700`}
              >
                <div className="lg:w-1/2 h-64 lg:h-96 w-full relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {project.category}
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 text-[#C8102E] rounded-full flex items-center justify-center">
                        <FaCalendarAlt />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</p>
                        <p className="font-bold text-gray-900 dark:text-white">{project.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 text-[#C8102E] rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</p>
                        <p className="font-bold text-gray-900 dark:text-white">{project.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 text-[#C8102E] rounded-full flex items-center justify-center">
                        <FaUsers />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Guests</p>
                        <p className="font-bold text-gray-900 dark:text-white">{project.guests}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
