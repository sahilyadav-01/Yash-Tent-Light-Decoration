import { Helmet } from 'react-helmet-async';
import { useAuthStore } from '../../store/useAuthStore';
import { useBookingStore } from '../../store/useBookingStore';
import { generateQuotationPDF } from '../../utils/generatePDF';
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';

const CustomerDashboard = () => {
  const { user } = useAuthStore();
  const { getUserBookings } = useBookingStore();
  
  const userBookings = getUserBookings(user?.email);

  return (
    <>
      <Helmet>
        <title>My Dashboard | Yash Tent & Light Decoration</title>
      </Helmet>
      
      <div className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome, {user?.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your event bookings and quotations below.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Profile */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                <div className="w-20 h-20 bg-[#C8102E] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {user?.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">{user?.name}</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">{user?.email}</p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Total Bookings</span>
                    <span className="font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{userBookings.length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content - Bookings */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Bookings</h2>
              
              {userBookings.length === 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center border border-gray-100 dark:border-gray-700">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                    <FaCalendarAlt size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No bookings yet</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">You haven't made any event bookings.</p>
                  <a href="/booking" className="bg-[#C8102E] text-white px-6 py-3 rounded-full font-medium inline-block hover:bg-red-800 transition-colors">
                    Book an Event Now
                  </a>
                </div>
              ) : (
                userBookings.map((booking) => (
                  <div key={booking.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Booking ID: {booking.id}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{booking.eventType} Decoration</h3>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="flex items-start gap-3">
                        <FaCalendarAlt className="text-[#C8102E] mt-1" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Event Date</p>
                          <p className="font-medium text-gray-900 dark:text-white">{booking.date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-[#C8102E] mt-1" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Venue</p>
                          <p className="font-medium text-gray-900 dark:text-white">{booking.venue}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaRupeeSign className="text-[#C8102E] mt-1" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Amount</p>
                          <p className="font-bold text-gray-900 dark:text-white text-lg">₹{booking.amount.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                      <button 
                        onClick={() => generateQuotationPDF(booking)}
                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <FaDownload /> Download Quotation
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
