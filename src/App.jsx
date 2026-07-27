import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

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
