import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import { FaAward, FaUsers, FaThumbsUp, FaRegMoneyBillAlt } from 'react-icons/fa';

const About = () => {
  const features = [
    { icon: <FaAward size={30} />, title: "1+ Years Experience", desc: "Delivering excellence in event management since 2025." },
    { icon: <FaUsers size={30} />, title: "Professional Team", desc: "Highly skilled decorators and event planners at your service." },
    { icon: <FaRegMoneyBillAlt size={30} />, title: "Affordable Packages", desc: "Premium decorations that fit within your budget constraints." },
    { icon: <FaThumbsUp size={30} />, title: "100% Satisfaction", desc: "We ensure every detail meets your highest expectations." }
  ];

  const timeline = [
    { year: "2008", title: "The Beginning", desc: "Yash Tent & Light Decoration was founded with a small inventory but big dreams." },
    { year: "2012", title: "Expanding Horizons", desc: "Introduced premium wedding decoration and complete event management services." },
    { year: "2016", title: "Award Winning", desc: "Recognized as the best local event decorator by the City Business Association." },
    { year: "2023", title: "Modernization", desc: "Upgraded our entire inventory with the latest luxury tents and LED lighting systems." },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Yash Tent & Light Decoration</title>
        <meta name="description" content="Learn more about our journey and why we are the most trusted event partner." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80" 
              alt="About Background" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Your Trusted Event Partner for over a decade
          </motion.p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Our Team at Work" 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2937] mb-6">
                Making Every Celebration <span className="text-[#C8102E]">Grand</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Welcome to Yash Tent & Light Decoration. We specialize in transforming ordinary spaces into magical settings. With our rich Indian traditional touch blended with modern luxury, we ensure your special moments are nothing short of spectacular.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From grand weddings to intimate gatherings, our dedicated team works tirelessly to bring your vision to life with premium tents, exquisite floral arrangements, and mesmerizing lighting.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-[#D4AF37] mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#1F2937] mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Journey" subtitle="The story of how we became the city's leading event decorators." />
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative flex items-center justify-between mb-12 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12"></div>
                <div className="z-10 bg-[#C8102E] w-12 h-12 rounded-full border-4 border-white shadow flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div className={`w-5/12 bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#D4AF37] ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">{item.year} - {item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
