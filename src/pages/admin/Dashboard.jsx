import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuthStore } from '../../store/useAuthStore';
import { useBookingStore } from '../../store/useBookingStore';
import { FaUsers, FaCalendarCheck, FaRupeeSign, FaChartLine, FaCheck, FaTimes } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AdminDashboard = () => {
  const { user } = useAuthStore();
  const { bookings, updateBookingStatus } = useBookingStore();
  const [activeTab, setActiveTab] = useState('overview');

  // Analytics Math
  const totalRevenue = useMemo(() => bookings.filter(b => b.status === 'Confirmed').reduce((acc, curr) => acc + curr.amount, 0), [bookings]);
  const pendingRequests = useMemo(() => bookings.filter(b => b.status === 'Pending').length, [bookings]);
  const totalBookings = bookings.length;

  // Mock Chart Data
  const monthlyData = [
    { name: 'Jan', revenue: 400000, bookings: 12 },
    { name: 'Feb', revenue: 300000, bookings: 8 },
    { name: 'Mar', revenue: 550000, bookings: 15 },
    { name: 'Apr', revenue: 200000, bookings: 5 },
    { name: 'May', revenue: 700000, bookings: 22 },
    { name: 'Jun', revenue: 850000, bookings: 28 },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Yash Tent & Light Decoration</title>
      </Helmet>
      
      <div className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">Welcome back, {user?.name}. Here's what's happening today.</p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-[#C8102E] text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'bookings' ? 'bg-[#C8102E] text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
              >
                Manage Bookings
              </button>
            </div>
          </div>
          
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Revenue</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">₹{totalRevenue.toLocaleString('en-IN')}</h3>
                    </div>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                      <FaRupeeSign size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Bookings</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{totalBookings}</h3>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <FaCalendarCheck size={20} />
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Pending Requests</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{pendingRequests}</h3>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                      <FaChartLine size={20} />
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Active Customers</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">124</h3>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <FaUsers size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Revenue Overview (2026)</h3>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                        <XAxis dataKey="name" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#1F2937', color: '#fff', border: 'none', borderRadius: '8px'}} />
                        <Bar dataKey="revenue" fill="#C8102E" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Bookings Trend</h3>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                        <XAxis dataKey="name" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip contentStyle={{backgroundColor: '#1F2937', color: '#fff', border: 'none', borderRadius: '8px'}} />
                        <Line type="monotone" dataKey="bookings" stroke="#D4AF37" strokeWidth={3} dot={{r: 6}} activeDot={{r: 8}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Booking Requests</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                      <th className="p-4 font-medium">ID</th>
                      <th className="p-4 font-medium">Customer</th>
                      <th className="p-4 font-medium">Event Type</th>
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Amount</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{booking.id}</td>
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.customerEmail}</td>
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.eventType}</td>
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.date}</td>
                        <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">₹{booking.amount.toLocaleString()}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="p-4 flex justify-end gap-2">
                          {booking.status === 'Pending' && (
                            <>
                              <button 
                                onClick={() => updateBookingStatus(booking.id, 'Confirmed')}
                                className="w-8 h-8 rounded bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-800/50 flex items-center justify-center transition-colors"
                                title="Approve"
                              >
                                <FaCheck size={14} />
                              </button>
                              <button 
                                onClick={() => updateBookingStatus(booking.id, 'Cancelled')}
                                className="w-8 h-8 rounded bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-800/50 flex items-center justify-center transition-colors"
                                title="Reject"
                              >
                                <FaTimes size={14} />
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
