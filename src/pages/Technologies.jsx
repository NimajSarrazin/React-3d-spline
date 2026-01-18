/**
 * Technologies Page
 * Overview of technologies used for 3D web development
 */
import { useStagger } from '../hooks/useGSAP';
import HeroSecondary from '../components/HeroSecondary';

const Technologies = () => {
  const techRef = useStagger({ delay: 0.2, stagger: 0.1 });

  const technologies = [
    {
      name: 'Three.js',
      icon: 'bx-cube',
      category: '3D Library',
      description: 'The most popular JavaScript 3D library, providing a complete solution for creating 3D graphics in the browser.',
      features: ['WebGL renderer', 'Scene graph', 'Geometry & materials', 'Animation system', 'Post-processing'],
      website: 'https://threejs.org'
    },
    {
      name: 'React Three Fiber',
      icon: 'bx-react',
      category: 'React Integration',
      description: 'React renderer for Three.js, bringing declarative components to 3D web development.',
      features: ['React components', 'Hooks API', 'Declarative syntax', 'TypeScript support', 'Ecosystem'],
      website: 'https://docs.pmnd.rs/react-three-fiber'
    },
    {
      name: 'GSAP',
      icon: 'bx-trending-up',
      category: 'Animation',
      description: 'Professional-grade animation library for creating smooth, performant animations.',
      features: ['Timeline control', 'Scroll triggers', 'Physics animations', 'Plugin system', 'Performance'],
      website: 'https://gsap.com'
    },
    {
      name: 'Spline',
      icon: 'bx-shape-triangle',
      category: 'Design Tool',
      description: 'Browser-based 3D design tool that exports to web with zero code required.',
      features: ['Visual editor', 'Real-time collaboration', 'Web export', 'Interactions', 'Easy integration'],
      website: 'https://spline.design'
    },
    {
      name: 'Babylon.js',
      icon: 'bx-cuboid',
      category: '3D Engine',
      description: 'Powerful 3D engine with advanced features for complex 3D applications.',
      features: ['Physics engine', 'PBR materials', 'VR/AR support', 'Asset pipeline', 'Community'],
      website: 'https://babylonjs.com'
    },
    {
      name: 'WebGL',
      icon: 'bx-code-alt',
      category: 'Low-Level API',
      description: 'JavaScript API for rendering interactive 3D graphics directly in the browser.',
      features: ['GPU acceleration', 'Native browser support', 'Low-level control', 'Performance', 'Standard'],
      website: 'https://webgl.dev'
    },
    {
      name: 'Framer Motion',
      icon: 'bx-move',
      category: 'Animation',
      description: 'React animation library with powerful gesture and layout animation capabilities.',
      features: ['React-first', 'Gesture support', 'Layout animations', 'Variants', 'Easy API'],
      website: 'https://framer.com/motion'
    },
    {
      name: 'Blender',
      icon: 'bx-cube-alt',
      category: '3D Modeling',
      description: 'Free, open-source 3D creation suite for modeling, animation, and rendering.',
      features: ['Modeling tools', 'Animation', 'Rendering', 'Free & open-source', 'Export options'],
      website: 'https://blender.org'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSecondary 
        subtitle="Explore the powerful tools and libraries that make 3D web experiences possible."
      />

      {/* Technologies Grid */}
      <div className="py-20 px-4 lg:px-20">
        <div ref={techRef} className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#e99b63] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`bx ${tech.icon} text-3xl text-white`}></i>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{tech.description}</p>
              
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <i className='bx bx-check text-[#e99b63] mt-0.5'></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {tech.website && (
                <a
                  href={tech.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#e99b63] hover:text-[#e99b63]/80 transition-colors text-sm font-medium"
                >
                  Learn More
                  <i className='bx bx-link-external'></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Learning Resources Section */}
      <section className="max-w-6xl mx-auto mt-20 px-4 lg:px-20 pb-20">
        <div className="bg-gradient-to-r from-[#656565]/20 to-[#e99b63]/20 rounded-3xl p-12 border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Getting Started
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <i className='bx bx-book-reader text-[#e99b63]'></i>
                Learning Resources
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Three.js Journey</li>
                <li>• React Three Fiber Documentation</li>
                <li>• GSAP Learning Center</li>
                <li>• WebGL Fundamentals</li>
              </ul>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <i className='bx bx-code-curly text-[#e99b63]'></i>
                Best Practices
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Start with Three.js basics</li>
                <li>• Use React Three Fiber for React apps</li>
                <li>• Optimize assets and textures</li>
                <li>• Test on various devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;

