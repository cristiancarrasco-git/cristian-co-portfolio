import image_7cb8f65a22320995b8e9963f4f5813d451eac731 from 'figma:asset/7cb8f65a22320995b8e9963f4f5813d451eac731.png';
import image_c1cdfa4824a7b38765f6e4dba88026489de05ef9 from 'figma:asset/c1cdfa4824a7b38765f6e4dba88026489de05ef9.png';
import image_0c31506ac0db1323888a12b329de03d38dbdffae from 'figma:asset/0c31506ac0db1323888a12b329de03d38dbdffae.png';
import image_4ec883234cba389056264f83eff1300b9c17c833 from 'figma:asset/4ec883234cba389056264f83eff1300b9c17c833.jpg';
import image_9cf8e81592317c3ffc09cfed1a2736b7227dc6b8 from 'figma:asset/9cf8e81592317c3ffc09cfed1a2736b7227dc6b8.png';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function FKAExperimental() {
  return (
    <PageWrapper>
      <AnimatedHeader subtitle="Spatial exploration for an artist who defies linear categorization" variant="purple">
        FKA twigs Interactive Discography
      </AnimatedHeader>

      {/* Hero Image with Link */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-6 pt-12"
      >
        <div className="max-w-7xl mx-auto">
          <a
            href="https://indd.adobe.com/view/7cb2e72c-49b8-4091-82e3-86b78ef9893c"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative w-full h-[85vh] bg-black rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={image_c1cdfa4824a7b38765f6e4dba88026489de05ef9}
                alt="FKA twigs Interactive Discography Interface"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </a>
        </div>
      </motion.section>

      {/* Project Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm tracking-wide text-gray-500 mb-2">ROLE</h3>
            <p className="text-lg">UI/UX Designer, Interaction Designer, Front-End Developer</p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide text-gray-500 mb-2">MEDIUM</h3>
            <p className="text-lg">Interactive web experience built in Adobe InDesign</p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide text-gray-500 mb-2">INNOVATION</h3>
            <p className="text-lg">Mesh grid navigation with rollover-activated video content</p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide text-gray-500 mb-2">FOCUS</h3>
            <p className="text-lg">Embodied interaction, spatial navigation, non-linear discovery</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-4xl">
          <p className="text-xl leading-relaxed text-gray-700">
            This experimental interface reimagines music discovery through spatial navigation and embodied interaction. Built as an interactive mesh grid system, the project transforms FKA twigs' discography into a tactile digital landscape where hovering becomes an act of choreography—appropriate for an artist whose work dissolves boundaries between sound, movement, and visual art.
          </p>
        </div>
      </motion.section>

      {/* Concept & Artist Context */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="px-6 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-8">Concept & Artist Context</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl mb-4">Design Brief</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "How do you create a navigation system for an artist whose work exists between disciplines?"
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                FKA twigs' practice spans music, dance, film, and performance art—traditional music platforms flatten this complexity. The challenge was to design a discovery system that honors non-linear artistic vision while remaining functionally intuitive.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-blue-900">
                <p className="text-gray-800 italic">
                  "Interface as choreography; navigation as improvised performance"
                </p>
              </div>
            </div>

            <div className="bg-[#0d1b2a] rounded-lg p-8 flex items-center justify-center">
              <ImageWithFallback
                src={image_4ec883234cba389056264f83eff1300b9c17c833}
                alt="Mood board connecting FKA twigs aesthetic to interface design"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mesh Grid Mechanics Deep Dive */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="px-6 py-16 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-8">Case Study: Mesh Grid Mechanics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-4 text-purple-400">The Problem</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Traditional music interfaces prioritize search and recommendation—limiting discovery to what users already know they want.
              </p>

              <h3 className="text-2xl mb-4 text-purple-400">The Solution</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Mesh grid transforms entire discography into navigable space where all content exists simultaneously.
              </p>

              <h3 className="text-2xl mb-4 text-purple-400">Core Mechanics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>Nodes contain video thumbnails/previews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>Rollover triggers animation: scale change, opacity shift, visual distortion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>Click/tap initiates full video playback within grid or expanded view</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>Adjacent nodes suggest lateral movement rather than hierarchical drilling down</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <div className="bg-gray-700 rounded-lg aspect-square flex items-center justify-center mb-6">
                <ImageWithFallback
                  src={image_0c31506ac0db1323888a12b329de03d38dbdffae}
                  alt="Mesh grid interaction states"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30">
                <p className="text-lg italic text-purple-200">
                  "Spatial navigation creates embodied memory—users remember where content lives, not just what it is."
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Visual Identity & Aesthetic Strategy */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="px-6 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12">Visual Identity & Aesthetic Strategy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Mesh as Metaphor</h3>
              <p className="text-gray-700">
                References both digital infrastructure and organic cellular structures
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Wireframe Aesthetic</h3>
              <p className="text-gray-700">
                Exposes underlying architecture—making the invisible visible
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Negative Space</h3>
              <p className="text-gray-700">
                Generous spacing allows content to breathe, prevents visual overwhelm
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Monochromatic Base</h3>
              <p className="text-gray-700">
                Neutral palette ensures video content remains focal point
              </p>
            </div>
          </div>

          {/* Animation Principles */}
          <div className="bg-purple-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl mb-6">Animation Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg text-gray-700 mb-3">
                  <span className="font-semibold">Fluid, elastic transitions</span> mirror twigs' movement quality
                </p>
                <p className="text-lg text-gray-700 mb-3">
                  <span className="font-semibold">Rollover effects</span> suggest tactility—digital skin responding to touch
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-3">
                  <span className="font-semibold">Subtle easing</span> creates sense of weight and physicality
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">No abrupt cuts;</span> everything flows
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg aspect-[21/9] flex items-center justify-center">
            <ImageWithFallback
              src={image_7cb8f65a22320995b8e9963f4f5813d451eac731}
              alt="Color palette, typography studies, and aesthetic references"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* User Experience Journey */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="px-6 py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12">User Experience Journey</h2>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                1
              </div>
              <div>
                <h3 className="text-2xl mb-2">Entry Point</h3>
                <p className="text-lg text-gray-700">Users encounter mesh grid—curiosity replaces instruction</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                2
              </div>
              <div>
                <h3 className="text-2xl mb-2">Discovery Phase</h3>
                <p className="text-lg text-gray-700">Hovering reveals content previews, encouraging exploration</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                3
              </div>
              <div>
                <h3 className="text-2xl mb-2">Engagement</h3>
                <p className="text-lg text-gray-700">Video activation transforms grid from map to destination</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                4
              </div>
              <div>
                <h3 className="text-2xl mb-2">Navigation Memory</h3>
                <p className="text-lg text-gray-700">Spatial positioning helps users develop intuitive mental model</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                5
              </div>
              <div>
                <h3 className="text-2xl mb-2">Repeat Interaction</h3>
                <p className="text-lg text-gray-700">Non-linear structure encourages multiple journeys through same content</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* External Link Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Experience the Interactive Prototype</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore the full mesh grid navigation system featuring FKA twigs' discography with rollover-activated video content.
          </p>
          <a
            href="https://indd.adobe.com/view/7cb2e72c-49b8-4091-82e3-86b78ef9893c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-xl shadow-xl"
          >
            View Live Prototype
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </motion.section>
    </PageWrapper>
  );
}