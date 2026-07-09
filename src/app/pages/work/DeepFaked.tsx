import image_340f729ad6e729a9d4f6a9c0de165543b5ad461e from 'figma:asset/340f729ad6e729a9d4f6a9c0de165543b5ad461e.png';
import image_8d1768f6eb520d06ea7ba01c01316ffc30a5a442 from 'figma:asset/8d1768f6eb520d06ea7ba01c01316ffc30a5a442.png';
import image_4a4c39af0d18c5f29a7a47ee74a0a292977c4e91 from 'figma:asset/4a4c39af0d18c5f29a7a47ee74a0a292977c4e91.png';
import image_2a25328dcbcc273b6e5072ed3f444df0833a4a34 from 'figma:asset/2a25328dcbcc273b6e5072ed3f444df0833a4a34.png';
import image_da2f12b009704cad5895c5b194c37aa70f01879e from 'figma:asset/da2f12b009704cad5895c5b194c37aa70f01879e.png';
import image_abd3f275d0d0250f58f343d0e0659b008ffd4fbf from 'figma:asset/abd3f275d0d0250f58f343d0e0659b008ffd4fbf.jpg';
import { motion } from 'motion/react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import headerImage from 'figma:asset/020630d6421c3d30cf67243f54e7d90bce490e99.jpg';

const gameImages = [
  image_abd3f275d0d0250f58f343d0e0659b008ffd4fbf,
  image_da2f12b009704cad5895c5b194c37aa70f01879e,
  image_2a25328dcbcc273b6e5072ed3f444df0833a4a34,
  image_4a4c39af0d18c5f29a7a47ee74a0a292977c4e91,
];

const processImages = [
  image_340f729ad6e729a9d4f6a9c0de165543b5ad461e,
  image_8d1768f6eb520d06ea7ba01c01316ffc30a5a442,
];

