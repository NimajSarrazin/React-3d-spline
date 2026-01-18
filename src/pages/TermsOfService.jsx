/**
 * Terms of Service Page
 * Terms and conditions for using the website
 */
import { Link } from 'react-router-dom';
import HeroLegal from '../components/HeroLegal';

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen">
      <HeroLegal 
        title="Terms of Service"
        subtitle="Terms and conditions governing your use of the 3DAnimate website"
      />

      <section className="max-w-5xl mx-auto py-16 px-4 lg:px-20">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
          <p className="text-gray-500 text-sm mt-6">
            <strong className="text-gray-400">Effective Date:</strong> {lastUpdated}
          </p>
          <p className="text-gray-400 text-sm mt-4">
            If you do not agree with any part of these terms, you must not use this website.
          </p>
        </div>

        {/* Permitted Use */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-check-circle text-[#e99b63]'></i>
            Permitted Use
          </h2>
          <div className="text-gray-300 space-y-8 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              You are granted permission to access and use this website for personal, non-commercial, informational purposes. This license is non-transferable and may be revoked at any time.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What You May Do</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browse and view website content for personal use</li>
                <li>Share links to pages via social media</li>
                <li>Print pages for personal reference</li>
                <li>Use information for educational purposes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What You May Not Do</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify, copy, or reproduce website content without permission</li>
                <li>Use materials for commercial purposes</li>
                <li>Attempt to decompile, reverse engineer, or extract source code</li>
                <li>Remove copyright notices, trademarks, or proprietary marks</li>
                <li>Redistribute or republish content without authorization</li>
                <li>Use automated systems to scrape or collect data</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Responsibilities */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-user-check text-[#e99b63]'></i>
            Your Responsibilities
          </h2>
          <div className="text-gray-300 space-y-8 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              When using this website, you are responsible for your actions and agree to use the service lawfully and ethically.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Information Accuracy</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide truthful and accurate information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Update your information when it changes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Prohibited Activities</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No unlawful or fraudulent activities</li>
                <li>No unauthorized access attempts</li>
                <li>No interference with website operations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Respect Others</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respect intellectual property rights</li>
                <li>Do not transmit harmful or malicious content</li>
                <li>Follow applicable laws and regulations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">System Security</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Do not disrupt or damage website infrastructure</li>
                <li>Do not introduce viruses or malware</li>
                <li>Report security vulnerabilities responsibly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Website Disclaimer */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-error-circle text-[#e99b63]'></i>
            Website Disclaimer
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              All content, materials, and services on this website are provided "as is" without warranties of any kind. We disclaim all warranties, both express and implied, to the fullest extent permitted by law.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">No Warranties</h3>
              <p className="mb-4">We make no warranties regarding:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accuracy or completeness of information</li>
                <li>Suitability for your specific needs</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Non-infringement of third-party rights</li>
              </ul>
            </div>
            <p>
              Information may contain technical inaccuracies or typographical errors. We reserve the right to make changes at any time without notice.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-shield-x text-[#e99b63]'></i>
            Limitation of Liability
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              To the maximum extent permitted by law, 3DAnimate and its affiliates, suppliers, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Loss of data or information</li>
              <li>Loss of profits or business opportunities</li>
              <li>Business interruption</li>
              <li>Damages resulting from use or inability to use the website</li>
            </ul>
            <p className="text-gray-400">
              Our total liability for any claims arising from your use of this website shall not exceed the amount you paid (if any) to access this service, or $100, whichever is greater.
            </p>
          </div>
        </div>

        {/* Content Accuracy & Updates */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-edit-alt text-[#e99b63]'></i>
            Content Accuracy & Updates
          </h2>
          <div className="text-gray-300 space-y-4 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              We strive to provide accurate and up-to-date information, but we do not warrant that all content is complete, current, or error-free. Website content may contain technical inaccuracies, typographical errors, or outdated information.
            </p>
            <p>
              We reserve the right to modify, update, or remove content at any time without prior notice. We are not obligated to update information or notify users of changes.
            </p>
          </div>
        </div>

        {/* External Links */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-link text-[#e99b63]'></i>
            External Links
          </h2>
          <div className="text-gray-300 space-y-4 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              This website may contain links to external websites operated by third parties. These links are provided for your convenience and informational purposes only.
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Important:</strong> We have no control over the content, privacy practices, or terms of service of third-party websites. We are not responsible for any content or practices on external sites.
            </p>
            <p>
              The inclusion of external links does not constitute endorsement, sponsorship, or approval by 3DAnimate. Access third-party sites at your own risk.
            </p>
          </div>
        </div>

        {/* Governing Law & Dispute Resolution */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-gavel text-[#e99b63]'></i>
            Governing Law & Dispute Resolution
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Applicable Law</h3>
              <p>
                These Terms of Service are governed by and construed in accordance with applicable local and international laws, without regard to conflict of law principles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Jurisdiction</h3>
              <p>
                Any disputes arising from or relating to these terms or your use of this website shall be subject to the exclusive jurisdiction of the competent courts in the applicable jurisdiction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Dispute Resolution</h3>
              <p>
                Before initiating formal legal proceedings, we encourage you to contact us through our <Link to="/contact" className="text-[#e99b63] hover:underline">contact page</Link> to resolve any disputes amicably.
              </p>
            </div>
          </div>
        </div>

        {/* Updates to Terms */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <i className='bx bx-time-five text-[#e99b63]'></i>
            Updates to Terms
          </h2>
          <div className="text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed text-left">
            <p>
              We reserve the right to modify, update, or change these Terms of Service at any time. Material changes will be indicated by updating the "Last Updated" date at the top of this page.
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Your Continued Use:</strong> By continuing to use this website after changes are posted, you acknowledge that you have read, understood, and agree to be bound by the updated terms.
            </p>
            <p>
              <strong className="text-white">Last Updated:</strong> {lastUpdated}
            </p>
            <p className="text-gray-400 text-sm mt-4">
              We recommend reviewing these terms periodically to stay informed of any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
