import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { FaCalculator, FaRupeeSign } from 'react-icons/fa';

const Calculator = () => {
  const [estimate, setEstimate] = useState(0);
  
  const [selections, setSelections] = useState({
    guests: '100',
    tent: 'standard',
    lighting: 'basic',
    flowers: 'standard',
    stage: 'none',
    catering: 'no',
    dj: 'no'
  });

  const pricingList = {
    guests: { '100': 1, '300': 1.5, '500': 2, '1000': 3 }, // Multiplier based on guests
    tent: { standard: 15000, premium: 35000, luxury: 80000 },
    lighting: { basic: 5000, premium: 15000, intelligent: 40000 },
    flowers: { none: 0, standard: 8000, exotic: 25000 },
    stage: { none: 0, small: 10000, large: 25000, mega: 50000 },
    catering: { no: 0, yes: 800 }, // Per guest
    dj: { no: 0, standard: 15000, premium: 35000 }
  };

  useEffect(() => {
    let total = 0;
    const guestMultiplier = pricingList.guests[selections.guests];
    
    total += pricingList.tent[selections.tent] * guestMultiplier;
    total += pricingList.lighting[selections.lighting] * guestMultiplier;
    total += pricingList.flowers[selections.flowers] * guestMultiplier;
    total += pricingList.stage[selections.stage];
    total += pricingList.dj[selections.dj];
    
    if (selections.catering === 'yes') {
      total += pricingList.catering.yes * parseInt(selections.guests);
    }
    
    setEstimate(total);
  }, [selections]);

  const handleChange = (e) => {
    setSelections({
      ...selections,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Pricing Calculator | Yash Tent & Light Decoration</title>
        <meta name="description" content="Calculate the estimated cost of your event decoration instantly." />
      </Helmet>

      <section className="pt-32 pb-20 bg-[#FAFAFA] dark:bg-gray-900 min-h-screen transition-colors">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Interactive Pricing Calculator" 
            subtitle="Get an instant estimate for your event by selecting your requirements below."
          />

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-12">
            
            {/* Calculator Form */}
            <div className="lg:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4 flex items-center gap-2">
                <FaCalculator className="text-[#C8102E]" /> Select Requirements
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Number of Guests</label>
                  <select name="guests" value={selections.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#C8102E] bg-gray-50 dark:bg-gray-700 dark:text-white outline-none">
                    <option value="100">Up to 100 Guests</option>
                    <option value="300">100 - 300 Guests</option>
                    <option value="500">300 - 500 Guests</option>
                    <option value="1000">500 - 1000 Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tent Setup</label>
                  <select name="tent" value={selections.tent} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#C8102E] bg-gray-50 dark:bg-gray-700 dark:text-white outline-none">
                    <option value="standard">Standard Waterproof Tent</option>
                    <option value="premium">Premium Drapery & Decor Tent</option>
                    <option value="luxury">Luxury AC Glass/German Tent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Lighting Setup</label>
                  <select name="lighting" value={selections.lighting} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#C8102E] bg-gray-50 dark:bg-gray-700 dark:text-white outline-none">
                    <option value="basic">Basic Halogen & LED</option>
                    <option value="premium">Premium Chandeliers & Fairy Lights</option>
                    <option value="intelligent">Intelligent DMX & Laser Show</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Stage Decoration</label>
                  <select name="stage" value={selections.stage} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#C8102E] bg-gray-50 dark:bg-gray-700 dark:text-white outline-none">
                    <option value="none">No Stage Required</option>
                    <option value="small">Small Standard Stage</option>
                    <option value="large">Large Designer Stage</option>
                    <option value="mega">Mega Setup with Props</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Floral Arrangements</label>
                  <select name="flowers" value={selections.flowers} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#C8102E] bg-gray-50 dark:bg-gray-700 dark:text-white outline-none">
                    <option value="none">None</option>
                    <option value="standard">Standard Local Flowers</option>
                    <option value="exotic">Exotic Imported Flowers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">DJ & Sound</label>
                  <select name="dj" value={selections.dj} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#C8102E] bg-gray-50 dark:bg-gray-700 dark:text-white outline-none">
                    <option value="no">Not Required</option>
                    <option value="standard">Standard DJ Setup</option>
                    <option value="premium">Premium Line Array & Truss</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Include Catering Setup?</label>
                  <select name="catering" value={selections.catering} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#C8102E] bg-gray-50 dark:bg-gray-700 dark:text-white outline-none">
                    <option value="no">No, only decoration</option>
                    <option value="yes">Yes, include premium catering (Per Plate calculation)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:w-1/3">
              <motion.div 
                className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl sticky top-24"
                key={estimate}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-medium text-gray-400 mb-2 uppercase tracking-wider">Estimated Cost</h3>
                <div className="flex items-center text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                  <FaRupeeSign className="text-3xl" />
                  <span>{estimate.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="space-y-3 mb-8 text-sm text-gray-300 border-t border-gray-700 pt-6">
                  <p className="flex justify-between"><span>Base Multiplier:</span> <span>{selections.guests} Guests</span></p>
                  <p className="flex justify-between"><span>Catering:</span> <span>{selections.catering === 'yes' ? 'Included' : 'Excluded'}</span></p>
                  <p className="flex justify-between"><span>GST (18%):</span> <span>₹{(estimate * 0.18).toLocaleString('en-IN')}</span></p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg text-xs text-gray-400 mb-8 border border-gray-700">
                  <p><strong>Note:</strong> This is an approximate estimate. Final pricing may vary based on exact location, date availability, and specific material selections.</p>
                </div>

                <Link to="/booking" className="block w-full text-center bg-[#C8102E] hover:bg-red-800 text-white py-4 rounded-lg font-bold transition-colors shadow-lg">
                  Proceed to Book
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
