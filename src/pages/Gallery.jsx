import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import SectionHeading from '../components/SectionHeading';

const categories = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Lighting'];

const galleryItems = [
  { id: 1, category: 'Weddings', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Royal Wedding Setup' },
  { id: 2, category: 'Lighting', src: 'https://images.unsplash.com/photo-1549488344-c6a6fcd8b88d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Fairy Lights Pathway' },
  { id: 3, category: 'Corporate', src: 'https://images.unsplash.com/photo-1505369711681-30db00438676?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Annual Gala Stage' },
  { id: 4, category: 'Weddings', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Floral Mandap' },
  { id: 5, category: 'Birthdays', src: 'https://images.unsplash.com/photo-1530103862676-de88921806a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Kids Birthday Theme' },
  { id: 6, category: 'Lighting', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Event Production Lights' },
  { id: 7, category: 'Weddings', src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Reception Entry' },
  { id: 8, category: 'Corporate', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Product Launch Setup' },
  { id: 9, category: 'Birthdays', src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Balloon Arch Decor' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      <Helmet>
        <title>Our Gallery | Yash Tent & Light Decoration</title>
        <meta name="description" content="Explore our beautiful event setups, weddings, corporate events, and lighting designs." />
      </Helmet>

      <section className="pt-32 pb-20 bg-[#FAFAFA] dark:bg-gray-900 transition-colors min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Recent Work" 
            subtitle="Browse through our portfolio of beautifully executed events and discover what we can do for you."
          />

          {/* Before / After Section */}
          <div className="max-w-4xl mx-auto mt-12 mb-20 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-center mb-6 dark:text-white">Before & After Magic</h3>
            <div className="rounded-xl overflow-hidden shadow-inner h-[400px]">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Before" className="grayscale opacity-60 object-cover w-full h-full" />}
                itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="After" className="object-cover w-full h-full" />}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(6);
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#C8102E] text-white shadow-md transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
            <AnimatePresence>
              {displayedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800"
                >
                  <Zoom>
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-auto object-cover"
                    />
                  </Zoom>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <span className="text-[#D4AF37] text-sm font-medium">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="bg-transparent border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                Load More Images
              </button>
            </div>
          )}
          
          {filteredItems.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
