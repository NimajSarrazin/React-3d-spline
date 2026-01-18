/**
 * Why 3D in Web Design Page
 * Detailed explanation of why 3D is beneficial in modern web design
 */
import { Link } from 'react-router-dom';
import { useFadeIn, useStagger } from '../hooks/useGSAP';
import HeroSecondary from '../components/HeroSecondary';

const Why3D = () => {
  const sectionsRef = useStagger({ delay: 0.2, stagger: 0.15 });
  const ctaRef = useFadeIn({ delay: 0.5 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSecondary 
        subtitle="Three-dimensional elements are transforming the web from flat, static pages into immersive, interactive experiences that captivate and engage users."
      />

      {/* Main Content */}
      <div ref={sectionsRef} className="max-w-6xl mx-auto space-y-20 py-20 px-4 lg:px-20">
        
        {/* Engagement Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">01. ENGAGEMENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Captivate Your Audience
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              3D elements create a sense of depth and interactivity that flat designs simply cannot match. Users spend more time exploring your site, leading to increased engagement rates and better conversion metrics.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>40% increase in time on page</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Higher interaction rates</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Improved user retention</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 h-64 flex items-center justify-center">
            <i className='bx bx-line-chart text-9xl text-gray-700'></i>
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 h-64 flex items-center justify-center order-2 md:order-1">
            <i className='bx bx-book-content text-9xl text-gray-700'></i>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">02. STORYTELLING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tell Your Story Visually
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Three-dimensional experiences allow brands to communicate complex ideas and emotions through visual storytelling. Users don't just read your message—they experience it.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Immersive brand experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Emotional connections with users</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Memorable user journeys</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Brand Differentiation Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">03. DIFFERENTIATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stand Out from the Crowd
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              In a sea of flat, similar-looking websites, 3D elements help your brand stand out. They signal innovation, modernity, and attention to detail—qualities that build trust and recognition.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Competitive advantage</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Professional brand image</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Innovation signal</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 h-64 flex items-center justify-center">
            <i className='bx bx-award text-9xl text-gray-700'></i>
          </div>
        </section>

        {/* UX Enhancement Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 h-64 flex items-center justify-center order-2 md:order-1">
            <i className='bx bx-navigation text-9xl text-gray-700'></i>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">04. USER EXPERIENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Guide Users Intuitively
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              3D interfaces provide spatial context and visual hierarchy that help users navigate complex information. Depth and perspective create intuitive interactions that feel natural.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Improved spatial understanding</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Better information hierarchy</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#e99b63] text-xl mt-0.5'></i>
                <span>Intuitive interactions</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section ref={ctaRef} className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-[#656565]/20 to-[#e99b63]/20 rounded-3xl p-12 border border-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Implement 3D?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Explore real-world use cases and learn how to integrate 3D into your next project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/use-cases"
              className="bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 font-medium"
            >
              View Use Cases
            </Link>
            <Link
              to="/technologies"
              className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-full hover:border-[#e99b63] hover:text-[#e99b63] transition-all duration-300 font-medium"
            >
              Explore Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why3D;
