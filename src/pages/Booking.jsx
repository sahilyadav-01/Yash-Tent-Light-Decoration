import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useBookingStore } from '../store/useBookingStore';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const addBooking = useBookingStore(state => state.addBooking);
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  const watchEventType = watch("eventType", "Wedding");

  const onSubmit = async (data) => {
    if (!isAuthenticated) {
      toast.error('Please login to make a booking.');
      navigate('/login', { state: { from: '/booking' } });
      return;
    }

    setIsSubmitting(true);
    try {
      // Mocking EmailJS send
      // await emailjs.send('service_dummy', 'template_dummy', data, 'public_key_dummy');
      
      // Add to store
      addBooking({
        ...data,
        customerEmail: user.email,
      });

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Now | Yash Tent & Light Decoration</title>
        <meta name="description" content="Book our premium tent, light, and event decoration services." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-900 text-white relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Booking Background" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Book Your Event
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Let us make your special day truly unforgettable
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-[#FAFAFA] relative -mt-20 z-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-[#C8102E]"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-serif font-bold text-[#1F2937] mb-2">Event Booking Form</h2>
                  <p className="text-gray-500">Please provide details about your event, and our team will get back to you with a customized quote.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] border-b border-gray-200 pb-2 mb-4">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input 
                          {...register("name", { required: "Name is required" })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input 
                          {...register("phone", { required: "Phone number is required" })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input 
                          type="email"
                          {...register("email", { required: "Email is required" })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] border-b border-gray-200 pb-2 mb-4">Event Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Type *</label>
                        <select 
                          {...register("eventType")}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                        >
                          <option value="Wedding">Wedding</option>
                          <option value="Reception">Reception</option>
                          <option value="Engagement">Engagement</option>
                          <option value="Birthday">Birthday Party</option>
                          <option value="Corporate">Corporate Event</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Decoration Package</label>
                        <select 
                          {...register("package")}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                        >
                          <option value="Silver">Silver Package</option>
                          <option value="Gold">Gold Package</option>
                          <option value="Platinum">Platinum Package</option>
                          <option value="Custom">Custom / Need Guidance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Date *</label>
                        <input 
                          type="date"
                          {...register("eventDate", { required: "Date is required" })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Guests</label>
                        <select 
                          {...register("guests")}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                        >
                          <option value="1-100">1 - 100 Guests</option>
                          <option value="101-300">101 - 300 Guests</option>
                          <option value="301-500">301 - 500 Guests</option>
                          <option value="500+">500+ Guests</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Address/Venue</label>
                        <input 
                          {...register("address")}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors"
                          placeholder="Venue name or full address"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Extra Requirements */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] border-b border-gray-200 pb-2 mb-4">Additional Information</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements or Vision</label>
                      <textarea 
                        {...register("requirements")}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors resize-none"
                        placeholder="Tell us about specific themes, color preferences, or any other services like catering/DJ you might need..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] hover:bg-yellow-600 text-white font-bold py-4 rounded-lg text-lg transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Submit Booking Request'}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-2xl shadow-2xl text-center border-t-8 border-[#25D366]"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-[#25D366] text-6xl" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-[#1F2937] mb-4">Booking Request Sent!</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
                  Thank you for choosing Yash Tent & Light Decoration. Our event manager will contact you within 24 hours with a customized proposal.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-[#1F2937] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Make Another Booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Booking;
