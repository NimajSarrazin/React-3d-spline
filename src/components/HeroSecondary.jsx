/**
 * HeroSecondary Component
 * Reusable Hero section for secondary pages (not homepage)
 * Features: Dynamic title from navbar, breadcrumb, centered Spline scene
 */
import { useLocation } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Breadcrumb from './Breadcrumb';
import { navbarData } from '../data/Nav';

const HeroSecondary = ({ 
  title, 
  subtitle, 
  splineScene = "https://prod.spline.design/ka4hE2uiye4dAfuQ/scene.splinecode" 
}) => {
  const location = useLocation();

  // Get title from navbar data if not provided
  const currentPage = navbarData.find(item => item.href === location.pathname);
  const heroTitle = title || currentPage?.name || 'Page';

  return (
    <section
      className="relative min-h-[calc(90vh-6rem)] z-10 px-4 lg:px-20"
    >
      {/* Breadcrumb - Matching navbar layout */}
      <div className="pt-6 lg:pt-8">
        <Breadcrumb />
      </div>

      {/* Hero Content Container - Matching navbar padding */}
      <div className="relative flex lg:mt-8 flex-col lg:flex-row items-center 
      justify-between min-h-[calc(90vh-10rem)]">
        
        {/* Text Content */}
        <div className="max-w-xl z-20 relative mt-[90%] md:mt-[60%] lg:mt-0 text-white w-full lg:w-auto">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            {heroTitle}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3D SPLINE SCENE - Centered */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-full max-w-4xl h-full flex items-center justify-center">
            <div className="w-full h-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] pointer-events-auto">
              <Spline 
                className="absolute lg:-top-30 top-[-20%] 
                bottom-0 lg:left-[25%] sm:left-[-2%] h-full w-full z-0" 
                scene={splineScene}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecondary;

