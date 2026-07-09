import { useState } from 'react';
import { motion } from 'motion/react';
import { PageWrapper } from '../components/PageWrapper';
import { AnimatedHeader } from '../components/AnimatedHeader';
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import aboutImage from 'figma:asset/f075bb9ee9b0d915e80556eb7824c301654d00ec.png';
import synthGameImage from 'figma:asset/89493c58301463ba199f37561dd3a618b0d797f3.png';
import motionDesignImage from 'figma:asset/7d82fa168b126249481e59132915d08666d8f68f.png';
import image_4edccd65953be46aaaedce8ec92d924dbaca07b1 from 'figma:asset/4edccd65953be46aaaedce8ec92d924dbaca07b1.png';
import deepfakedImage from 'figma:asset/020630d6421c3d30cf67243f54e7d90bce490e99.jpg';
import punkPosterImage from 'figma:asset/f1cd33ec8e9345bd0f679a276e7ecf94cd459301.jpg';
import perspectiveImage from 'figma:asset/a0423fe6adf7f02d500cc70b357a95e043179c49.png';
import image_9071a723199c3cefb7f2902f5ee0a87332ada649 from 'figma:asset/9071a723199c3cefb7f2902f5ee0a87332ada649.png';
import image_c888dffda05fa8b80dba7801fcd744cdfc18652d from 'figma:asset/c888dffda05fa8b80dba7801fcd744cdfc18652d.png';
import image_9cf8e81592317c3ffc09cfed1a2736b7227dc6b8 from 'figma:asset/9cf8e81592317c3ffc09cfed1a2736b7227dc6b8.png';

const services = [
  {
    title: 'Product Design',
    subtitle: 'Digital experiences that users love',
    description: 'Creating intuitive interfaces and user experiences that balance aesthetics with functionality. From wireframes to high-fidelity prototypes, I design digital products that solve real problems.',
    image: synthGameImage,
  },
  {
    title: 'Motion Graphics',
    subtitle: 'Bringing stories to life through animation',
    description: 'Dynamic visual narratives that engage and inform. I create animations for branding, marketing, and storytelling that captivate audiences and communicate messages effectively.',
    image: motionDesignImage,
  },
  {
    title: 'Graphic Design',
    subtitle: 'Visual communication that resonates',
    description: 'From branding to print design, I create visual systems that communicate clearly and leave lasting impressions. Every element is crafted with intention and purpose.',
    image: image_4edccd65953be46aaaedce8ec92d924dbaca07b1,
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Conceptualizing',
    description: 'Before settling on an idea, let any and all ideas out to see the pros and cons. This brainstorming phase is crucial for exploring creative possibilities and identifying the strongest concepts.',
    image: perspectiveImage,
  },
  {
    number: 2,
    title: 'Guidelines & Metrics',
    description: 'Finding out what our users are going to benefit most from and how we can help to achieve this while meeting our metrics. Data-driven insights guide our design decisions.',
    image: image_9071a723199c3cefb7f2902f5ee0a87332ada649,
  },
  {
    number: 3,
    title: 'Establishing Important Markers',
    description: 'Settling down on some ideas that we can predict will work best for our mission. Strategic planning ensures we stay aligned with project goals and user needs.',
    image: punkPosterImage,
  },
  {
    number: 4,
    title: 'Prototyping',
    description: 'This is where we start to present our fleshed out ideas, going forward with what is going to work based on feedback. Interactive prototypes bring concepts to life.',
    image: image_c888dffda05fa8b80dba7801fcd744cdfc18652d,
  },
  {
    number: 5,
    title: 'Finalization',
    description: 'Using our prototypes to get the ok on our best moves, we now create what will be the final product! Every detail is refined to perfection.',
    image: deepfakedImage,
  },
  {
    number: 6,
    title: 'Sending the Product Out',
    description: 'As we finalize and receive the ok from everyone on board, we get ready to ship out the product. Launch day is the culmination of careful planning and execution.',
    image: image_9cf8e81592317c3ffc09cfed1a2736b7227dc6b8,
  },
];

export function Services() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

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
            page: 'services',
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
      {/* Animated Header */}
      <div className="pt-20 md:pt-24">
        <AnimatedHeader text="Services" />
      </div>

      {/* Services Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-4xl mb-4">{service.title}</h2>
                <h3 className="text-xl text-gray-600 mb-6">{service.subtitle}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section with Slider */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gray-50 mt-16 md:mt-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl mb-8 md:mb-16 text-center"
          >
            My Process
          </motion.h2>
          
          {/* Process Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
                style={{ minHeight: 'auto' }}
              >
                {/* Left: Step Info */}
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl md:text-4xl flex-shrink-0">
                      {processSteps[currentStep].number}
                    </div>
                    <h3 className="text-2xl md:text-4xl">{processSteps[currentStep].title}</h3>
                  </div>
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                    {processSteps[currentStep].description}
                  </p>
                  
                  {/* Step Indicators */}
                  <div className="flex gap-2 pt-4 md:pt-8">
                    {processSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentStep
                            ? 'bg-gray-900 w-12'
                            : 'bg-gray-300 w-2 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative h-64 md:h-[70vh] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={processSteps[currentStep].image}
                    alt={processSteps[currentStep].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevStep}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextStep}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4 text-center">Ready to work together?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Get in touch to discuss your project and request a quote.
            </p>
            
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
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
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
        </div>
      </section>
    </PageWrapper>
  );
}