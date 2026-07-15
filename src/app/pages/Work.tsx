import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { PageWrapper } from '../components/PageWrapper';
import { AnimatedHeader } from '../components/AnimatedHeader';
import { useState } from 'react';
import synthGameImage from 'figma:asset/89493c58301463ba199f37561dd3a618b0d797f3.png';
import image_35251037ff9722f551eca4dcb04cedb9c9c68ddb from 'figma:asset/35251037ff9722f551eca4dcb04cedb9c9c68ddb.png';
import motionAssetImage from 'figma:asset/574c32b80f9ddfabd91326b758d41c14aa24945d.png';
import deepfakedImage from 'figma:asset/020630d6421c3d30cf67243f54e7d90bce490e99.jpg';
import image_f1cd33ec8e9345bd0f679a276e7ecf94cd459301 from 'figma:asset/f1cd33ec8e9345bd0f679a276e7ecf94cd459301.jpg';
import image_c1cdfa4824a7b38765f6e4dba88026489de05ef9 from 'figma:asset/c1cdfa4824a7b38765f6e4dba88026489de05ef9.png';
import { WorkCoverPlaceholder } from '../components/WorkCoverPlaceholder';
import coverPokey from '../../assets/case-studies/pokebattle/page-01.png';
import coverBlunity from '../../assets/case-studies/blunity/page-01.png';

type FeaturedCover = 'cla' | 'pokey' | 'nature' | 'blunit';

const featuredProjects: Array<
  | {
      id: number;
      title: string;
      byline: string;
      description: string;
      link: string;
      cover: FeaturedCover;
    }
  | {
      id: number;
      title: string;
      byline: string;
      description: string;
      link: string;
      image: string;
    }
> = [
  {
    id: 1,
    title: 'PokéBattle',
    byline: 'Python database + mobile-first battle prediction UX',
    description:
      'Structured matchup logic, explainable outcomes, and interaction loops for competitive players.',
    image: coverPokey,
    link: '/work/pokey-battle-predictors',
  },
  {
    id: 2,
    title: 'Nature Conservatory Brand Direction',
    byline: 'Interactive poster, brochure, content map, installation exploration',
    description:
      'Cross-medium UX narrative and brand system for environmental storytelling.',
    cover: 'nature',
    link: '/work/nature-conservatory',
  },
  {
    id: 3,
    title: 'CLA Site & Brand Design',
    byline: 'Architecture client journey from hero slides to contact conversion',
    description:
      'Brand identity, portfolio UX, and deployment path tuned for qualified client intake.',
    cover: 'cla',
    link: '/work/casa-lica',
  },
  {
    id: 4,
    title: 'Blunity',
    byline: 'Brand case study · clean water activism',
    description:
      'Identity, web, and print system connecting culture and activism to grassroots water solutions.',
    image: coverBlunity,
    link: '/work/blunit-final',
  },
  {
    id: 5,
    title: 'AI Educational Game',
    byline: 'Interactive UX for learning and decision loops',
    description:
      'Scenario-based interface design with game-informed feedback mechanics.',
    image: deepfakedImage,
    link: '/work/deepfaked',
  },
  {
    id: 6,
    title: 'FKA Experimental UX Site',
    byline: 'Experimental interaction model and interface language',
    description:
      'Conceptual web UX exploration balancing visual expression and navigational clarity.',
    image: image_c1cdfa4824a7b38765f6e4dba88026489de05ef9,
    link: '/work/fka-experimental',
  },
];

const additionalWorks = [
  {
    id: 5,
    title: 'Synth Engineered Game',
    category: 'Product Design',
    image: synthGameImage,
    link: '/work/exploring-synth',
  },
  {
    id: 6,
    title: 'Booklet Design',
    category: 'Print Design',
    image: image_35251037ff9722f551eca4dcb04cedb9c9c68ddb,
    link: '/work/booklet-design',
  },
  {
    id: 7,
    title: 'Motion Design',
    category: 'Motion Graphics',
    image: motionAssetImage,
    link: '/work/speech-animation',
  },
  {
    id: 8,
    title: 'Punk Poster',
    category: 'Graphic Design',
    image: image_f1cd33ec8e9345bd0f679a276e7ecf94cd459301,
    link: '/work/punk-poster',
  },
];

export function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <PageWrapper>
      <AnimatedHeader subtitle="Six UX case studies with supporting creative work" variant="green">
        UX Projects
      </AnimatedHeader>

      {/* Featured Projects Carousel */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-5xl mb-8 md:mb-12"
          >
            Featured UX Projects
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative"
          >
            {/* Carousel */}
            <div className="relative h-[50vh] md:h-[70vh] overflow-hidden rounded-lg bg-gray-100">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 ${
                    index === currentSlide ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'
                  }`}
                >
                  <Link to={project.link} className="block w-full h-full">
                    {'cover' in project ? (
                      <WorkCoverPlaceholder variant={project.cover} className="min-h-full" />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-12 text-white">
                      <h2 className="text-2xl md:text-4xl mb-2 md:mb-4">{project.title}</h2>
                      <p className="text-base md:text-xl mb-1 md:mb-2 text-gray-200">{project.byline}</p>
                      <p className="text-sm md:text-lg text-gray-300 max-w-2xl line-clamp-2 md:line-clamp-none">{project.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-gray-900 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Works Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-12">Additional Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalWorks.map((work, index) => (
              <Link
                key={work.id}
                to={work.link}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">{work.category}</p>
                    <h3 className="text-xl">{work.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}