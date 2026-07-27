import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './layouts/RootLayout';

// Placeholder for Pages
const Home = () => <div className="p-10 text-2xl font-serif text-primary">Home Page</div>;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            {/* Add other routes here */}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
