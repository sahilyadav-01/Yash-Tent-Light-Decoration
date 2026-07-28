import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Packages from './pages/Packages';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Calculator from './pages/Calculator';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import { ProtectedRoute, AdminRoute } from './components/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "why-choose-us", element: <WhyChooseUs /> },
      { path: "services", element: <Services /> },
      { path: "gallery", element: <Gallery /> },
      { path: "packages", element: <Packages /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "faq", element: <FAQ /> },
      { path: "contact", element: <Contact /> },
      { path: "booking", element: <Booking /> },
      { path: "calculator", element: <Calculator /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { 
        path: "dashboard", 
        element: <ProtectedRoute><div className="p-20 text-center text-2xl dark:text-white">Customer Dashboard (Coming Soon)</div></ProtectedRoute> 
      },
      { 
        path: "admin", 
        element: <AdminRoute><div className="p-20 text-center text-2xl dark:text-white">Admin Dashboard (Coming Soon)</div></AdminRoute> 
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
