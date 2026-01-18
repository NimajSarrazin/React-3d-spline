/**
 * Hero Component
 * This is the VIEW layer in MVC pattern
 * Responsible for rendering the Hero section UI
 */
import 'boxicons/css/boxicons.min.css';
import { useTypingAnimation } from '../controllers/useTypingAnimation';
import { heroSubtitle, heroDescription, heroButtonText } from '../models/HeroModel';

const Hero = () => {
  // Get typing animation data from controller
  const { displayedText } = useTypingAnimation();

  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center 
    justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        
        {/* TAG BOX WITH GRADIENT BORDER */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r 
        from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] 
        rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className='bx bx-diamond'>INTRODUCING</i>
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

        {/* CTA BUTTON */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
            {heroButtonText}
          </button>
        </div>

      </div>
    </main>
  );
};

export default Hero;