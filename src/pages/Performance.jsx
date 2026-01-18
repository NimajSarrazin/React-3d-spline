/**
 * Performance & Accessibility Page
 * Explains how 3D maintains performance while being accessible
 */
import { useStagger } from '../hooks/useGSAP';
import HeroSecondary from '../components/HeroSecondary';

const Performance = () => {
  const featuresRef = useStagger({ delay: 0.2, stagger: 0.15 });

  const performanceFeatures = [
    {
      icon: 'bx-tachometer',
      title: 'Optimization Strategies',
      description: 'Modern 3D libraries use advanced techniques like LOD (Level of Detail), frustum culling, and efficient rendering pipelines.',
      details: [
        'Level of Detail (LOD) rendering',
        'Frustum culling for off-screen objects',
        'Texture compression and caching',
        'GPU-accelerated rendering'
      ]
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Mobile Performance',
      description: 'Responsive 3D experiences adapt to device capabilities, ensuring smooth performance on all platforms.',
      details: [
        'Adaptive quality settings',
        'Battery-aware rendering',
        'Touch-optimized interactions',
        'Progressive loading'
      ]
    },
    {
      icon: 'bx-network-chart',
      title: 'Load Time Optimization',
      description: 'Intelligent loading strategies ensure fast initial page loads while 3D assets load in the background.',
      details: [
        'Lazy loading for 3D assets',
        'Streaming content delivery',
        'Asset bundling and compression',
        'CDN distribution'
      ]
    },
    {
      icon: 'bx-line-chart',
      title: 'Performance Monitoring',
      description: 'Real-time performance metrics help optimize experiences and maintain target frame rates.',
      details: [
        'FPS monitoring',
        'Memory usage tracking',
        'Render time analysis',
        'User experience metrics'
      ]
    }
  ];

  const accessibilityFeatures = [
    {
      icon: 'bx-accessibility',
      title: 'Reduced Motion Support',
      description: 'Respect user preferences for reduced motion while maintaining core functionality.',
      implementation: 'Use prefers-reduced-motion media query to disable animations'
    },
    {
      icon: 'bx-keyboard',
      title: 'Keyboard Navigation',
      description: 'All 3D interactions accessible via keyboard for users who cannot use a mouse.',
      implementation: 'Implement keyboard controls and focus management'
    },
    {
      icon: 'bx-text',
      title: 'Screen Reader Support',
      description: 'Proper ARIA labels and semantic HTML ensure 3D content is accessible to screen readers.',
      implementation: 'Use ARIA attributes and descriptive alt text'
    },
    {
      icon: 'bx-slider-alt',
      title: 'Customizable Controls',
      description: 'Allow users to adjust interaction sensitivity, motion, and visual settings.',
      implementation: 'Provide settings panel for accessibility preferences'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSecondary 
        subtitle="Modern 3D web experiences can be both performant and accessible when implemented thoughtfully."
      />

      {/* Performance Section */}
      <section className="max-w-7xl mx-auto mb-20 py-20 px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Performance Optimization</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ensuring smooth 60fps experiences without sacrificing visual quality
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 gap-8">
          {performanceFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#e99b63] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-xl flex items-center justify-center mb-6">
                <i className={`bx ${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <i className='bx bx-check text-[#e99b63] mt-0.5'></i>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="max-w-7xl mx-auto mb-20 px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Best Practices</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Making 3D experiences inclusive for all users
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {accessibilityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#e99b63] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-xl flex items-center justify-center mb-6">
                <i className={`bx ${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                <p className="text-sm text-gray-300 font-mono">{feature.implementation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="max-w-6xl mx-auto px-4 lg:px-20 pb-20">
        <div className="bg-gradient-to-r from-[#656565]/20 to-[#e99b63]/20 rounded-3xl p-12 border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Performance Targets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e99b63] mb-2">60 FPS</div>
              <p className="text-gray-400">Target frame rate for smooth animations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e99b63] mb-2">&lt;3s</div>
              <p className="text-gray-400">Initial load time target</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e99b63] mb-2">&lt;100MB</div>
              <p className="text-gray-400">Total asset size recommendation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;

