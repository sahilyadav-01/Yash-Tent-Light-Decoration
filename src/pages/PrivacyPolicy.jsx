import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserCheck, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Yash Tent & Light Decoration</title>
        <meta 
          name="description" 
          content="Privacy Policy for Yash Tent & Light Decoration. Learn how we handle and protect your personal information." 
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
            <FaShieldAlt size={28} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Your privacy is of utmost importance to Yash Tent & Light Decoration. This policy outlines how we handle and protect your information.
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
                <FaUserCheck className="text-[#C8102E]" />
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you contact us, request a quote, or make a booking with Yash Tent & Light Decoration, we may collect the following personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li>Your full name, phone number, and email address.</li>
                <li>Event details such as event date, duration, venue address, and type of occasion (wedding, birthday, corporate event, etc.).</li>
                <li>Service choices and preferences (tents, stage decoration, lighting, flower arrangements).</li>
                <li>Any special instructions or customized requirements you provide.</li>
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaLock className="text-[#D4AF37]" />
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The information collected is used solely to provide and improve our services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li>Processing your event booking and scheduling logistics.</li>
                <li>Communicating with you regarding quotations, contract agreements, and setup timelines.</li>
                <li>Providing on-site coordination and emergency support during your celebration.</li>
                <li>Improving our customer service and tailoring custom packages to your needs.</li>
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                3. Information Sharing & Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We respect your personal privacy. We do not sell, rent, or trade your personal information with third parties. Your details are only shared with authorized team members and verified service coordinators directly involved in managing your event setup.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to safeguard your information against unauthorized access, alteration, or disclosure.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                4. Cookies and Web Analytics
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may utilize standard cookies and local storage to optimize user preferences, such as language settings (English/Hindi) and theme modes (Light/Dark). You can manage or disable cookies through your browser settings.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaEnvelope className="text-[#C8102E]" />
                5. Contact Us Regarding Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or how your data is handled, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-sm space-y-2">
                <p><strong>Yash Tent & Light Decoration</strong></p>
                <p>XGP2+QMJ, Palawa, Rajasthan 301706</p>
                <p>
                  WhatsApp / Phone: <a href="https://wa.me/919680709044" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">+91 9680709044</a> (Sumit Yadav) | <a href="tel:+919818222764" className="hover:underline">+91 9818222764</a> (Surendar Kumar)
                </p>
                <p>Email: <a href="mailto:raosumityadav420@gmail.com" className="text-[#C8102E] hover:underline">raosumityadav420@gmail.com</a></p>
                <p className="pt-2 text-xs text-gray-500">Copyright &copy; {new Date().getFullYear()} Sahil Yadav. All Rights Reserved.</p>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center text-sm">
              <Link to="/" className="text-[#C8102E] font-medium hover:underline">
                &larr; Back to Home
              </Link>
              <Link to="/terms-of-service" className="text-[#D4AF37] font-medium hover:underline">
                View Terms of Service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
