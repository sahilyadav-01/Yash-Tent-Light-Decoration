import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaRupeeSign } from 'react-icons/fa';

const MOCK_SERVICES = {
  'wedding-decoration': {
    title: 'Premium Wedding Decoration',
    price: 'Starting at ₹50,000',
    description: 'Complete wedding setup including Mandap, Stage, Entrance, and Guest seating with floral themes.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Custom Floral Mandap', 'Designer Stage Setup', 'Premium Lighting', 'Luxury Seating Arrangements']
  },
  'corporate-events': {
    title: 'Corporate Event Setup',
    price: 'Starting at ₹75,000',
    description: 'Professional setup for conferences, product launches, and annual galas.',
    image: 'https://images.unsplash.com/photo-1505369711681-30db00438676?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['LED Wall Setup', 'Line Array Sound', 'Corporate Branding', 'Stage & Trussing']
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = MOCK_SERVICES[id] || MOCK_SERVICES['wedding-decoration'];

  return (
    <>
      <Helmet>
        <title>{service.title} | Yash Tent & Light Decoration</title>
      </Helmet>
      
      <div className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="h-64 md:h-96 w-full relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{service.title}</h1>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What's Included</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <FaCheckCircle className="text-green-500 text-xl" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-600 sticky top-24">
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Estimated Pricing</p>
                  <div className="flex items-center text-2xl font-bold text-[#C8102E] dark:text-[#D4AF37] mb-6">
                    {service.price}
                  </div>
                  
                  <Link 
                    to="/booking"
                    className="block w-full bg-[#C8102E] text-white text-center py-4 rounded-xl font-bold hover:bg-red-800 transition-colors shadow-lg"
                  >
                    Book This Service
                  </Link>
                  <Link 
                    to="/calculator"
                    className="block w-full bg-white dark:bg-gray-800 text-[#C8102E] border border-[#C8102E] text-center py-4 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 mt-4 transition-colors"
                  >
                    Calculate Exact Price
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
