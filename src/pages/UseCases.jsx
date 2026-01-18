/**
 * Use Cases Page
 * Showcases different applications of 3D in web design
 */
import { useStagger } from '../hooks/useGSAP';
import HeroSecondary from '../components/HeroSecondary';

const UseCases = () => {
  const cardsRef = useStagger({ delay: 0.2, stagger: 0.15 });

  const useCases = [
    {
      icon: 'bx-shopping-bag',
      title: 'E-commerce & Products',
      description: 'Showcase products in 360° views, allowing customers to inspect every detail before purchasing.',
      features: [
        'Interactive product visualization',
        'Virtual try-on experiences',
        '3D product configurators',
        'Immersive shopping experiences'
      ],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: 'bx-briefcase',
      title: 'Portfolios & Showcases',
      description: 'Display creative work, architectural projects, or design portfolios in stunning 3D environments.',
      features: [
        'Interactive portfolio galleries',
        'Virtual art exhibitions',
        'Architectural visualizations',
        'Design project presentations'
      ],
      gradient: 'from-pink-600 to-orange-600'
    },
    {
      icon: 'bx-megaphone',
      title: 'Marketing & Advertising',
      description: 'Create memorable campaigns and landing pages that capture attention and drive conversions.',
      features: [
        'Engaging landing pages',
        'Interactive advertisements',
        'Brand storytelling experiences',
        'Viral marketing campaigns'
      ],
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: 'bx-book',
      title: 'Education & Training',
      description: 'Teach complex concepts through interactive 3D models and immersive learning experiences.',
      features: [
        'Interactive educational content',
        'Virtual laboratories',
        'Anatomical visualizations',
        'Historical reconstructions'
      ],
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      icon: 'bx-building',
      title: 'Real Estate & Architecture',
      description: 'Present properties and architectural designs in immersive virtual tours and walkthroughs.',
      features: [
        'Virtual property tours',
        'Architectural walkthroughs',
        'Space planning tools',
        'Interior design previews'
      ],
      gradient: 'from-amber-600 to-red-600'
    },
    {
      icon: 'bx-game',
      title: 'Gaming & Entertainment',
      description: 'Build browser-based games and interactive entertainment experiences with WebGL.',
      features: [
        'Browser-based games',
        'Interactive storytelling',
        'Virtual experiences',
        'Entertainment platforms'
      ],
      gradient: 'from-violet-600 to-fuchsia-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSecondary 
        subtitle="Discover how 3D transforms industries and creates engaging user experiences across various sectors."
      />

      {/* Use Cases Grid */}
      <div className="py-20 px-4 lg:px-20">
        <div ref={cardsRef} className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#e99b63] transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`bx ${useCase.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <i className='bx bx-check text-[#e99b63] mt-0.5'></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Examples Section */}
      <section className="max-w-6xl mx-auto mt-20 px-4 lg:px-20 pb-20">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Beyond Traditional Boundaries
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto leading-relaxed mb-8">
            The applications of 3D in web design are virtually limitless. From healthcare visualizations to financial data representation, 3D elements enhance understanding and engagement across all industries.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <i className='bx bx-plus-medical text-4xl text-[#e99b63]'></i>
              <div>
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-400">Medical visualizations, patient education, surgical planning</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className='bx bx-bar-chart-alt-2 text-4xl text-[#e99b63]'></i>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
                <p className="text-gray-400">Complex data in intuitive 3D formats</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className='bx bx-car text-4xl text-[#e99b63]'></i>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automotive</h3>
                <p className="text-gray-400">Car configurators, virtual showrooms</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className='bx bx-palette text-4xl text-[#e99b63]'></i>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fashion</h3>
                <p className="text-gray-400">Virtual try-ons, runway experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;

