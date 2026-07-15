import image_43500d0fc3317bac474e364a686aeabcbf1932f7 from 'figma:asset/43500d0fc3317bac474e364a686aeabcbf1932f7.png';
import image_574c32b80f9ddfabd91326b758d41c14aa24945d from 'figma:asset/574c32b80f9ddfabd91326b758d41c14aa24945d.png';
import image_cc4a0d1d3a982f66a864ec34f2c4ddbe7a8f3953 from 'figma:asset/cc4a0d1d3a982f66a864ec34f2c4ddbe7a8f3953.png';
import image_a269ab17a6f63e858d7fea200bfa33cb7b2b4c38 from 'figma:asset/a269ab17a6f63e858d7fea200bfa33cb7b2b4c38.png';
import image_55f87dabf8ca6207e7a3e38cbac8e19b9904aca0 from 'figma:asset/55f87dabf8ca6207e7a3e38cbac8e19b9904aca0.png';
import image_bbf69f7dd2cfa40a44bc923ae71b7a33a05464b2 from 'figma:asset/bbf69f7dd2cfa40a44bc923ae71b7a33a05464b2.png';
import image_18c05dc94ad06436c50486314d703323b3e64922 from 'figma:asset/18c05dc94ad06436c50486314d703323b3e64922.png';
import image_265821783df7c66aaa754e5196a914052c8d2a64 from 'figma:asset/265821783df7c66aaa754e5196a914052c8d2a64.png';
import headerImage from 'figma:asset/7d82fa168b126249481e59132915d08666d8f68f.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const assetImages = [
  image_574c32b80f9ddfabd91326b758d41c14aa24945d,
  image_a269ab17a6f63e858d7fea200bfa33cb7b2b4c38,
  image_cc4a0d1d3a982f66a864ec34f2c4ddbe7a8f3953,
  image_265821783df7c66aaa754e5196a914052c8d2a64,
  image_43500d0fc3317bac474e364a686aeabcbf1932f7,
  image_18c05dc94ad06436c50486314d703323b3e64922,
];

export function SpeechAnimation() {
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setFullscreenImage(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const nextFullscreenImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage + 1) % assetImages.length);
    }
  };

  const prevFullscreenImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage - 1 + assetImages.length) % assetImages.length);
    }
  };

  return (
    <PageWrapper>
      <AnimatedHeader subtitle='Virgil Abloh "Harvard Design Lecture" Animated' variant="lightOrange">
        Animated Speech
      </AnimatedHeader>

      {/* Hero Video Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-6 pt-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[85vh] bg-black rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/N2q1HkgTt6M?autoplay=1&mute=1&loop=1&playlist=N2q1HkgTt6M"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Speech Animation Video"
            />
          </div>
        </div>
      </motion.section>

      {/* Main Message Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-4xl mb-4">Main Message</h2>
        <p className="text-xl text-gray-600 max-w-3xl">
          The Speech Virgil Abloh gives is a powerful design insight into being a designer.
        </p>
      </motion.div>

      {/* Asset Panel - Pictures Showcase */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="px-6 py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl mb-8">Animation Assets</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {assetImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 shadow-md group cursor-pointer"
                onClick={() => openFullscreen(index)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Animation asset ${index + 1}`}
                  query="video production animation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="px-6 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8">About the Speech & Project</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Text Content - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Speech Details */}
              <div>
                <h3 className="text-2xl mb-4">The Speech</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    This animated project brings to light a power message about perseverance and creative thinking. Taking place at Harvards University Graduate School of Design at a core Studio Public Lecture. Responding to a question about what his Aha! Moment as a designer was?
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-2xl mb-4">The Project</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The Animated Video involved multiple sketched storyboards, typographic animations, and motion design to create a smooth animation! The project was created using assests created in Adobe Illustrator which was then used in AfterEffects Custom animations scripts were used in video animation. Design themes and concepts were inspired by Virgil Abloh's Off-White Brand. Adjusted some audio and instances in speech of original video to create a fast-paced animation. The Final Video came out to about a minute long, using multiple animation techniques and utilizing various scenes, the animation represents a moment designers and creators come to see!
                  </p>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-4">Technical Specifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Duration:</strong> 58 Seconds</li>
                  <li><strong>Resolution:</strong> 1920x1080, 24fps</li>
                  <li><strong>Software:</strong> After Effects, Cinema 4D, Premiere Pro, Adobe Illustrator</li>
                  <li><strong>Style:</strong> Kinetic Typography, Motion Graphics</li>
                  <li><strong>Audio:</strong> <a href="https://www.youtube.com/watch?v=qie5VITX6eQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Original speech recording with Virgil Abloh</a> with sound design</li>
                </ul>
              </div>
            </div>

            {/* Video Panel - Right Side */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl mb-4">Source Lecture</h3>
                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/qie5VITX6eQ?start=4055"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Virgil Abloh Harvard Lecture"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Watch the original lecture segment that inspired this animation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevFullscreenImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextFullscreenImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={fullscreenImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={assetImages[fullscreenImage]}
                alt={`Animation asset ${fullscreenImage + 1}`}
                query="video production animation"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
              {fullscreenImage + 1} / {assetImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}