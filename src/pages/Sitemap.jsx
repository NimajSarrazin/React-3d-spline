/**
 * Sitemap Page
 * Complete sitemap of all pages on the website
 */
import { Link } from 'react-router-dom';
import HeroSecondary from '../components/HeroSecondary';
import { useStagger } from '../hooks/useGSAP';
import { navbarData } from '../data/Nav';

const Sitemap = () => {
  const contentRef = useStagger({ delay: 0.2, stagger: 0.1 });

  const allPages = [
    ...navbarData,
    { id: 7, name: 'Legal Notice', href: '/legal-notice' },
    { id: 8, name: 'Privacy Policy', href: '/privacy-policy' },
    { id: 9, name: 'Terms of Service', href: '/terms-of-service' },
    { id: 10, name: 'Sitemap', href: '/sitemap' },
    { id: 11, name: 'FAQ', href: '/faq' }
  ];

  return (
    <div className="min-h-screen">
      <HeroSecondary 
        title="Sitemap"
        subtitle="Complete overview of all pages on the 3DAnimate website"
      />

      <section className="max-w-6xl mx-auto py-20 px-4 lg:px-20">
        <div ref={contentRef} className="space-y-6">
          {/* Introduction */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <i className='bx bx-sitemap text-[#e99b63] text-2xl'></i>
              <h2 className="text-3xl font-bold text-white">Site Navigation</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              This sitemap provides a complete overview of all pages available on 3DAnimate. Use it to quickly find and navigate to any section of our website.
            </p>
          </div>

          {/* Main Navigation Pages */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <i className='bx bx-home text-[#e99b63] text-2xl'></i>
              <h2 className="text-3xl font-bold text-white">Main Pages</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm">Explore our primary content sections covering 3D web design topics.</p>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navbarData.map((page) => (
                <li key={page.id}>
                  <Link
                    to={page.href}
                    className="text-gray-400 hover:text-[#e99b63] transition-colors flex items-center gap-2 group"
                  >
                    <i className='bx bx-chevron-right text-[#e99b63] group-hover:translate-x-1 transition-transform'></i>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Information Pages */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <i className='bx bx-file-blank text-[#e99b63] text-2xl'></i>
              <h2 className="text-3xl font-bold text-white">Legal & Information</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm">Important legal documents, policies, and informational resources.</p>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li>
                <Link
                  to="/legal-notice"
                  className="text-gray-400 hover:text-[#e99b63] transition-colors flex items-center gap-2 group"
                >
                  <i className='bx bx-chevron-right text-[#e99b63] group-hover:translate-x-1 transition-transform'></i>
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-[#e99b63] transition-colors flex items-center gap-2 group"
                >
                  <i className='bx bx-chevron-right text-[#e99b63] group-hover:translate-x-1 transition-transform'></i>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-[#e99b63] transition-colors flex items-center gap-2 group"
                >
                  <i className='bx bx-chevron-right text-[#e99b63] group-hover:translate-x-1 transition-transform'></i>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-[#e99b63] transition-colors flex items-center gap-2 group"
                >
                  <i className='bx bx-chevron-right text-[#e99b63] group-hover:translate-x-1 transition-transform'></i>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#e99b63] transition-colors flex items-center gap-2 group"
                >
                  <i className='bx bx-chevron-right text-[#e99b63] group-hover:translate-x-1 transition-transform'></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <i className='bx bx-link text-[#e99b63] text-2xl'></i>
              <h2 className="text-3xl font-bold text-white">Quick Links by Category</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300 flex items-center gap-2">
                  <i className='bx bx-book text-[#e99b63]'></i>
                  Content Pages
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/why-3d" className="text-gray-400 hover:text-[#e99b63] transition-colors">
                      Why 3D in Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/use-cases" className="text-gray-400 hover:text-[#e99b63] transition-colors">
                      Use Cases
                    </Link>
                  </li>
                  <li>
                    <Link to="/performance" className="text-gray-400 hover:text-[#e99b63] transition-colors">
                      Performance & Accessibility
                    </Link>
                  </li>
                  <li>
                    <Link to="/technologies" className="text-gray-400 hover:text-[#e99b63] transition-colors">
                      Technologies
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300 flex items-center gap-2">
                  <i className='bx bx-support text-[#e99b63]'></i>
                  Support
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/faq" className="text-gray-400 hover:text-[#e99b63] transition-colors">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-400 hover:text-[#e99b63] transition-colors">
                      Get in Touch
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/SMOOTH_ANIMATIONS.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#e99b63] transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* All Pages List */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <i className='bx bx-list-ul text-[#e99b63] text-2xl'></i>
              <h2 className="text-3xl font-bold text-white">Complete Page Index</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm">A comprehensive list of all pages on the website in alphabetical order.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allPages.map((page) => (
                <Link
                  key={page.id}
                  to={page.href}
                  className="text-gray-400 hover:text-[#e99b63] transition-colors flex items-center gap-2 group"
                >
                  <i className='bx bx-link text-[#e99b63] text-sm'></i>
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;

