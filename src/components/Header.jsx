import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navbarData } from '../data/Nav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <header className="flex items-center justify-between py-4 px-4 lg:px-20 relative">
      <Link to="/" className="text-3xl md:text-4xl lg:text-5xl font-light m-0 hover:opacity-80 transition-opacity">
        3DAnimate
      </Link>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navbarData.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className={`transition-all duration-300 ease-in-out relative group ${
              isActive(item.href) 
                ? 'text-[#e99b63]' 
                : 'text-white hover:text-gray-300'
            }`}
          >
            {item.name}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out ${
              isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 z-50 relative"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Mobile navigation */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-md z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start gap-6 pt-20 px-8">
          {navbarData.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`transition-all duration-300 ease-in-out text-lg w-full py-2 border-b ${
                isActive(item.href)
                  ? 'text-[#e99b63] border-gray-600'
                  : 'text-white hover:text-gray-300 border-gray-800 hover:border-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
        ></div>
      )}
    </header>
  );
};

export default Header;