export function DeepFaked() {
  return (
    <PageWrapper>
      <AnimatedHeader subtitle="Building critical thinking skills for the age of synthetic media" variant="blue">
        Deepfake'd: An Educational Board Game About AI Literacy
      </AnimatedHeader>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-6 pt-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[85vh] bg-black rounded-lg overflow-hidden">
            <img
              src={headerImage}
              alt="Deepfake'd game packaged product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Project Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-sm tracking-wide text-gray-500 mb-2">ROLE</h3>
            <p className="text-lg">Product Designer, User Researcher, Visual Systems Designer</p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide text-gray-500 mb-2">TEAM</h3>
            <p className="text-lg">4 person multidisciplinary team</p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide text-gray-500 mb-2">TIMELINE</h3>
            <p className="text-lg">February – May 2025 (14 weeks)</p>
          </div>
        </div>
      </motion.section>

      {/* Problem Space */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="px-6 py-16 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-12 text-blue-900">The Challenge</h2>
          <p className="text-3xl md:text-4xl text-gray-900 leading-relaxed mb-12 font-light">
            Young adults aged 12 to 18 encounter AI generated content daily but lack literacy tools to critically evaluate digital information.
          </p>
          <div className="space-y-8 text-xl">
            <div className="pl-8 border-l-8 border-blue-600 bg-white p-6 rounded-r-lg shadow-md">
              <p className="mb-3 text-2xl font-semibold text-blue-900">Primary Users (College Students)</p>
              <p className="text-gray-700">Experience algorithm fatigue and declining content quality</p>
            </div>
            <div className="pl-8 border-l-8 border-blue-600 bg-white p-6 rounded-r-lg shadow-md">
              <p className="mb-3 text-2xl font-semibold text-blue-900">Secondary Users (Teachers/Parents)</p>
              <p className="text-gray-700">Distrust tech companies to provide solutions</p>
            </div>
            <div className="pl-8 border-l-8 border-blue-600 bg-white p-6 rounded-r-lg shadow-md">
              <p className="mb-3 text-2xl font-semibold text-blue-900">Core Need</p>
              <p className="text-gray-700">Accessible educational tools that build media literacy</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Research & Discovery */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Research & Discovery</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl mb-6">Methodology</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              User interviews with college students, teachers, and parents to understand how different stakeholder groups experience and respond to AI generated media.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl mb-6">Key User Archetypes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl mb-3">Matt</h4>
                <p className="text-sm text-gray-500 mb-3">College Student / Primary User</p>
                <p className="text-gray-700">Experiences daily exposure to AI content without tools to critically assess authenticity</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl mb-3">Patricia</h4>
                <p className="text-sm text-gray-500 mb-3">Parent / Secondary User</p>
                <p className="text-gray-700">Concerned about digital literacy but skeptical of tech industry solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl mb-3">Jessica</h4>
                <p className="text-sm text-gray-500 mb-3">Teacher / Secondary User</p>
                <p className="text-gray-700">Needs accessible classroom tools to teach media literacy concepts</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ideation & Concept Development */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="px-6 py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Ideation & Concept Development</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl mb-6">Design Strategy</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Transform abstract AI literacy concepts into experiential learning through gameplay. By creating an interactive environment where players must distinguish between human and AI entities, we mirror the real world challenge of evaluating digital content authenticity.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl mb-6">Inspiration & Mechanics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl mb-4">Game Influences</h4>
                <p className="text-gray-700 mb-4">Games of deception and deduction (Guess Who, Secret Hitler) informed the core mechanic of hidden role gameplay.</p>
              </div>
              <div>
                <h4 className="text-xl mb-4">Core Mechanic</h4>
                <p className="text-gray-700 mb-4">Players must identify AI among humans, directly mirroring real world content evaluation challenges and building critical assessment skills.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="aspect-video overflow-hidden rounded-lg group"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Ideation process ${index + 1}`}
                  query="game design sketches process"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Design Solution */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="px-6 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12">Design Solution</h2>

          <div className="mb-16">
            <h3 className="text-2xl mb-8">Key Game Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg mb-3">Article Cards</h4>
                <p className="text-gray-700">Educational content about AI and deepfakes integrated directly into gameplay</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg mb-3">Role System</h4>
                <p className="text-gray-700">Human vs. AI teams create tension that mirrors digital trust issues</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg mb-3">Voting Mechanics</h4>
                <p className="text-gray-700">Competition and elimination systems teach consequences of misinformation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg mb-3">Chancellor Role</h4>
                <p className="text-gray-700">Rotating spotlight role adds strategic depth and engagement</p>
              </div>
            </div>
          </div>

          {/* Game Components Grid */}
          <div>
            <h3 className="text-2xl mb-8">Final Product Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gameImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 shadow-lg group"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Game component ${index + 1}`}
                    query="board game components design"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Prototyping & Iteration */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="px-6 py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Prototyping & Iteration</h2>
          
          <div className="space-y-8 text-lg text-gray-700">
            <div>
              <h3 className="text-2xl mb-4">Evolution</h3>
              <p className="leading-relaxed">
                Early card designs lacked playfulness and clear team differentiation. Through iterative testing, we introduced stronger color coding, simplified iconography, and character driven illustrations that made gameplay intuitive while maintaining educational depth.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Testing Insights</h3>
              <p className="leading-relaxed mb-4">
                Gameplay testing revealed critical refinements needed in rules, roles, and point systems:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Simplified voting mechanics to reduce confusion during competitive rounds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Balanced role distribution to ensure fair gameplay across player counts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Refined article card content based on comprehension feedback from target age group</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Accessibility Considerations</h3>
              <p className="leading-relaxed">
                Foldable board design and custom box packaging enable easy transport for classroom and family settings. Compact form factor ensures the game can be stored and deployed in educational contexts without logistical barriers.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final Product & Impact */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Final Product</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl mb-6">Components</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Custom designed game box</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Player role cards with hidden team assignments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Article cards featuring AI literacy content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Voting cards for player elimination rounds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Foldable game board for easy transport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Comprehensive rule packet</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Game Experience</h3>
              <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                <p className="text-gray-700"><strong>Players:</strong> 4 to 6</p>
                <p className="text-gray-700"><strong>Duration:</strong> 30 to 45 minutes</p>
                <p className="text-gray-700"><strong>Replayability:</strong> High, with rotating roles and strategic depth</p>
                <p className="text-gray-700"><strong>Materials:</strong> Printed paper, cardboard, professional finishing</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-10 rounded-lg">
            <h3 className="text-2xl mb-4">Impact Statement</h3>
            <p className="text-xl leading-relaxed italic">
              "Creating lighthearted, accessible entry points into critical conversations about AI, misinformation, and digital literacy"
            </p>
          </div>
        </div>
      </motion.section>

      {/* Technical Details */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="px-6 py-16 border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="tracking-wide text-gray-500 mb-3">TOOLS</h3>
              <p className="text-gray-700">Adobe Illustrator, InDesign, Physical Prototyping</p>
            </div>
            <div>
              <h3 className="tracking-wide text-gray-500 mb-3">METHODS</h3>
              <p className="text-gray-700">Design Thinking Workshops, Empathy Research, Iterative Testing</p>
            </div>
            <div>
              <h3 className="tracking-wide text-gray-500 mb-3">CONTEXT</h3>
              <p className="text-gray-700">SJSU Design Thinking 101 Capstone Project</p>
            </div>
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}
