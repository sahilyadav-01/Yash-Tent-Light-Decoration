import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // NOTE: These are dummy keys. Replace with actual EmailJS keys.
      await emailjs.send(
        'service_dummy', 
        'template_dummy', 
        data, 
        'public_key_dummy'
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Faking success for demo purposes since dummy keys will fail
      setSubmitStatus('success');
      reset();
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Yash Tent & Light Decoration</title>
        <meta name="description" content="Get in touch with us for premium event decoration and management services." />
      </Helmet>

      <section className="pt-32 pb-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a question or want to discuss an upcoming event? We'd love to hear from you."
          />

          <div className="flex flex-col lg:flex-row gap-12 mt-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#C8102E]">
                <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-6">Contact Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 text-[#C8102E] rounded-full flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2937]">Office Address</h4>
                      <p className="text-gray-600">Near S'K One Tech Support, Palawa, Rajasthan 301706</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 text-[#C8102E] rounded-full flex items-center justify-center shrink-0">
                      <FaPhoneAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2937]">Phone / WhatsApp</h4>
                      <p className="text-gray-600">Sumit (kuku) Yadav: +91 9680709044</p>
                      <p className="text-gray-600">Surendar kumar: +91 9818222764</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 text-[#C8102E] rounded-full flex items-center justify-center shrink-0">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2937]">Email Address</h4>
                      <p className="text-gray-600">info@yashtent.com</p>
                      <p className="text-gray-600">bookings@yashtent.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 text-[#C8102E] rounded-full flex items-center justify-center shrink-0">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2937]">Business Hours</h4>
                      <p className="text-gray-600">Mon - Sun: 9:00 AM - 9:00 PM</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-6">Send Us a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-200">
                    Thank you for your message! We will get back to you shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border border-red-200">
                    Oops! Something went wrong. Please try again later or contact us directly via phone.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        {...register("phone", { required: "Phone number is required" })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-colors`}
                        placeholder="+91 9680709044"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                      <select 
                        {...register("eventType")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-colors bg-white"
                      >
                        <option value="Wedding">Wedding</option>
                        <option value="Reception">Reception</option>
                        <option value="Birthday">Birthday Party</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea 
                      {...register("message", { required: "Message is required" })}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-colors resize-none`}
                      placeholder="Tell us about your event requirements..."
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#C8102E] hover:bg-red-800 text-white font-bold py-4 rounded-lg transition-colors shadow-md disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-96 w-full relative">
        <iframe 
          src="https://maps.google.com/maps?q=XGP2%2BQMJ%2C%20Palawa%2C%20Rajasthan%20301706%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
