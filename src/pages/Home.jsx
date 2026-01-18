/**
 * Home / Landing Page
 * Main landing page with hero section and key arguments about 3D in web design
 */
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useFadeIn, useStagger } from '../hooks/useGSAP';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { keyBenefits, benefitsSectionConfig } from '../models/BenefitsModel';

const Home = () => {
  const benefitsRef = useStagger({ delay: 0.2, stagger: 0.15 });
  const sectionRef = useFadeIn({ delay: 0.3 });
  const ctaRef = useFadeIn({ delay: 0.5 });

  // Hero animation - fade in on mount
  useEffect(() => {
    const heroElement = document.querySelector('.hero-content');
    if (heroElement) {
      // Set initial state
      gsap.set('.hero-content', { opacity: 0, y: 50 });
      
      // Animate to final state
      gsap.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Key Benefits Section */}
      <section ref={sectionRef} className="py-20 px-4 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {benefitsSectionConfig.title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            {benefitsSectionConfig.subtitle}
          </p>
        </div>

        <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#e99b63] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-xl flex items-center justify-center mb-6">
                <i className={`bx ${benefit.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#656565]/20 to-[#e99b63]/20 rounded-3xl p-12 border border-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Website?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Discover how 3D can elevate your digital presence and engage your audience like never before.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/why-3d"
              className="bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 font-medium"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-full hover:border-[#e99b63] hover:text-[#e99b63] transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

