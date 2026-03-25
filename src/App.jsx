import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default Index Route (Home) */}
          <Route index element={<HomePage />} />
          
          {/* Example of adding a new page */}
          <Route path="about" element={<AboutPage />} />
          
          {/* Future pages go here */}
          {/* <Route path="products" element={<ProductsPage />} /> */}
          {/* <Route path="contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
