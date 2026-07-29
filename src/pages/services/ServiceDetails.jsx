import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaRupeeSign } from 'react-icons/fa';

const MOCK_SERVICES = {
  'wedding-decoration': {
    title: 'Premium Wedding Decoration',
    price: 'Starting at ₹50,000',
    description: 'Turn your wedding into an unforgettable fairy tale. We craft complete wedding setups including elegant Mandap, grand Stage, stunning Entrance arch, and luxurious guest seating — all tailored to your chosen theme.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Custom Floral Mandap', 'Designer Stage Setup', 'Premium Lighting', 'Luxury Seating Arrangements', 'Entrance & Pathway Decoration', 'Bridal Car Decoration']
  },
  'tent-house': {
    title: 'Tent House Setup',
    price: 'Starting at ₹20,000',
    description: 'Premium waterproof and air-conditioned tents available in a wide range of sizes and colors — from intimate gatherings to large-scale weddings and corporate events, for every season and weather.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Waterproof & AC Tents', 'Multiple Size Options', 'Fast Installation', 'Sidewall & Flooring Included', 'Day & Night Events Covered', 'All-Season Ready']
  },
  'light-decoration': {
    title: 'Light Decoration',
    price: 'Starting at ₹15,000',
    description: 'Create an atmosphere of pure magic with our mesmerizing lighting setups. From warm fairy lights to grand chandeliers, vibrant LED strips, and custom projection mapping — we illuminate every corner beautifully.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['LED Strip & Fairy Lights', 'Hanging Chandeliers', 'Colored Spotlights', 'Projection Mapping', 'Outdoor & Indoor Setups', 'Energy Efficient Fittings']
  },
  'stage-decoration': {
    title: 'Stage Decoration',
    price: 'Starting at ₹25,000',
    description: 'Our designer stages become the heart of your event. With breathtaking floral backgrounds, artistic props, and specialized lighting, we build stages that command attention and make every moment picture-perfect.',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Floral Backdrop Design', 'Custom Theme Props', 'Sofa & Throne Seating', 'Professional Spotlight Rigging', 'Nameplate & Monogram', 'Photo-Ready Setup']
  },
  'flower-decoration': {
    title: 'Flower Decoration',
    price: 'Starting at ₹12,000',
    description: 'Add natural elegance and fragrance to your celebration. We source the freshest imported and exotic flowers to craft stunning arrangements for table centrepieces, pathway garlands, mandap, and backdrops.',
    image: 'https://images.unsplash.com/photo-1523688882641-9c6e39266730?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Imported Flower Varieties', 'Table Centerpieces', 'Garland Pathways', 'Stage Floral Backdrop', 'Bridal Bouquet', 'Car & Carriage Florals']
  },
  'birthday-parties': {
    title: 'Birthday & Parties',
    price: 'Starting at ₹8,000',
    description: 'Make every birthday unforgettable! From kids\' themed wonderlands to elegant adult celebrations, we design vibrant and personalized party setups with balloon arches, photo booths, and thematic décor.',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Themed Decorations', 'Giant Balloon Arches', 'Photo Booth Setup', 'Birthday Banner & Backdrop', 'Cake Table Decor', 'Kids & Adults Themes']
  },
  'dj-sound-system': {
    title: 'DJ & Sound System',
    price: 'Starting at ₹18,000',
    description: 'Fill your venue with crystal-clear sound and electrifying beats. We provide professional line-array speakers, powerful subwoofers, experienced DJs, and full live music arrangements to keep your guests dancing.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Line Array Speaker System', 'Professional DJ Setup', 'Wireless Microphones', 'Live Band Arrangements', 'LED Dance Floor', 'Fog & Haze Machine']
  },
  'catering-setup': {
    title: 'Catering Setup',
    price: 'Starting at ₹30,000',
    description: 'Complement your beautiful décor with an equally stunning dining experience. We set up elegant buffet counters, royal dining tables, premium cutlery, and live food stations that leave a lasting impression on every guest.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Buffet Counter Design', 'Royal Dining Table Setup', 'Premium Cutlery & Crockery', 'Live Food Stations', 'Beverage Counter', 'Staff & Service Management']
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = MOCK_SERVICES[id];

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-[#C8102E] mb-4">Service Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="bg-[#C8102E] text-white px-8 py-3 rounded-full font-medium hover:bg-red-800 transition-colors">Back to Services</Link>
      </div>
    );
  }

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
