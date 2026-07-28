import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-gray-900 transition-colors">
      <ScrollRestoration />
      <Toaster position="top-right" />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
