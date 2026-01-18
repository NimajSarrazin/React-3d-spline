/**
 * Contact Page
 * Contact form and information page
 */
import { useFadeIn, useStagger } from '../hooks/useGSAP';
import { useState } from 'react';
import HeroSecondary from '../components/HeroSecondary';

const Contact = () => {
  const formRef = useFadeIn({ delay: 0.2 });
  const infoRef = useStagger({ delay: 0.3, stagger: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'bx-envelope',
      title: 'Email',
      content: 'hello@3danimate.com',
      link: 'mailto:hello@3danimate.com'
    },
    {
      icon: 'bx-globe',
      title: 'Website',
      content: 'www.3danimate.com',
      link: 'https://www.3danimate.com'
    },
    {
      icon: 'bx-map',
      title: 'Location',
      content: 'Remote Team Worldwide',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSecondary 
        title="Contact"
        subtitle="Have questions about 3D web design? We'd love to hear from you."
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-20 px-4 lg:px-20">
        {/* Contact Form */}
        <section ref={formRef}>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#e99b63] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#e99b63] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#e99b63] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-8">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div ref={infoRef} className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`bx ${info.icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-[#e99b63] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">How long does a 3D project take?</h3>
                <p className="text-gray-400 text-sm">
                  Timeline varies based on complexity, typically ranging from 2-8 weeks for most projects.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">Do you work with all industries?</h3>
                <p className="text-gray-400 text-sm">
                  Yes, we work with clients across various industries including e-commerce, architecture, gaming, and more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">What's the performance impact?</h3>
                <p className="text-gray-400 text-sm">
                  When optimized properly, 3D elements can maintain 60fps performance without significant impact on load times.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

