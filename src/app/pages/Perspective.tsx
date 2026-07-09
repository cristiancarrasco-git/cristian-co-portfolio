import image_d58f9253c997cd1e4a155f91ff41d6b56211b9af from 'figma:asset/d58f9253c997cd1e4a155f91ff41d6b56211b9af.png';
import { motion } from 'motion/react';
import { PageWrapper } from '../components/PageWrapper';
import { AnimatedHeader } from '../components/AnimatedHeader';
import perspectiveImage from 'figma:asset/a0423fe6adf7f02d500cc70b357a95e043179c49.png';

const journeySteps = [
  {
    title: 'From Buildings to Experiences',
    period: '2019 - 2022',
    description: 'My journey began in architecture at Cal Poly Pomona, where I earned an Associate of Science in Architecture and Landscape. That spatial thinking foundation, understanding how humans interact with physical environments, now informs my approach to digital experiences. Architecture taught me that good design isn\'t about aesthetics. It\'s about creating environments that serve human needs. That principle applies whether you\'re designing a building or crafting a user interface.',
  },
  {
    title: 'Design Through Creative Constraints',
    period: '2020 - 2023',
    description: 'As a music producer for artists signed to Sumerian Records, I directed musical talent across 40+ projects and 600+ individual tracks, accumulating over 16 million streams. Music production is problem-solving under creative constraints: balancing artistic vision with technical limitations, managing client relationships, iterating based on feedback. Those are the same skills that matter in UX design, brand development, and visual communication.',
  },
  {
    title: 'Bridging Disciplines',
    period: '2024 - Present',
    description: 'Transferring to San Jose State to study graphic design with a focus on UI/UX, I founded Friends of Figma, a 200-member student organization that deliberately brings together product designers and web developers. Design students think developers only care about code. Developers think designers only care about making things pretty. But the best solutions happen when we work together from the beginning. The club orchestrates technical workshops, design sprints, and collaborative projects that simulate real industry workflows.',
  },
  {
    title: 'Human-Centered Technology',
    period: '2025',
    description: 'My internship at Tesla\'s Project Optimus tested this philosophy at scale. Working alongside design, engineering, and QA teams, I helped streamline prototype testing, cutting test cycle times from 10 minutes to 3 minutes. The experience revealed something critical: most development optimizes for technical performance while neglecting human factors. Nobody was systematically asking: How do people actually want to interact with this? When does automation help versus overwhelm? Similarly, as a Google Brand Ambassador, I demonstrated complex features to everyday users, converting qualitative feedback into actionable data, highlighting the gap between technical capability and human understanding.',
  },
  {
    title: 'Design That Serves People',
    period: 'Current & Future',
    description: 'At CasaLikha Architects, I\'m partnering with the founder to establish the startup\'s visual identity, designing the logo, branding guidelines, and custom-coding the company website. This work embodies my belief that design should bridge vision with execution, aesthetics with function. Set to graduate from SJSU in May 2026, I plan to pursue graduate studies in human factors and ergonomics, conducting research that actively shapes how systems are built. Great innovation happens when we reframe impossible questions, when we challenge what we assume technology can or should do.',
  },
];

const philosophyPrinciples = [
  {
    title: 'Design Serves Human Needs',
    description: 'Whether creating a physical space or a digital interface, good design prioritizes how people interact, feel, and accomplish their goals. Aesthetics matter, but only in service of human experience.',
  },
  {
    title: 'Interdisciplinary Thinking Drives Innovation',
    description: 'The best solutions emerge at the intersection of different fields: architecture\'s spatial thinking, music\'s compositional flow, engineering\'s systematic rigor. Meaningful innovation requires diverse perspectives working together from the beginning.',
  },
  {
    title: 'Question Assumptions, Challenge Constraints',
    description: 'Every project is an opportunity to ask: What if we approached this differently? What are we assuming that might not be true? Creative problem-solving happens when we challenge what we think is possible or necessary.',
  },
  {
    title: 'Technology Should Amplify, Not Replace',
    description: 'Tools and systems should empower people to do their best work, not substitute human judgment and creativity. This means designing with empathy for cognitive load, accessibility, and real-world context.',
  },
];

export function Perspective() {
  return (
    <PageWrapper>
      <AnimatedHeader subtitle="Design philosophy & journey" variant="purple">
        Perspective
      </AnimatedHeader>

      {/* Hero Section with Image */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={image_d58f9253c997cd1e4a155f91ff41d6b56211b9af}
                alt="Cristian Carrasco"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl">Designing for People, Not Just Pixels</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                A senior at San Jose State University studying graphic design with a focus on UI/UX, 
                bridging architecture, music production, and technology to create human-centered experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                "The question isn't whether technology will transform how we work, it's whether we're 
                asking the right questions as we build it. Design thinking, not just technical prowess, 
                shapes the future of how we interact with the world around us."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-50 to-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6">Design Philosophy</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              My approach is grounded in the belief that design is fundamentally about serving people—
              solving real problems, amplifying human capability, and creating experiences that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl mb-4 text-purple-900">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl mb-6">The Journey</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              An unconventional path through architecture, music production, community building, 
              and technology—each experience shaping a more holistic approach to design.
            </p>
          </motion.div>

          <div className="space-y-20">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot and line */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-0 top-8 w-px h-full bg-gradient-to-b from-purple-600 to-transparent ml-3" />
                )}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600" />

                {/* Content */}
                <div className="ml-16">
                  <p className="text-sm text-purple-600 mb-2 uppercase tracking-wide">
                    {step.period}
                  </p>
                  <h3 className="text-3xl mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl mb-6">Looking Forward</h2>
            <p className="text-xl leading-relaxed">
              The future of design is being shaped right now, whether we ask the right questions 
              depends on having diverse voices in the room. People who understand that technology 
              should serve human values, not the other way around.
            </p>
            <p className="text-xl leading-relaxed">
              Great innovation happens when we reframe impossible questions. When we challenge 
              what we assume design can or should do. That requires perspectives from everywhere, 
              not just engineering, not just design, but both working together.
            </p>
            <p className="text-lg text-purple-200 italic">
              "The interdisciplinary approach isn't optional, it's essential."
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}