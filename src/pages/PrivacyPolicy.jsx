/**
 * Privacy Policy Page
 * Privacy policy and data protection information
 */
import { Link } from 'react-router-dom';
import HeroLegal from '../components/HeroLegal';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen">
      <HeroLegal 
        title="Privacy Policy"
        subtitle="Transparent information about how we collect, use, and protect your personal data"
      />

      <section className="max-w-5xl mx-auto py-16 px-4 lg:px-20">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At 3DAnimate, your privacy is important to us. We are committed to protecting your personal data and being transparent about our data practices. This policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>
          <p className="text-gray-500 text-sm mt-6">
            <strong className="text-gray-400">Policy Last Updated:</strong> {lastUpdated}
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-data text-[#e99b63]'></i>
            Information We Collect
          </h2>
          <div className="text-gray-300 space-y-8 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              We only collect information that is necessary to provide and improve our services. We collect data in the following categories:
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address (voluntarily provided when subscribing to our newsletter)</li>
                <li>Name and contact details (when using our contact form)</li>
                <li>Any additional information you choose to share with us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Usage Data</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pages visited and time spent on pages</li>
                <li>Navigation patterns and user interactions</li>
                <li>Referral sources and entry points</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Data</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>Device information (type, operating system)</li>
                <li>IP address (anonymized when possible)</li>
                <li>Screen resolution and display settings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-target-lock text-[#e99b63]'></i>
            How We Use Your Information
          </h2>
          <div className="text-gray-300 space-y-8 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              We use your information only for legitimate purposes to enhance your experience and improve our services. Here's how:
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Communication</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Send newsletter updates (with your explicit consent)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Provide important service-related notifications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Service Improvement</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analyze usage patterns to improve website functionality</li>
                <li>Identify and fix technical issues</li>
                <li>Enhance user experience based on feedback</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Security & Legal</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Protect against fraud and unauthorized access</li>
                <li>Ensure website security and integrity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Analytics</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understand how visitors interact with our content</li>
                <li>Measure content effectiveness</li>
                <li>Optimize website performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Security & Storage */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-lock-alt text-[#e99b63]'></i>
            Data Security & Storage
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Security Measures</h3>
              <p className="mb-4">
                We implement industry-standard technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encrypted data transmission (HTTPS/SSL)</li>
                <li>Secure server infrastructure</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Retention</h3>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>
          </div>
        </div>

        {/* Your Privacy Rights */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-user-check text-[#e99b63]'></i>
            Your Privacy Rights
          </h2>
          <div className="text-gray-300 space-y-8 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              You have comprehensive rights regarding your personal data. You can exercise these rights at any time:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
              <li><strong className="text-white">Deletion:</strong> Request removal of your data</li>
              <li><strong className="text-white">Withdrawal:</strong> Unsubscribe from newsletters anytime</li>
            </ul>
            <p className="text-gray-400">
              <strong className="text-white">To exercise your rights:</strong> Contact us through our <Link to="/contact" className="text-[#e99b63] hover:underline">contact form</Link>. We will respond within 30 days.
            </p>
          </div>
        </div>

        {/* Cookies & Tracking */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-cookie text-[#e99b63]'></i>
            Cookies & Tracking
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience and gather analytics data.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality and security</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </div>
            <p>
              You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
            </p>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-link-external text-[#e99b63]'></i>
            Third-Party Services
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              Our website may integrate with third-party services to enhance functionality and user experience. These services operate under their own privacy policies.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Services We May Use</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analytics platforms (to understand website usage)</li>
                <li>Newsletter platforms (for email communications)</li>
                <li>Content delivery networks (for fast loading times)</li>
                <li>3D rendering services (for interactive experiences)</li>
              </ul>
            </div>
            <p className="text-gray-400">
              We carefully select third-party partners and encourage you to review their privacy policies. We are not responsible for the privacy practices of external services.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-message-dots text-[#e99b63]'></i>
            Questions About Privacy?
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed">
            <p>
              We're here to help. If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to reach out.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 font-medium"
              >
                <i className='bx bx-envelope'></i>
                Contact Us
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-600 text-white px-6 py-3 rounded-full hover:border-[#e99b63] hover:text-[#e99b63] transition-all duration-300 font-medium"
              >
                <i className='bx bx-help-circle'></i>
                Visit FAQ
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              We are committed to transparency and addressing any privacy concerns promptly and professionally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
