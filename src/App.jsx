import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Services from './pages/Services';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="services" element={<Services />} />
            {/* Add other routes here */}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
