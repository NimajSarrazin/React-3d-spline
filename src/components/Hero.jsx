/**
 * Hero Component
 * This is the VIEW layer in MVC pattern
 * Responsible for rendering the Hero section UI
 */
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { useTypingAnimation } from '../controllers/useTypingAnimation';
import { 
  heroSubtitle, 
  heroDescription, 
  heroButtonText,
  heroLinkButtonText,
  heroDocumentationButtonText 
} from '../models/HeroModel';

const Hero = () => {
  // Get typing animation data from controller
  const { displayedText } = useTypingAnimation();

  return (
    <section className="hero-content flex lg:mt-20 flex-col lg:flex-row items-center 
    justify-between min-h-[calc(90vh-6rem)] relative z-10">
      <div className="max-w-xl ml-[5%] z-20 relative mt-[90%] md:mt-[60%] lg:mt-0 text-white">
        
        {/* TAG BOX WITH GRADIENT BORDER */}
        <div className="relative inline-flex items-center justify-center bg-gradient-to-r 
        from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] 
        rounded-full p-[3px]">
          <div className="bg-black rounded-full flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap">
            <i className='bx bx-diamond text-xs sm:text-sm'></i>
            <span className="text-xs sm:text-sm font-medium leading-tight">INTRODUCING</span>
          </div>
        </div>

        {/* MAIN HEADING WITH TYPING ANIMATION */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-semibold tracking-wider uppercase my-6 min-h-[1.2em]">
          {/* Animated typing text */}
          {displayedText}
          {/* Blinking cursor with gradient */}
          <span className="inline-block w-0.5 h-[1em] bg-gradient-to-r from-[#656565] to-[#e99b63] ml-1 animate-pulse"></span>
          <br />
          {/* Static subtitle */}
          <span className="text-gray-300">{heroSubtitle}</span>
        </h1>
        
        {/* DESCRIPTION TEXT */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl 
        max-w-xl leading-relaxed">
          {heroDescription}
        </p>
        {/* CTA BUTTONS */}
        <div className="flex items-center gap-4 mt-6 flex-wrap">
          {/* Documentation Button */}
          <button 
            onClick={() => window.open('/SMOOTH_ANIMATIONS.md', '_blank')}
            className="bg-transparent border-2 border-gray-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:border-[#e99b63] hover:text-[#e99b63] transition-all duration-300 flex items-center gap-2 font-medium whitespace-nowrap"
            aria-label="Open documentation"
          >
            {heroDocumentationButtonText}
            <i className='bx bx-book-open text-lg'></i>
          </button>
          
          {/* Primary CTA Button */}
          <Link
            to="/why-3d"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 font-medium whitespace-nowrap"
          >
            {heroButtonText}
            <i className='bx bx-link-external text-lg'></i>
          </Link>
        </div>

      </div>
      {/* 3D SPLINE SCENE */}
      <Spline className="absolute lg:-top-30 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full w-full z-0" scene="https://prod.spline.design/ka4hE2uiye4dAfuQ/scene.splinecode" />
    </section>
  );
};

export default Hero;