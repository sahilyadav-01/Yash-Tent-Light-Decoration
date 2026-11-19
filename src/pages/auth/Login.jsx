import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuthStore } from '../../store/useAuthStore';
import { FaEnvelope, FaLock, FaExclamationTriangle, FaHourglassHalf } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import logoImg from '../../assets/logo.png';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitStatus, setRateLimitStatus] = useState({ isLocked: false, secondsRemaining: 0, attempts: 0 });
  const login = useAuthStore((state) => state.login);
  const getRateLimitStatus = useAuthStore((state) => state.getRateLimitStatus);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  // Check rate limit on mount and run live countdown if locked
  useEffect(() => {
    const updateStatus = () => {
      const status = getRateLimitStatus();
      setRateLimitStatus(status);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, [getRateLimitStatus]);

  const onSubmit = async (data) => {
    if (rateLimitStatus.isLocked) {
      toast.error(`Login is locked. Please wait ${rateLimitStatus.secondsRemaining} seconds.`);
      return;
    }

    setIsLoading(true);
    try {
      const user = await login(data.email, data.password);
      toast.success(`Welcome back, ${user.name}!`);
      setRateLimitStatus({ isLocked: false, secondsRemaining: 0, attempts: 0 });
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error(error.message || 'Login failed. Please check your credentials.');
      setRateLimitStatus(getRateLimitStatus());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Yash Tent & Light Decoration</title>
      </Helmet>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
          <div className="text-center">
            <Link to="/" className="inline-block group mb-3">
              <img 
                src={logoImg} 
                alt="Yash Tent & Decoration Logo" 
                className="h-16 w-auto mx-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Please sign in to your account
            </p>
          </div>

          {/* Rate Limit Lockout Banner */}
          {rateLimitStatus.isLocked && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 p-4 rounded-xl flex items-center gap-3 text-sm animate-pulse">
              <FaHourglassHalf className="shrink-0 text-red-600 dark:text-red-400 text-lg" />
              <div>
                <p className="font-bold">Security Lockout Active</p>
                <p className="text-xs">
                  Too many failed attempts. Login is locked for{' '}
                  <span className="font-bold text-base underline">{rateLimitStatus.secondsRemaining}s</span>.
                </p>
              </div>
            </div>
          )}

          {/* Failed Attempts Warning */}
          {!rateLimitStatus.isLocked && rateLimitStatus.attempts >= 2 && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 p-3 rounded-xl flex items-center gap-2.5 text-xs">
              <FaExclamationTriangle className="shrink-0 text-amber-600" />
              <span>
                <strong>Warning:</strong> {5 - rateLimitStatus.attempts} failed attempt(s) remaining before a 60-second lockout.
              </span>
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    disabled={rateLimitStatus.isLocked}
                    {...register("email", { required: "Email is required" })}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-[#C8102E] focus:border-[#C8102E] sm:text-sm transition-colors disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-gray-800"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    disabled={rateLimitStatus.isLocked}
                    {...register("password", { required: "Password is required" })}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-[#C8102E] focus:border-[#C8102E] sm:text-sm transition-colors disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-gray-800"
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-[#C8102E] hover:text-red-800">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || rateLimitStatus.isLocked}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#C8102E] hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8102E] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {rateLimitStatus.isLocked
                ? `Locked (${rateLimitStatus.secondsRemaining}s)`
                : isLoading
                ? 'Signing in...'
                : 'Sign in'}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
            <Link to="/register" className="font-medium text-[#D4AF37] hover:text-yellow-600">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
