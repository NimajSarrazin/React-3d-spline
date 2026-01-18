/**
 * FAQ Page
 * Frequently Asked Questions about 3D in web design
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSecondary from '../components/HeroSecondary';
import { useStagger } from '../hooks/useGSAP';

const FAQ = () => {
  const contentRef = useStagger({ delay: 0.2, stagger: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      category: 'basics',
      question: 'What is 3D web design?',
      answer: '3D web design involves incorporating three-dimensional elements, animations, and interactive 3D models into websites using technologies like WebGL, Three.js, and React Three Fiber. This creates immersive, engaging user experiences that go beyond traditional flat designs, allowing users to interact with three-dimensional objects directly in their browser.',
      icon: 'bx-cube'
    },
    {
      category: 'performance',
      question: 'Does 3D slow down websites?',
      answer: 'When properly optimized, 3D elements can maintain excellent performance. Modern libraries use techniques like LOD (Level of Detail), frustum culling, and efficient rendering pipelines to ensure smooth 60fps experiences without significantly impacting load times. Performance depends on optimization, device capabilities, and the complexity of 3D assets.',
      icon: 'bx-tachometer'
    },
    {
      category: 'accessibility',
      question: 'Is 3D web design accessible?',
      answer: 'Yes, when implemented thoughtfully. Modern 3D web experiences can include accessibility features like reduced motion support (respecting prefers-reduced-motion), keyboard navigation, screen reader compatibility, ARIA labels, and customizable interaction controls. Following WCAG guidelines ensures 3D elements enhance rather than hinder accessibility.',
      icon: 'bx-accessibility'
    },
    {
      category: 'technology',
      question: 'What technologies are used for 3D web design?',
      answer: 'Popular technologies include Three.js (JavaScript 3D library), React Three Fiber (React renderer for Three.js), GSAP (animation library), Spline (browser-based 3D design tool), Babylon.js (3D engine), and WebGL (low-level API). Each has different strengths: Three.js for versatility, React Three Fiber for React apps, Spline for designers, and Babylon.js for complex scenes. Learn more on our Technologies page.',
      icon: 'bx-code-alt'
    },
    {
      category: 'implementation',
      question: 'How long does it take to implement 3D on a website?',
      answer: 'Timeline varies significantly based on complexity. Simple 3D elements or pre-made models can be integrated in days to a week. Custom 3D experiences typically take 2-8 weeks, while complex interactive applications may require several months. Factors include 3D asset creation, interactivity requirements, optimization needs, and testing across devices.',
      icon: 'bx-time-five'
    },
    {
      category: 'technology',
      question: 'Do 3D websites work on mobile devices?',
      answer: 'Yes, modern 3D web experiences are responsive and work on mobile devices. They adapt to device capabilities through adaptive quality settings, touch-optimized interactions, and responsive design. Performance is optimized for various screen sizes and hardware specifications, though complex scenes may be simplified on lower-end devices.',
      icon: 'bx-mobile-alt'
    },
    {
      category: 'business',
      question: 'How much does it cost to add 3D to a website?',
      answer: 'Costs vary based on complexity, custom 3D models, interactivity requirements, and development time. Simple integrations with pre-made assets can be cost-effective ($500-$2,000). Custom 3D experiences typically range from $2,000-$10,000+, while enterprise-level interactive applications can exceed $20,000. Get a personalized quote through our contact form.',
      icon: 'bx-dollar-circle'
    },
    {
      category: 'business',
      question: 'Can 3D improve conversion rates?',
      answer: 'Yes, studies show that well-implemented 3D elements can increase engagement by up to 40%, extend time on page, and improve conversion rates. Interactive 3D product views in e-commerce, immersive brand experiences, and engaging animations guide users through the customer journey, creating memorable interactions that drive action.',
      icon: 'bx-line-chart'
    },
    {
      category: 'compatibility',
      question: 'What browsers support 3D web design?',
      answer: 'Modern browsers including Chrome, Firefox, Safari, and Edge fully support WebGL and 3D web technologies. Most 3D experiences work seamlessly on both desktop and mobile browsers. Older browsers (Internet Explorer, older mobile browsers) may have limited or no support. Check our Performance page for browser compatibility details.',
      icon: 'bx-world'
    },
    {
      category: 'seo',
      question: 'Is 3D web design SEO-friendly?',
      answer: 'Yes, when implemented correctly. 3D elements are typically supplementary to HTML content, so they don\'t negatively impact SEO. Best practices include using semantic HTML, proper meta tags, descriptive alt text for 3D assets, and ensuring core content is accessible without requiring 3D rendering. Google can index text content while 3D elements enhance user experience.',
      icon: 'bx-search-alt'
    },
    {
      category: 'basics',
      question: 'When should I use 3D in my website?',
      answer: '3D works best when it serves a clear purpose: product visualization (e-commerce), brand storytelling, architectural visualization, educational content, gaming experiences, or creating memorable brand moments. Consider your audience, goals, and budget. If 3D enhances understanding, engagement, or conversion, it\'s likely worth the investment. Explore our Use Cases page for inspiration.',
      icon: 'bx-check-circle'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: 'bx-list-ul' },
    { id: 'basics', name: 'Basics', icon: 'bx-book' },
    { id: 'technology', name: 'Technology', icon: 'bx-code-alt' },
    { id: 'performance', name: 'Performance', icon: 'bx-tachometer' },
    { id: 'business', name: 'Business', icon: 'bx-briefcase' },
    { id: 'accessibility', name: 'Accessibility', icon: 'bx-accessibility' },
    { id: 'compatibility', name: 'Compatibility', icon: 'bx-world' },
    { id: 'seo', name: 'SEO', icon: 'bx-search-alt' },
    { id: 'implementation', name: 'Implementation', icon: 'bx-cog' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <HeroSecondary 
        title="FAQ"
        subtitle="Answers to common questions about 3D in modern web design"
      />

      <section className="max-w-6xl mx-auto py-20 px-4 lg:px-20">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#656565] to-[#e99b63] text-white'
                    : 'bg-gray-900/50 border border-gray-800 text-gray-400 hover:border-[#e99b63] hover:text-[#e99b63]'
                }`}
              >
                <i className={`bx ${category.icon}`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div ref={contentRef} className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-[#e99b63]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <i className={`bx ${faq.icon} text-[#e99b63] text-2xl flex-shrink-0`}></i>
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                </div>
                <i
                  className={`bx ${
                    openIndex === index ? 'bx-chevron-up' : 'bx-chevron-down'
                  } text-2xl text-[#e99b63] flex-shrink-0 group-hover:scale-110 transition-transform`}
                ></i>
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-6 pl-20">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 bg-gradient-to-r from-[#656565]/20 to-[#e99b63]/20 rounded-3xl p-8 border border-gray-800 text-center">
          <i className='bx bx-help-circle text-5xl text-[#e99b63] mb-4'></i>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll respond as soon as possible.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 font-medium"
            >
              <i className='bx bx-envelope'></i>
              Contact Us
            </Link>
            <Link
              to="/technologies"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-600 text-white px-8 py-3 rounded-full hover:border-[#e99b63] hover:text-[#e99b63] transition-all duration-300 font-medium"
            >
              <i className='bx bx-code-alt'></i>
              Explore Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

