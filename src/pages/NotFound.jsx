import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Yash Tent & Light Decoration</title>
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-16 transition-colors">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-red-100 text-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm"
          >
            <FaExclamationTriangle size={36} />
          </motion.div>

          <h1 className="text-6xl font-serif font-bold text-gray-900 dark:text-white mb-2">404</h1>
          <h2 className="text-2xl font-serif font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md"
            >
              <FaHome size={16} /> Return Home
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2.5 rounded-full font-medium transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
