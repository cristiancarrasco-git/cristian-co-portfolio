import { Link } from 'react-router';
import { Logo } from './Logo';
import { Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'Perspective', path: '/perspective' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

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
            name: 'Footer Contact',
            email: formData.email,
            message: formData.message,
            page: 'footer',
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent!');
        setFormData({ email: '', message: '' });
        // Clear success message after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to send.');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting footer contact form:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error.');
      setTimeout(() => setSubmitStatus('idle'), 3000);
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
    <footer className="bg-gray-900 text-gray-300 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* About Section */}
          <div>
            <div className="mb-4 brightness-0 invert">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Multidisciplinary designer crafting meaningful experiences through strategic 
              thinking and creative execution. Specializing in product design, motion graphics, 
              and visual storytelling.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Based in San Jose, CA</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white mb-4">Navigation</h3>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-white mb-4">Get In Touch</h3>
            <form 
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500 text-sm"
              />
              <textarea
                name="message"
                placeholder="Quick message..."
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500 text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-500 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{statusMessage}</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-500 mt-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" />
            <a href="mailto:cristian.carrasco@sjsu.edu" className="hover:text-white transition-colors">
              cristian.carrasco@sjsu.edu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}