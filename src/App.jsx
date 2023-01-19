// IMPORT REACT & REACT-ROUTER-DOM
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// IMPORT LAYOUTS
import Header from './layout/Header/index.jsx';
import Footer from './layout/Footer/index.jsx';

// IMPORT PAGES
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Lodging from './pages/Lodging/index.jsx';
import Error from './pages/Error/index.jsx';

// RETURN APP & ROUTER
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* HOME */}
        <Route path="/home" element={<Home />} />
        {/* ABOUT US */}
        <Route path="/about" element={<About />} />
        {/* LODGING */}
        <Route path="/housing/:id" element={<Lodging />} />
        {/* ERROR 404 */}
        <Route path="*" element={<Error />} />
        {/* REDIRECT TO HOME */}
        <Route path="" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;