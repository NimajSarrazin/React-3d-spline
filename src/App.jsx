/**
 * Main App Component
 * Sets up routing and global layout
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Why3D from './pages/Why3D';
import UseCases from './pages/UseCases';
import Performance from './pages/Performance';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        {/* Background Effects */}
        <img 
          src="/gradient.png" 
          alt="Gradient" 
          className="fixed top-0 right-0 opacity-100 -z-10 pointer-events-none" 
        />
        <div 
          className="fixed h-0 w-[40rem] top-[20%] right-[5%] 
          shadow-[0_0_900px_20px_#e99B63] -rotate-[30deg] -z-10 pointer-events-none"
        ></div>

        {/* Header - Visible on all pages */}
        <Header />

        {/* Page Routes - Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-3d" element={<Why3D />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        {/* Footer - Visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}