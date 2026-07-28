import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book your services?",
      answer: "You can book our services by filling out the booking form on our website, calling us directly, or visiting our office. We recommend booking at least 1-2 months in advance for large events."
    },
    {
      question: "Is there any advance payment required?",
      answer: "Yes, we require a 30% advance payment to confirm your booking and lock in your dates. The remaining balance is typically due a few days before the event."
    },
    {
      question: "Can I customize the decoration packages?",
      answer: "Absolutely! Our packages are just a starting point. We specialize in custom decorations and can tailor any package to fit your specific theme, preferences, and budget."
    },
    {
      question: "In which cities do you provide services?",
      answer: "We primarily operate in the main city and surrounding suburban areas (up to a 50km radius). For out-of-station events, additional travel and logistics charges may apply."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 30 days prior to the event will receive a full refund of the advance (minus processing fees). Cancellations within 15 days will incur a 50% deduction of the advance amount."
    },
    {
      question: "Do you provide catering as well?",
      answer: "Yes, we have tie-ups with premium caterers and can provide a complete event management package that includes decoration, tenting, lighting, and catering."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQs | Yash Tent & Light Decoration</title>
        <meta name="description" content="Frequently asked questions about our tent, lighting, and decoration booking process." />
      </Helmet>

      <section className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services, booking process, and policies."
          />

          <div className="max-w-3xl mx-auto mt-12">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-lg text-[#1F2937]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-[#C8102E]" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border-t-4 border-[#D4AF37]">
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">We're here to help! Contact our support team for more information.</p>
            <a href="/contact" className="inline-block bg-[#1F2937] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
