import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Mock API Call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      toast.success('Password reset link sent to your email!');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password | Yash Tent & Light Decoration</title>
      </Helmet>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-serif font-bold text-gray-900 dark:text-white">
              Reset Password
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Enter your email to receive a reset link
            </p>
          </div>
          
          {!isSent ? (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-[#C8102E] focus:border-[#C8102E] sm:text-sm transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#C8102E] hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8102E] transition-colors shadow-md disabled:opacity-70"
              >
                {isLoading ? 'Sending Link...' : 'Send Reset Link'}
              </button>
            </form>
          ) : (
            <div className="mt-8 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-4 rounded-lg text-center">
              <p className="text-green-800 dark:text-green-400 text-sm">
                We've sent a password reset link to your email address. Please check your inbox and spam folder.
              </p>
            </div>
          )}
          
          <div className="mt-6 text-center text-sm">
            <Link to="/login" className="font-medium text-[#D4AF37] hover:text-yellow-600">
              &larr; Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
