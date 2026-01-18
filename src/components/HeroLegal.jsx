/**
 * HeroLegal Component
 * Hero section specifically for legal/useful links pages
 * Features: Clean layout, breadcrumb, no 3D Spline scene
 */
import { useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { navbarData } from '../data/Nav';

const HeroLegal = ({ 
  title, 
  subtitle 
}) => {
  const location = useLocation();

  // Get title from navbar data if not provided
  const currentPage = navbarData.find(item => item.href === location.pathname);
  const heroTitle = title || currentPage?.name || 'Page';

  return (
    <section className="relative py-16 lg:py-24 px-4 lg:px-20">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto mb-8">
        <Breadcrumb />
      </div>

      {/* Hero Content - Centered */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {heroTitle}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroLegal;

