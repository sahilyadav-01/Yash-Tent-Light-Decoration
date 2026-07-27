import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import { FaUserTie, FaMoneyBillWave, FaCrown, FaClock, FaTools, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FaUserTie size={40} />, title: "Experienced Team", desc: "Our professionals have years of experience in managing high-profile events." },
    { icon: <FaMoneyBillWave size={40} />, title: "Affordable Price", desc: "We offer competitive pricing without compromising on quality or elegance." },
    { icon: <FaCrown size={40} />, title: "Premium Decoration", desc: "Exclusive access to luxury props, imported flowers, and high-end materials." },
    { icon: <FaClock size={40} />, title: "Timely Service", desc: "Punctuality is our priority. We always deliver setups well before time." },
    { icon: <FaTools size={40} />, title: "Modern Equipment", desc: "Using the latest lighting, sound systems, and durable tent structures." },
    { icon: <FaHeadset size={40} />, title: "24×7 Support", desc: "Dedicated event managers available round the clock for your peace of mind." },
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us | Yash Tent & Light Decoration</title>
        <meta name="description" content="Discover why we are the top choice for tent and light decoration services." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-[#1F2937] text-white relative">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Why Choose Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Setting the standard for luxury events
          </motion.p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Commitment to Excellence" 
            subtitle="We don't just decorate venues; we craft experiences. Here is why hundreds of clients trust us with their most important days."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-[#C8102E] mb-6 group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-300 shadow-inner">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
