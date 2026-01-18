/**
 * Legal Notice Page
 * Legal information and company details
 */
import { Link } from 'react-router-dom';
import HeroLegal from '../components/HeroLegal';

const LegalNotice = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen">
      <HeroLegal 
        title="Legal Notice"
        subtitle="Legal information, company details, and legal framework for 3DAnimate"
      />

      <section className="max-w-5xl mx-auto py-16 px-4 lg:px-20">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            This page provides essential legal information about 3DAnimate, including company details, intellectual property rights, and important disclaimers.
          </p>
        </div>

        {/* Company Information */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-building text-[#e99b63]'></i>
            Company Information
          </h2>
          <div className="text-gray-300 space-y-4 max-w-2xl mx-auto text-left">
            <div>
              <strong className="text-white">Project Name:</strong> 3DAnimate
            </div>
            <div>
              <strong className="text-white">Description:</strong> An informational website dedicated to exploring the benefits and applications of 3D technology in modern web design.
            </div>
            <div>
              <strong className="text-white">Website Version:</strong> 1.2.0
            </div>
            <div>
              <strong className="text-white">Last Updated:</strong> {lastUpdated}
            </div>
          </div>
        </div>

        {/* Website Hosting */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-server text-[#e99b63]'></i>
            Website Hosting
          </h2>
          <div className="text-gray-300 space-y-4 max-w-3xl mx-auto leading-relaxed">
            <p>
              This website operates as an open-source educational project. All hosting and infrastructure details are publicly available through the project repository for transparency and collaboration.
            </p>
            <p>
              For technical specifications, deployment information, or contribution guidelines, please refer to the project's official repository.
            </p>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-copyright text-[#e99b63]'></i>
            Intellectual Property
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              All content displayed on this website, including but not limited to text, graphics, logos, images, and 3D models, is protected under applicable intellectual property laws.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Content Ownership</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Website design and structure are proprietary</li>
                <li>Written content and documentation are protected</li>
                <li>Brand identity and visual elements are trademarked</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Third-Party Assets</h3>
              <p>
                Some 3D models and animations used on this site may be subject to separate licenses (including open-source licenses). Users are responsible for reviewing and complying with individual asset licensing terms when applicable.
              </p>
            </div>
            <p className="font-medium text-white">
              Unauthorized reproduction, distribution, or commercial use of protected content is strictly prohibited.
            </p>
          </div>
        </div>

        {/* Legal Inquiries */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-envelope text-[#e99b63]'></i>
            Legal Inquiries
          </h2>
          <div className="text-gray-300 space-y-4 max-w-3xl mx-auto leading-relaxed">
            <p>
              For any legal questions, concerns, or formal requests regarding this website, please use our <Link to="/contact" className="text-[#e99b63] hover:underline">contact form</Link>.
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Response Time:</strong> We aim to respond to all legal inquiries within 5-7 business days.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-info-circle text-[#e99b63]'></i>
            Disclaimer
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              The information provided on this website is for general informational and educational purposes only. While we make every effort to ensure accuracy and currency of information, we cannot guarantee the completeness or correctness of all content.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">No Warranties</h3>
              <p className="mb-3">
                We provide this information "as is" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accuracy or completeness of information</li>
                <li>Suitability for any particular purpose</li>
                <li>Availability or uninterrupted access to the website</li>
              </ul>
            </div>
            <p className="font-medium text-white">
              Any reliance you place on such information is strictly at your own discretion and risk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
