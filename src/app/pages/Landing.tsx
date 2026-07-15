import deepfakedImage from 'figma:asset/020630d6421c3d30cf67243f54e7d90bce490e99.jpg';
import motionDesignImage from 'figma:asset/7d82fa168b126249481e59132915d08666d8f68f.png';
import synthGameImage from 'figma:asset/89493c58301463ba199f37561dd3a618b0d797f3.png';
import image_35251037ff9722f551eca4dcb04cedb9c9c68ddb from 'figma:asset/35251037ff9722f551eca4dcb04cedb9c9c68ddb.png';
import image_f1cd33ec8e9345bd0f679a276e7ecf94cd459301 from 'figma:asset/f1cd33ec8e9345bd0f679a276e7ecf94cd459301.jpg';
import image_c1cdfa4824a7b38765f6e4dba88026489de05ef9 from 'figma:asset/c1cdfa4824a7b38765f6e4dba88026489de05ef9.png';
import image_c7723b203e235a05b5e68bab55f6be65327e4963 from 'figma:asset/c7723b203e235a05b5e68bab55f6be65327e4963.png';
import coverPokey from '../../assets/case-studies/pokebattle/page-01.png';
import coverBlunity from '../../assets/case-studies/blunity/page-01.png';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { CompanyLogos } from '../components/CompanyLogos';
import { Footer } from '../components/Footer';
import { WorkCoverPlaceholder } from '../components/WorkCoverPlaceholder';

type LandingProject =
  | {
      id: number;
      title: string;
      category: string;
      link: string;
      cover: 'cla' | 'pokey' | 'nature' | 'blunit';
    }
  | {
      id: number;
      title: string;
      category: string;
      link: string;
      image: string;
    };

const projects: LandingProject[] = [
  {
    id: 1,
    title: 'PokéBattle',
    category: 'Product UX · Data',
    link: '/work/pokey-battle-predictors',
    image: coverPokey,
  },
  {
    id: 2,
    title: 'Nature Conservatory Brand Direction',
    category: 'UX · Brand Systems',
    link: '/work/nature-conservatory',
    cover: 'nature',
  },
  {
    id: 3,
    title: 'CLA Site & Brand Design',
    category: 'UX · Architecture',
    link: '/work/casa-lica',
    cover: 'cla',
  },
  {
    id: 4,
    title: 'Blunity',
    category: 'Brand · Environmentalism',
    link: '/work/blunit-final',
    image: coverBlunity,
  },
  {
    id: 5,
    title: 'AI Educational Game',
    category: 'UX · Interactive Product',
    image: deepfakedImage,
    link: '/work/deepfaked',
  },
  {
    id: 6,
    title: 'FKA Experimental UX Site',
    category: 'UX · Experimental Interaction',
    image: image_c1cdfa4824a7b38765f6e4dba88026489de05ef9,
    link: '/work/fka-experimental',
  },
];

const additionalWorks: LandingProject[] = [
  {
    id: 7,
    title: 'Synth Engineered Game',
    category: 'Product Design',
    image: synthGameImage,
    link: '/work/exploring-synth',
  },
  {
    id: 8,
    title: 'Booklet Design',
    category: 'Print Design',
    image: image_35251037ff9722f551eca4dcb04cedb9c9c68ddb,
    link: '/work/booklet-design',
  },
  {
    id: 9,
    title: 'Motion Design',
    category: 'Motion Graphics',
    image: motionDesignImage,
    link: '/work/speech-animation',
  },
  {
    id: 10,
    title: 'Punk Poster',
    category: 'Graphic Design',
    image: image_f1cd33ec8e9345bd0f679a276e7ecf94cd459301,
    link: '/work/punk-poster',
  },
];

export function Landing() {
  const [showIntro, setShowIntro] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem('hasSeenIntro', 'true');
      
      // Hide intro after 5 seconds (adjust based on your video duration)
      setTimeout(() => setShowIntro(false), 5000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          >
            {/* YouTube embedded video */}
            <iframe
              ref={videoRef}
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/bk55iPNhJPg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Animated Intro"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full md:max-w-full md:max-h-screen"
              onLoad={() => {
                // Video is approximately 5 seconds, hide intro after it plays
                setTimeout(() => setShowIntro(false), 5000);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Profile Hero Section */}
        <section className="pt-24 md:pt-28 pb-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-20"
            >
              {/* Headshot */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                  <img
                    src={image_c7723b203e235a05b5e68bab55f6be65327e4963}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Hero Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 tracking-tight">
                  UX design — serious craft,
                  <span className="block md:inline md:ml-2 text-4xl md:text-7xl font-medium">
                    room to play
                  </span>
                </h1>
                <p className="text-base md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                  I design product narratives, interfaces, and research-backed flows—often with a
                  calmer baseline and occasional typographic scale as the expressive layer. Work
                  spans product UX, systems thinking, and shipping on the web.
                </p>
                <Link
                  to="/work"
                  className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-base md:text-lg rounded-lg"
                >
                  View My Work
                </Link>
              </div>
            </motion.div>

            {/* Featured Work Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-3xl md:text-5xl mb-8 md:mb-12">Featured UX Projects</h2>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pb-12 px-4 md:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <Link
                    to={project.link}
                    className="group block overflow-hidden rounded-lg bg-white"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                      {'cover' in project ? (
                        <WorkCoverPlaceholder variant={project.cover} />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                      <h3 className="text-xl">{project.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="pb-16 px-4 md:px-6 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-8">Additional Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalWorks.map((project) => (
                <Link key={project.id} to={project.link} className="group block rounded-lg bg-white p-6">
                  <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                  <p className="text-xl text-gray-900">{project.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Company Logos */}
        <CompanyLogos />
      </motion.div>
      
      <Footer />
    </div>
  );
}
