import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const Packages = () => {
  const packages = [
    {
      name: "Silver Package",
      price: "₹50,000",
      description: "Perfect for intimate gatherings and small events.",
      features: [
        "Standard Tent Decoration",
        "Basic Lighting Setup",
        "Seating for 100 Guests",
        "Small Stage (8x10)",
        "Standard Floral Highlights"
      ],
      color: "border-gray-300",
      bg: "bg-gray-50",
      button: "bg-gray-800 hover:bg-gray-900"
    },
    {
      name: "Gold Package",
      price: "₹1,50,000",
      description: "Our most popular choice for standard weddings.",
      features: [
        "Premium Tent & Drapery",
        "LED Lighting & Chandeliers",
        "Seating for 300 Guests",
        "Designer Stage (12x16)",
        "Premium Floral Decoration",
        "Catering Setup",
        "Entrance Gate Decor"
      ],
      color: "border-[#D4AF37]",
      bg: "bg-white",
      button: "bg-[#D4AF37] hover:bg-yellow-600 text-white",
      recommended: true
    },
    {
      name: "Platinum Package",
      price: "Custom",
      description: "The ultimate luxury experience for grand celebrations.",
      features: [
        "Luxury AC Tents",
        "Intelligent DMX Lighting",
        "Unlimited Guest Seating",
        "Custom Mega Stage",
        "Exotic Imported Flowers",
        "Premium Catering Setup",
        "Full Event Management",
        "DJ & Sound System"
      ],
      color: "border-[#C8102E]",
      bg: "bg-red-50",
      button: "bg-[#C8102E] hover:bg-red-800 text-white"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Packages | Yash Tent & Light Decoration</title>
        <meta name="description" content="Choose from our Silver, Gold, and Platinum decoration packages." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Packages Background" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Decoration Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Transparent pricing for your dream celebration
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Choose Your Plan" 
            subtitle="We offer curated packages to suit every budget. Can't find what you need? We can customize a package just for you."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto items-center">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative rounded-2xl shadow-xl overflow-hidden border-2 ${pkg.color} ${pkg.bg} ${pkg.recommended ? 'md:-translate-y-4 md:scale-105 z-10' : 'z-0'}`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 left-0 w-full bg-[#D4AF37] text-white text-center py-1 text-sm font-bold tracking-wider">
                    RECOMMENDED
                  </div>
                )}
                
                <div className={`p-8 ${pkg.recommended ? 'pt-12' : ''} text-center border-b border-gray-200 bg-white`}>
                  <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 mb-6 h-10">{pkg.description}</p>
                  <div className="text-4xl font-bold text-[#1F2937]">
                    {pkg.price}
                    {pkg.price !== 'Custom' && <span className="text-lg text-gray-500 font-normal"> /start</span>}
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <FaCheckCircle className={`mt-1 shrink-0 ${pkg.recommended ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/booking" 
                    className={`block w-full text-center py-4 rounded-full font-bold transition-all shadow-md ${pkg.button} hover:-translate-y-1`}
                  >
                    Book This Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-serif font-bold text-[#1F2937] mb-4">Need Something Else?</h4>
            <p className="text-gray-600 mb-6">Contact us to create a fully customized package tailored specifically to your event's unique requirements.</p>
            <Link to="/contact" className="text-[#C8102E] font-medium hover:underline inline-flex items-center gap-2">
              Contact Us for Custom Quote &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
