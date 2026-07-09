import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PageWrapper } from '../../components/PageWrapper';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import image_4edccd65953be46aaaedce8ec92d924dbaca07b1 from 'figma:asset/4edccd65953be46aaaedce8ec92d924dbaca07b1.png';
import image_9071a723199c3cefb7f2902f5ee0a87332ada649 from 'figma:asset/9071a723199c3cefb7f2902f5ee0a87332ada649.png';
import image_c888dffda05fa8b80dba7801fcd744cdfc18652d from 'figma:asset/c888dffda05fa8b80dba7801fcd744cdfc18652d.png';
import image_40c9b7bef50dd91f2268957bff709f59342b993c from 'figma:asset/40c9b7bef50dd91f2268957bff709f59342b993c.png';
import image_b48d807b3e145ee83948ce063838ba53055b2221 from 'figma:asset/b48d807b3e145ee83948ce063838ba53055b2221.png';
import image_fdef7f5ebe76b856436b91d4e9d19d1641138e6c from 'figma:asset/fdef7f5ebe76b856436b91d4e9d19d1641138e6c.png';

const bookletImages = [
  image_4edccd65953be46aaaedce8ec92d924dbaca07b1,
  image_9071a723199c3cefb7f2902f5ee0a87332ada649,
  image_c888dffda05fa8b80dba7801fcd744cdfc18652d,
  image_40c9b7bef50dd91f2268957bff709f59342b993c,
  image_b48d807b3e145ee83948ce063838ba53055b2221,
  image_fdef7f5ebe76b856436b91d4e9d19d1641138e6c,
];

const catalogImages = [
  image_4edccd65953be46aaaedce8ec92d924dbaca07b1,
  image_9071a723199c3cefb7f2902f5ee0a87332ada649,
  image_c888dffda05fa8b80dba7801fcd744cdfc18652d,
  image_40c9b7bef50dd91f2268957bff709f59342b993c,
];

const variantStyles = {
  gradient: 'from-purple-950 via-purple-900 to-purple-950',
  waveColor: 'rgba(168, 85, 247, 0.3)',
  textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
  subtitleColor: 'text-purple-200',
};

export function BookletDesign() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);
  const [catalogSlide, setCatalogSlide] = useState(0);
  const [showCatalogView, setShowCatalogView] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bookletImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bookletImages.length) % bookletImages.length);
  };

  const openFullscreen = (index: number) => {
    setFullscreenImage(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const nextFullscreenImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage + 1) % bookletImages.length);
    }
  };

  const prevFullscreenImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage - 1 + bookletImages.length) % bookletImages.length);
    }
  };

  const nextCatalogSlide = () => {
    setCatalogSlide((prev) => (prev + 1) % catalogImages.length);
  };

  const prevCatalogSlide = () => {
    setCatalogSlide((prev) => (prev - 1 + catalogImages.length) % catalogImages.length);
  };

  const openCatalogView = (index: number) => {
    setCatalogSlide(index);
    setShowCatalogView(true);
  };

  const closeCatalogView = () => {
    setShowCatalogView(false);
  };

  return (
    <PageWrapper>
      {/* Custom Animated Header - Half Height */}
      <section className="relative h-[18vh] md:h-[25vh] overflow-hidden flex items-center justify-center">
        {/* Animated Wavy Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.gradient}`}>
          {/* Animated waves */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-32"
                style={{
                  top: `${i * 20}%`,
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    ${variantStyles.waveColor} 25%, 
                    ${variantStyles.waveColor} 50%, 
                    ${variantStyles.waveColor} 75%, 
                    transparent 100%)`,
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(${variantStyles.waveColor} 1px, transparent 1px),
                linear-gradient(90deg, ${variantStyles.waveColor} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-7xl text-white mb-2 md:mb-4" style={{ textShadow: variantStyles.textShadow }}>
            Booklet Design
          </h1>
          <p className={`text-sm md:text-xl ${variantStyles.subtitleColor}`}>
            Modern editorial design meets traditional print
          </p>
        </motion.div>
      </section>

      {/* Main Slideshow - Tesla Style with Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-20 px-6 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            {/* Carousel */}
            <div className="relative h-[70vh] overflow-hidden rounded-lg bg-gray-800">
              {bookletImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 cursor-pointer ${
                    index === currentSlide ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                  onClick={() => openFullscreen(index)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Booklet page ${index + 1}`}
                    query="editorial booklet magazine design"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {bookletImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Description Section - Removed emoji and bubble */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-6 py-12 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-6">
            About <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 transform -rotate-2 inline-block" style={{ fontFamily: 'Impact, sans-serif', textShadow: '3px 3px 0px rgba(0,0,0,0.2)', letterSpacing: '2px' }}>Rules of Design</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              "Rules of Design" is a design project which focuses on the adoption of art and culture through counter culture work in the Shibuya Punk scene. Each page is crafted with the reader in mind, physical media is as important as digital media and while the conversation for this art style is usually online, it's design ethos and process for creation deserve documentation besides the walls of building.
            </p>
            <p>
              Rules of Design is my work to express what Shibuya punk artists taught me as a designer when I visited Brain Dead Studios in LA for the 25th anniversary of Jet Set Radio. <a href="https://segabits.com/blog/2025/06/12/celebrate-25-years-of-jet-set-radio-with-sega-brain-dead-studios-and-nts/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Resource link which covers the event</a>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Catalog Section - Clickable Gallery */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="px-6 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">Catalog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => openCatalogView(index)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Catalog image ${index + 1}`}
                  query="design process booklet"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fullscreen Modal for Main Carousel */}
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

            {/* Navigation Arrows */}
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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={bookletImages[fullscreenImage]}
                alt={`Booklet page ${fullscreenImage + 1}`}
                query="editorial booklet magazine design"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
              {fullscreenImage + 1} / {bookletImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Catalog View Modal */}
      <AnimatePresence>
        {showCatalogView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={closeCatalogView}
          >
            {/* Close Button */}
            <button
              onClick={closeCatalogView}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Close catalog view"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevCatalogSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Previous catalog image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextCatalogSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Next catalog image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Catalog Image Display */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={catalogImages[catalogSlide]}
                alt={`Catalog image ${catalogSlide + 1}`}
                query="design process booklet"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
              {catalogSlide + 1} / {catalogImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
