import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaFileContract, FaCheckCircle, FaExclamationTriangle, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Yash Tent & Light Decoration</title>
        <meta 
          name="description" 
          content="Terms of Service for Yash Tent & Light Decoration. Understand booking conditions, cancellation terms, and safety rules." 
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 bg-red-900/30 text-[#D4AF37] rounded-full mb-4"
          >
            <FaFileContract size={28} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Terms of Service
          </motion.h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Please read these terms and conditions carefully before booking services with Yash Tent & Light Decoration.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FAFAFA] text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-6">Last updated: November 2026</p>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaHandshake className="text-[#C8102E]" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By booking any service, submitting an inquiry, or signing an agreement with Yash Tent & Light Decoration, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please contact our team prior to confirming your booking.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-[#D4AF37]" />
                2. Booking & Payment Conditions
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li><strong>Advance Deposit:</strong> A minimum 30% advance payment is required to secure the event date and reserve materials.</li>
                <li><strong>Balance Payment:</strong> The remaining balance must be settled according to agreed milestones, typically upon arrival of the setup crew or prior to event commencement.</li>
                <li><strong>Custom Requirements:</strong> Special materials, customized light designs, or exotic flowers requested outside standard packages may require full upfront clearance.</li>
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaExclamationTriangle className="text-[#C8102E]" />
                3. Cancellation & Refund Policy
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li>Cancellations made <strong>30 days or more</strong> before the scheduled event will receive a full refund of the advance (minus any processing or custom material expenses already incurred).</li>
                <li>Cancellations made between <strong>15 to 29 days</strong> prior will incur a 50% deduction of the advance amount.</li>
                <li>Cancellations made less than <strong>15 days</strong> before the event are non-refundable due to reserved labor and inventory scheduling.</li>
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                4. On-Site Safety, Venue Access & Equipment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Clients are responsible for ensuring appropriate venue permissions, adequate space clearance, and stable electrical connections for heavy lighting setups.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li>Our team follows strict safety protocols for heavy tent rigging and electrical grounding.</li>
                <li>Any intentional damage or severe loss to rented equipment, sound gears, or decorative props caused by event guests may incur replacement fees.</li>
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                5. Intellectual Property & Copyright
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All branding, website design, media content, and proprietary assets are the intellectual property of Yash Tent & Light Decoration and <strong>Copyright &copy; {new Date().getFullYear()} Sahil Yadav</strong>. Unauthorized reproduction or commercial use is prohibited.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                6. Contact & Support
              </h2>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-sm space-y-2">
                <p><strong>Yash Tent & Light Decoration</strong></p>
                <p>Near S'K One Tech Support, Palawa, Rajasthan 301706</p>
                <p>
                  WhatsApp / Phone: <a href="https://wa.me/919680709044" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">+91 9680709044</a> (Sumit Yadav) | <a href="tel:+919818222764" className="hover:underline">+91 9818222764</a> (Surendar Kumar)
                </p>
                <p>Email: <a href="mailto:raosumityadav420@gmail.com" className="text-[#C8102E] hover:underline">raosumityadav420@gmail.com</a></p>
                <p className="pt-2 text-xs text-gray-500">Copyright &copy; {new Date().getFullYear()} Sahil Yadav. All Rights Reserved.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center text-sm">
              <Link to="/privacy-policy" className="text-[#C8102E] font-medium hover:underline">
                &larr; View Privacy Policy
              </Link>
              <Link to="/" className="text-[#D4AF37] font-medium hover:underline">
                Back to Home &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
