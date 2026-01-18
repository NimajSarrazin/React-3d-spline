/**
 * Footer Component
 * Comprehensive footer with links, newsletter, and legal information
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../data/Nav';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription
      console.log('Subscribed:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can implement actual theme switching here
  };

  const usefulLinks = [
    { name: 'Legal Notice', href: '/legal-notice' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const currentYear = new Date().getFullYear();
  const projectName = '3DAnimate';
  const version = 'v1.2.0';

  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-light mb-4 inline-block hover:opacity-80 transition-opacity">
              {projectName}
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Transform your website with smooth 3D animations and interactive elements.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#e99b63] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navbarData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-[#e99b63] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:border-[#e99b63] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Left: Language & Theme */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <i className='bx bx-world text-gray-400'></i>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 text-white text-sm focus:border-[#e99b63] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 hover:border-[#e99b63] transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <>
                    <i className='bx bx-sun text-gray-400'></i>
                    <span className="text-gray-400 text-sm">Light</span>
                  </>
                ) : (
                  <>
                    <i className='bx bx-moon text-gray-400'></i>
                    <span className="text-gray-400 text-sm">Dark</span>
                  </>
                )}
              </button>

              {/* Version */}
              <span className="text-gray-500 text-xs">
                {version}
              </span>

              {/* Open Source Badge */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 hover:border-[#e99b63] transition-colors"
              >
                <i className='bx bx-code-alt text-gray-400 text-sm'></i>
                <span className="text-gray-400 text-sm">Open Source</span>
              </a>
            </div>

            {/* Right: Copyright & Credits */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © {currentYear} – {projectName}. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Design & Development by{' '}
                <span className="text-[#e99b63]">Ben</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

