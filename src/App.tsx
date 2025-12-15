import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" element={<ProductPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;