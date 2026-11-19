import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import SectionHeading from '../components/SectionHeading';
import { useGalleryStore } from '../store/useGalleryStore';
import { FaPlay, FaVideo, FaImage, FaTimes } from 'react-icons/fa';

const categories = ['All', 'Photos', 'Videos', 'Weddings', 'Lighting', 'Corporate', 'Birthdays'];

const Gallery = () => {
  const { items } = useGalleryStore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredItems = items.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Photos') return item.type === 'image';
    if (activeCategory === 'Videos') return item.type === 'video';
    return item.category === activeCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <Helmet>
        <title>Our Gallery & Videos | Yash Tent & Light Decoration</title>
        <meta
          name="description"
          content="Explore our beautiful event setups, weddings, corporate events, lighting designs, and live video tours."
        />
        <link rel="canonical" href="https://yash-tent-light-decoration.vercel.app/gallery" />
      </Helmet>

      <section className="pt-32 pb-20 bg-[#FAFAFA] dark:bg-gray-900 transition-colors min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Recent Work & Video Tours"
            subtitle="Browse through our photo gallery and live setup videos to experience our craftsmanship."
          />

          {/* Before / After Section */}
          <div className="max-w-4xl mx-auto mt-12 mb-20 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-center mb-6 dark:text-white">Before & After Transformation</h3>
            <div className="rounded-xl overflow-hidden shadow-inner h-[380px] md:h-[420px]">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Before Event Setup"
                    className="object-cover w-full h-full"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="After Royal Decoration"
                    className="object-cover w-full h-full"
                  />
                }
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(9);
                }}
                className={`px-5 py-2 rounded-full font-medium transition-all text-sm md:text-base flex items-center gap-2 ${
                  activeCategory === category
                    ? 'bg-[#C8102E] text-white shadow-md transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category === 'Videos' && <FaVideo size={13} />}
                {category === 'Photos' && <FaImage size={13} />}
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <AnimatePresence>
              {displayedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 flex flex-col"
                >
                  {/* Media Content */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                    {item.type === 'video' ? (
                      <div
                        onClick={() => setActiveVideo(item)}
                        className="cursor-pointer w-full h-full relative group/video"
                      >
                        <img
                          src={item.thumbnail || item.src}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-105 opacity-90"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/20 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-xl transform group-hover/video:scale-110 transition-transform">
                            <FaPlay size={22} className="ml-1" />
                          </div>
                        </div>
                        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow">
                          <FaVideo size={10} /> VIDEO
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-full relative">
                        <Zoom>
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Zoom>
                        <span className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow">
                          <FaImage size={10} /> PHOTO
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Caption & Category */}
                  <div className="p-4 bg-white dark:bg-gray-800 flex justify-between items-center border-t border-gray-100 dark:border-gray-700">
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-bold text-base leading-snug">{item.title}</h4>
                      <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                    </div>
                    {item.type === 'video' && (
                      <button
                        onClick={() => setActiveVideo(item)}
                        className="text-xs font-bold text-[#C8102E] dark:text-red-400 hover:underline flex items-center gap-1"
                      >
                        Watch Video &rarr;
                      </button>
                    )}
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
                className="bg-transparent border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white px-8 py-3 rounded-full font-bold transition-colors shadow-sm"
              >
                Load More Media ({filteredItems.length - visibleCount} remaining)
              </button>
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center text-gray-500 py-16">
              <p className="text-lg">No media found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800 text-white">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FaVideo className="text-[#C8102E]" /> {activeVideo.title}
                </h3>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                {activeVideo.src.includes('embed') || activeVideo.src.includes('youtube') || activeVideo.src.includes('vimeo') ? (
                  <iframe
                    src={activeVideo.src.includes('embed') ? activeVideo.src : `https://www.youtube.com/embed/${activeVideo.src.split('v=')[1]}`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <video src={activeVideo.src} controls autoPlay className="w-full h-full object-contain">
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
