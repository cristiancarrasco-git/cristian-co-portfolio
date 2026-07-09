import { motion } from 'motion/react';
import { PageWrapper } from '../components/PageWrapper';
import { Mail, Phone, Linkedin, Instagram, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d5cb2ac/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            ...formData,
            page: 'contact',
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageWrapper>
      <section className="py-12 md:py-20 px-4 md:px-6 min-h-[calc(100vh-5rem)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-6xl mb-4 md:mb-6">Let's Talk</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you need a quote, want to schedule a meeting, or just want to start 
              a conversation about your next project, I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="lg:col-span-2"
            >
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800">{statusMessage}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800">{statusMessage}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a
                        href="mailto:cristian.carrasco@sjsu.edu"
                        className="text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        cristian.carrasco@sjsu.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <a
                        href="tel:+14084834590"
                        className="text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        +1 (408) 483-4590
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/cristian-carrasco-9b106a327/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors group"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/cristian.carasco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-colors group"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://devvlog3.wordpress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors group"
                  >
                    <Globe className="w-5 h-5" />
                    <span>WordPress Blog</span>
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-lg mb-3">Availability</h3>
                <p className="text-gray-600">
                  Currently accepting new projects for Q2 2026. Typical response time is 
                  within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}