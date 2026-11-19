import { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useAuthStore } from '../../store/useAuthStore';
import { useBookingStore } from '../../store/useBookingStore';
import { useGalleryStore } from '../../store/useGalleryStore';
import { 
  FaUsers, 
  FaCalendarCheck, 
  FaRupeeSign, 
  FaChartLine, 
  FaCheck, 
  FaTimes,
  FaPhotoVideo,
  FaPlus,
  FaTrash,
  FaImage,
  FaVideo,
  FaUpload,
  FaLink,
  FaEye
} from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AdminDashboard = () => {
  const { user } = useAuthStore();
  const { bookings, updateBookingStatus, subscribe } = useBookingStore();
  const { items: galleryItems, addItem: addGalleryItem, deleteItem: deleteGalleryItem, resetDefaultGallery } = useGalleryStore();
  
  const [activeTab, setActiveTab] = useState('overview');

  // Gallery Form State
  const [mediaType, setMediaType] = useState('image'); // 'image' or 'video'
  const [inputMode, setInputMode] = useState('url'); // 'url' or 'upload'
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Weddings');
  const [mediaUrl, setMediaUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [previewData, setPreviewData] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filterGalleryCategory, setFilterGalleryCategory] = useState('All');

  useEffect(() => subscribe(user), [subscribe, user]);

  // Analytics Math
  const totalRevenue = useMemo(() => bookings.filter(b => b.status === 'Confirmed').reduce((acc, curr) => acc + curr.amount, 0), [bookings]);
  const pendingRequests = useMemo(() => bookings.filter(b => b.status === 'Pending').length, [bookings]);
  const totalBookings = bookings.length;
  const totalImages = useMemo(() => galleryItems.filter(i => i.type === 'image').length, [galleryItems]);
  const totalVideos = useMemo(() => galleryItems.filter(i => i.type === 'video').length, [galleryItems]);

  // Handle local file upload via FileReader
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      toast.error('Direct uploads must be under 500KB. For larger media, paste a hosted URL.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewData(event.target.result);
      setMediaUrl(event.target.result);
      toast.success(`${mediaType === 'image' ? 'Image' : 'Video'} file loaded for preview!`);
    };
    reader.readAsDataURL(file);
  };

  const handleAddMedia = async (e) => {
    e.preventDefault();
    const finalSource = mediaUrl || previewData;

    if (!finalSource) {
      toast.error('Please provide an image/video URL or upload a file.');
      return;
    }

    if (!title.trim()) {
      toast.error('Please enter a title for this media.');
      return;
    }

    setIsSubmitting(true);
    try {
      await addGalleryItem({
        type: mediaType,
        src: finalSource,
        title: title.trim(),
        category,
        thumbnail: thumbnailUrl.trim() || undefined
      });

      toast.success(`${mediaType === 'image' ? 'Photo' : 'Video'} successfully added to the Gallery!`);
      // Reset form
      setTitle('');
      setMediaUrl('');
      setThumbnailUrl('');
      setPreviewData('');
    } catch (error) {
      toast.error(error.message || 'Failed to add media. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteItem = async (id, itemTitle) => {
    if (window.confirm(`Are you sure you want to delete "${itemTitle}" from the gallery?`)) {
      try {
        await deleteGalleryItem(id);
        toast.success('Media removed from gallery.');
      } catch (error) {
        toast.error(error.message || 'Unable to remove media.');
      }
    }
  };

  // Mock Chart Data
  const monthlyData = [
    { name: 'Jan', revenue: 400000, bookings: 12 },
    { name: 'Feb', revenue: 300000, bookings: 8 },
    { name: 'Mar', revenue: 550000, bookings: 15 },
    { name: 'Apr', revenue: 200000, bookings: 5 },
    { name: 'May', revenue: 700000, bookings: 22 },
    { name: 'Jun', revenue: 850000, bookings: 28 },
  ];

  const filteredGalleryItems = galleryItems.filter(item => {
    if (filterGalleryCategory === 'All') return true;
    if (filterGalleryCategory === 'Photos') return item.type === 'image';
    if (filterGalleryCategory === 'Videos') return item.type === 'video';
    return item.category === filterGalleryCategory;
  });

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
              <p className="text-gray-600 dark:text-gray-400">Welcome back, {user?.name}. Manage bookings, revenue, and gallery media.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-[#C8102E] text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'bookings' ? 'bg-[#C8102E] text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100'}`}
              >
                Manage Bookings
              </button>
              <button 
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'gallery' ? 'bg-[#C8102E] text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100'}`}
              >
                <FaPhotoVideo size={16} /> Manage Gallery
              </button>
            </div>
          </div>
          
          {/* TAB 1: OVERVIEW */}
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Gallery Media</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{totalImages} Photos · {totalVideos} Videos</h3>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <FaPhotoVideo size={20} />
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

          {/* TAB 2: MANAGE BOOKINGS */}
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

          {/* TAB 3: MANAGE GALLERY (IMAGES & VIDEOS) */}
          {activeTab === 'gallery' && (
            <div className="space-y-8">
              {/* Add New Media Form Card */}
              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaPlus className="text-[#C8102E]" /> Add Image or Video to Gallery
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Upload from your device or paste a URL / YouTube link to showcase in the public Gallery.
                    </p>
                  </div>
                  <button
                    onClick={async () => {
                      if (window.confirm('Reset gallery back to default initial items?')) {
                        try {
                          await resetDefaultGallery();
                          toast.success('Gallery reset to default items.');
                        } catch (error) {
                          toast.error(error.message || 'Unable to reset the gallery.');
                        }
                      }
                    }}
                    className="text-xs text-gray-500 hover:text-red-500 underline"
                  >
                    Reset Defaults
                  </button>
                </div>

                <form onSubmit={handleAddMedia} className="space-y-6">
                  {/* Select Type & Input Mode */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Media Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setMediaType('image');
                            setPreviewData('');
                          }}
                          className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium border text-sm transition-all ${
                            mediaType === 'image'
                              ? 'bg-[#C8102E] text-white border-[#C8102E] shadow'
                              : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          <FaImage /> Photo / Image
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setMediaType('video');
                            setPreviewData('');
                          }}
                          className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium border text-sm transition-all ${
                            mediaType === 'video'
                              ? 'bg-[#C8102E] text-white border-[#C8102E] shadow'
                              : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          <FaVideo /> Video Tour / Reel
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Source Method</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setInputMode('url')}
                          className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium border text-sm transition-all ${
                            inputMode === 'url'
                              ? 'bg-[#D4AF37] text-gray-900 border-[#D4AF37] shadow font-bold'
                              : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          <FaLink /> Paste URL
                        </button>
                        <button
                          type="button"
                          onClick={() => setInputMode('upload')}
                          className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium border text-sm transition-all ${
                            inputMode === 'upload'
                              ? 'bg-[#D4AF37] text-gray-900 border-[#D4AF37] shadow font-bold'
                              : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          <FaUpload /> Upload File
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Title / Caption *
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Royal Wedding Entry Setup"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#C8102E] outline-none text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Category *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#C8102E] outline-none text-sm"
                      >
                        <option value="Weddings">Weddings</option>
                        <option value="Lighting">Lighting</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Birthdays">Birthdays</option>
                        <option value="Stage Decoration">Stage Decoration</option>
                        <option value="Tent House">Tent House</option>
                      </select>
                    </div>
                  </div>

                  {/* Source Input */}
                  {inputMode === 'url' ? (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {mediaType === 'image' ? 'Image Direct URL *' : 'Video URL / YouTube Link *'}
                      </label>
                      <input
                        type="url"
                        value={mediaUrl}
                        onChange={(e) => {
                          setMediaUrl(e.target.value);
                          setPreviewData(e.target.value);
                        }}
                        placeholder={
                          mediaType === 'image'
                            ? 'https://images.unsplash.com/... or https://your-server.com/photo.jpg'
                            : 'https://www.youtube.com/watch?v=... or direct MP4 link'
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#C8102E] outline-none text-sm"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Choose {mediaType === 'image' ? 'Image' : 'Video'} File from Device *
                      </label>
                      <input
                        type="file"
                        accept={mediaType === 'image' ? 'image/*' : 'video/*'}
                        onChange={handleFileUpload}
                        className="w-full px-4 py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-sm text-gray-600 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#C8102E] file:text-white hover:file:bg-red-800"
                        required={!previewData}
                      />
                    </div>
                  )}

                  {/* Optional Video Thumbnail URL */}
                  {mediaType === 'video' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Video Thumbnail Image URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={thumbnailUrl}
                        onChange={(e) => setThumbnailUrl(e.target.value)}
                        placeholder="https://images.unsplash.com/... (cover image for video card)"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#C8102E] outline-none text-sm"
                      />
                    </div>
                  )}

                  {/* Live Preview Box */}
                  {(previewData || mediaUrl) && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1.5">
                        <FaEye /> Live Preview:
                      </p>
                      <div className="max-w-xs h-44 rounded-lg overflow-hidden bg-gray-800 relative">
                        {mediaType === 'image' ? (
                          <img
                            src={previewData || mediaUrl}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Invalid+Image+URL'; }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
                            <FaVideo size={32} className="text-[#D4AF37]" />
                          </div>
                        )}
                        <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {mediaType.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#C8102E] hover:bg-red-800 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <FaPlus /> {isSubmitting ? 'Adding...' : `Add ${mediaType === 'image' ? 'Image' : 'Video'} to Gallery`}
                  </button>
                </form>
              </div>

              {/* Existing Gallery Media List */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Active Gallery Items ({galleryItems.length})</h3>
                    <p className="text-xs text-gray-500">Live items currently visible on your public Gallery page.</p>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="flex gap-2 flex-wrap">
                    {['All', 'Photos', 'Videos', 'Weddings', 'Lighting'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterGalleryCategory(cat)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                          filterGalleryCategory === cat
                            ? 'bg-[#C8102E] text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                        <th className="p-4 font-medium">Preview</th>
                        <th className="p-4 font-medium">Type</th>
                        <th className="p-4 font-medium">Title</th>
                        <th className="p-4 font-medium">Category</th>
                        <th className="p-4 font-medium">Date Added</th>
                        <th className="p-4 font-medium text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredGalleryItems.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="p-4">
                            <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 relative shrink-0">
                              <img
                                src={item.thumbnail || item.src}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                              {item.type === 'video' && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                                  <FaVideo size={10} />
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                              item.type === 'video'
                                ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            }`}>
                              {item.type === 'video' ? <FaVideo size={10} /> : <FaImage size={10} />}
                              {item.type.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-4 text-sm font-semibold text-gray-900 dark:text-white max-w-xs truncate">
                            {item.title}
                          </td>
                          <td className="p-4 text-sm text-[#D4AF37] font-medium">
                            {item.category}
                          </td>
                          <td className="p-4 text-sm text-gray-500">
                            {item.date || 'Recent'}
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => handleDeleteItem(item.id, item.title)}
                              className="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-800/50 inline-flex items-center justify-center transition-colors shadow-sm"
                              title="Delete from Gallery"
                            >
                              <FaTrash size={12} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredGalleryItems.length === 0 && (
                    <div className="p-10 text-center text-gray-500">
                      No media found matching this filter.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
