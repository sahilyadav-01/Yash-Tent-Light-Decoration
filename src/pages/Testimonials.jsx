import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SectionHeading from '../components/SectionHeading';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul & Sneha",
      location: "City Banquet Hall",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Yash Tent & Light Decoration made our wedding day absolutely magical. The stage decoration was exactly how we envisioned it, and the lighting created the perfect mood. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Sharma",
      location: "Residency Gardens",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      text: "We booked the Gold Package for my sister's reception. The team was highly professional, timely, and the floral arrangements were exquisite. Excellent value for money.",
      rating: 5
    },
    {
      name: "Priya Patel",
      location: "Private Farmhouse",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I wanted a specific aesthetic for my birthday party, and they delivered beyond my expectations. The fairy lights and drapery were stunning. Thank you for making it special.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      location: "Grand Hotel",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Their event management is top-notch. We didn't have to worry about a single thing. From catering setup to the DJ, everything was handled flawlessly.",
      rating: 4
    }
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials | Yash Tent & Light Decoration</title>
        <meta name="description" content="Read what our happy clients have to say about our decoration and event services." />
      </Helmet>

      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Success Stories" 
            subtitle="Don't just take our word for it. Here's what our wonderful clients have experienced."
          />

          <div className="max-w-5xl mx-auto mt-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 }
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="pb-16"
            >
              {testimonials.map((testi, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-[#FAFAFA] p-8 rounded-2xl shadow-sm border border-gray-100 h-full relative">
                    <FaQuoteLeft className="absolute top-6 right-8 text-gray-200 text-6xl opacity-50" />
                    
                    <div className="flex text-[#D4AF37] mb-6">
                      {[...Array(testi.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-8 italic relative z-10">
                      "{testi.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-gray-200 pt-6 mt-auto">
                      <img 
                        src={testi.image} 
                        alt={testi.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#C8102E]"
                      />
                      <div>
                        <h4 className="font-bold text-[#1F2937]">{testi.name}</h4>
                        <p className="text-sm text-gray-500">{testi.location}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C8102E] text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-lg text-red-100 mb-10">Contact us today to start planning the decoration for your upcoming special event.</p>
            <a href="/booking" className="inline-block bg-white text-[#C8102E] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Book Our Services
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
