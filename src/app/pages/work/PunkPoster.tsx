import image_4e7a2c9791a8034eac51a2dce4d11efcb458ab9d from 'figma:asset/4e7a2c9791a8034eac51a2dce4d11efcb458ab9d.png';
import image_7246bd8b80bc7111df5b4e4c0aba9c247b95faf5 from 'figma:asset/7246bd8b80bc7111df5b4e4c0aba9c247b95faf5.png';
import image_f1cd33ec8e9345bd0f679a276e7ecf94cd459301 from 'figma:asset/f1cd33ec8e9345bd0f679a276e7ecf94cd459301.jpg';
import { motion, AnimatePresence } from 'motion/react';
import { PageWrapper } from '../../components/PageWrapper';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import punkPosterImage from 'figma:asset/f1cd33ec8e9345bd0f679a276e7ecf94cd459301.jpg';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const mainPosters = [
  image_4e7a2c9791a8034eac51a2dce4d11efcb458ab9d,
  image_7246bd8b80bc7111df5b4e4c0aba9c247b95faf5,
  image_f1cd33ec8e9345bd0f679a276e7ecf94cd459301,
];

const variantStyles = {
  gradient: 'from-yellow-300 via-yellow-400 to-yellow-300',
  waveColor: 'rgba(234, 179, 8, 0.3)',
  textShadow: '0 0 30px rgba(234, 179, 8, 0.5)',
  subtitleColor: 'text-yellow-950',
};

export function PunkPoster() {
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setFullscreenImage(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const nextFullscreenImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage + 1) % mainPosters.length);
    }
  };

  const prevFullscreenImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage - 1 + mainPosters.length) % mainPosters.length);
    }
  };

  return (
    <PageWrapper>
      {/* Custom Animated Header - Half Height with Yellow Background */}
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
          <h1 className="text-4xl md:text-7xl text-gray-900 mb-2 md:mb-4" style={{ textShadow: variantStyles.textShadow }}>
            Punk Poster Series
          </h1>
          <p className={`text-sm md:text-xl ${variantStyles.subtitleColor}`}>
            Raw energy meets graphic rebellion
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-6 pt-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[85vh] rounded-lg overflow-hidden">
            <img
              src={punkPosterImage}
              alt="Punk Poster hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Main Posters Showcase - Now Clickable */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl mb-12"
          >
            Final Designs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainPosters.map((poster, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 + index * 0.15 }}
                className="group cursor-pointer"
                onClick={() => openFullscreen(index)}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-200 shadow-2xl">
                  <ImageWithFallback
                    src={poster}
                    alt={`Punk poster ${index + 1}`}
                    query="punk rock poster grunge"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Description - Updated Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="px-6 py-12 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-8 font-bold">Rebelling by Reframing: Visual Context</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              There's a brutal honesty that comes in reframing graphics that hold great power. When asked by my mentor and professor Joe Miller of Joe Miller's Company, "What does design need to do in our culture today?", I wanted to create a graphic that brought rebellion and punk aesthetics from 1970s punk culture.
            </p>
            <p>
              Army aesthetics are highly funded marketing operations. In my design, I challenge the U.S. Army campaign "What's Your Warrior", which asks the audience who they are as a warrior. I thought that given the campaign's mission, I would add my own spin that addresses a role of the military I feel describes part of my feelings—a crude marketing role meant to romanticize the job.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Fullscreen Modal */}
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
                src={mainPosters[fullscreenImage]}
                alt={`Punk poster ${fullscreenImage + 1}`}
                query="punk rock poster grunge"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
              {fullscreenImage + 1} / {mainPosters.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
