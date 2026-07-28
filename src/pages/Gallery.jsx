import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Wedding', 'Stage', 'Lighting', 'Tent', 'Flower'];

  const images = [
    { id: 1, category: 'Wedding', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80', alt: 'Wedding setup 1' },
    { id: 2, category: 'Stage', src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', alt: 'Stage design' },
    { id: 3, category: 'Lighting', src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1140&q=80', alt: 'Fairy lights' },
    { id: 4, category: 'Tent', src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', alt: 'Luxury Tent' },
    { id: 5, category: 'Flower', src: 'https://images.unsplash.com/photo-1523688882641-9c6e39266730?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', alt: 'Floral design' },
    { id: 6, category: 'Wedding', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Wedding setup 2' },
    { id: 7, category: 'Stage', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80', alt: 'Stage 2' },
    { id: 8, category: 'Tent', src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', alt: 'Event tent' },
    { id: 9, category: 'Flower', src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', alt: 'Table flowers' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Gallery | Yash Tent & Light Decoration</title>
        <meta name="description" content="View our portfolio of spectacular wedding decorations, tent setups, and lighting arrangements." />
      </Helmet>

      <section className="pt-32 pb-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Gallery" 
            subtitle="A glimpse into the magical moments we have created for our clients."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-[#C8102E] text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl border-b-2 border-[#D4AF37] pb-1">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#C8102E] transition-colors z-50 text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
