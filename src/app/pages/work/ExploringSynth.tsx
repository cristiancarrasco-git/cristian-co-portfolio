import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import deepfakedImage from 'figma:asset/020630d6421c3d30cf67243f54e7d90bce490e99.jpg';
import syncImage from 'figma:asset/89493c58301463ba199f37561dd3a618b0d797f3.png';
import performanceImage from 'figma:asset/e691a216bd228001d30d6f8e19b4f4158ddc629e.png';
import synthKeys1 from 'figma:asset/7f74dd403b464657eb4c950848276c3cd507880c.png';
import synthIllustration from 'figma:asset/8442fd54b2dd8aa2358fcecc0d24fbd97068266e.png';
import synthModule from 'figma:asset/c85044b449153cbdbb845182123d917900730544.png';
import danceImage from 'figma:asset/175410681cd55363376c538b59979811af9ecbc4.png';
import stepImage from 'figma:asset/3a49691a30291518feb4871f16c17c57576a0b6b.png';
import performanceTextImage from 'figma:asset/3e8f2e1653906f02a2369695cbd3676ae3d9e1d2.jpg';
import synthBanner from 'figma:asset/41eac903a933725915b155ee9a854f09da0a4f5e.png';
import controlImage from 'figma:asset/53be91bdd655354753d5e0a80fbe8e8fc238e9ac.png';
import synthTimelineImage from 'figma:asset/ab1c553daf467cbc572e90797f6e31ff0ccbe20a.jpg';
import syncProduct1 from 'figma:asset/0015c80c17667ad243c74b6c2f9ee34fc8bbfafe.png';
import syncProduct2 from 'figma:asset/979bfc11aeb032f82fbc122540eb692551e15dc6.png';
import syncProduct3 from 'figma:asset/4e30209d16fc6d89dd9abc377c871b73ac25c639.png';
import rdSketch from 'figma:asset/2f61980ce84ebb781f00cd3f11c7ad4d1e36cf54.png';
import rdConstruction from 'figma:asset/8d015d10f041d2e18dd6f9a78ef277eb0b1feb2b.png';
import rdPrototypes from 'figma:asset/d51a6fcbd7345fd37674d381776fad760c6867c6.png';

const projectImages = [
  syncImage,
  controlImage,
  performanceImage,
];

const stickerAssets = [
  { id: 2, emoji: '🎮', label: 'Game' },
  { id: 3, emoji: '🎨', label: 'Design' },
  { id: 4, emoji: '🔊', label: 'Sound' },
  { id: 5, emoji: '⚡', label: 'Tech' },
];

export function ExploringSynth() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <PageWrapper>
      <AnimatedHeader subtitle="A semester long exploration into Synth technology" variant="deepBlue">
        Exploring Synth
      </AnimatedHeader>

      {/* Hero Image Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-6 pt-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[50vh] bg-black rounded-lg overflow-hidden">
            <img
              src={synthBanner}
              alt="Synth Elements - Performance, Step, Control"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-8"
      >
        <p className="text-2xl text-gray-600 italic">a look into the process</p>
      </motion.div>

      {/* Gallery and Stickers Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="px-6 py-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Slideshow and Synth Sounds Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Picture Slideshow - Now Larger */}
            <div>
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                {projectImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: index === currentImage ? 1 : 0,
                      scale: index === currentImage ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${
                      index === currentImage ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Project image ${index + 1}`}
                      query="synthesizer music technology"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Synth Sounds Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center"
            >
              <div className="rounded-lg overflow-hidden shadow-xl w-full">
                <img
                  src={synthTimelineImage}
                  alt="Synth Sounds - The Digital Analog Timeline"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Project Elements - Centered */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl mb-8 text-center">Project Elements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {stickerAssets.map((asset, index) => (
                <motion.div
                  key={asset.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center aspect-square"
                >
                  <span className="text-6xl mb-3">{asset.emoji}</span>
                  <span className="text-lg font-medium">{asset.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* About the Project Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-12 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-6">About the Project</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Exploring Synth represents a semester-long deep dive into synthesizer technology
              and its profound impact on art, music, and interactive design. This project bridges
              the gap between electronic music production and game design, culminating in a
              fully-engineered board game that brings synth concepts to life.
            </p>
            <p>
              Through extensive research into analog and digital synthesis, modular systems, and
              sound design principles, this project explores how musical technology can inspire
              tactile, strategic gameplay. The board game mechanics directly reflect synthesizer
              concepts like oscillators, filters, envelopes, and modulation.
            </p>
            <p>
              The design process involved prototyping game components, testing gameplay mechanics
              with musicians and designers, and creating a visual identity that honors the
              aesthetic of classic synthesizer interfaces. The result is an educational yet
              entertaining experience that makes synthesis accessible to all audiences.
            </p>
            <p>
              Key achievements include developing an intuitive rule system, designing custom game
              pieces inspired by synth modules, and creating companion materials that teach both
              game strategy and fundamental synthesis concepts.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Research and Development Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-4 text-center">Research & Development</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From initial sketches to physical prototypes, the iterative design process
            brought the SYNC board game from concept to reality through hands-on craftsmanship
            and careful material selection.
          </p>

          {/* Three Column R&D Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-gray-100">
                <img
                  src={rdSketch}
                  alt="Initial wooden prototype sketch with circular design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mt-4">Initial Sketching</h3>
              <p className="text-gray-600 mt-2">
                Hand-drawn prototypes on wood exploring circular patterns and modular layouts inspired by synth interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-gray-100">
                <img
                  src={rdConstruction}
                  alt="Physical construction of synth module with wood and materials"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mt-4">Material Testing</h3>
              <p className="text-gray-600 mt-2">
                Experimenting with wood, foam, and textured materials to create tactile game components.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-gray-100">
                <img
                  src={rdPrototypes}
                  alt="Design prototypes and paper mockups on cutting mat"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mt-4">Prototype Iteration</h3>
              <p className="text-gray-600 mt-2">
                Multiple design iterations exploring component layouts, button patterns, and visual hierarchy.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}