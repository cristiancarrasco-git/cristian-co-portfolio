import { motion } from 'motion/react';
import { PageWrapper } from '../components/PageWrapper';
import { AnimatedHeader } from '../components/AnimatedHeader';
import aboutImage from 'figma:asset/f075bb9ee9b0d915e80556eb7824c301654d00ec.png';

const experiences = [
  {
    year: 'Aug 2025 - Present',
    title: 'Brand/Graphic Designer',
    company: 'CasaLikha Architects',
    description: 'Crafting visual identities and digital experiences that bridge client vision with architectural innovation, strengthening brand positioning through strategic design and user-centered communication.',
  },
  {
    year: 'Nov 2025 - Dec 2025',
    title: 'Google Brand Ambassador',
    company: 'Mosaic North America',
    description: 'Translating complex technical capabilities into user-friendly narratives, utilizing A/B testing and qualitative feedback to optimize engagement and drive product adoption.',
  },
  {
    year: 'Jun 2025 - Aug 2025',
    title: 'API Engineer Intern',
    company: 'Project Optimus, Tesla',
    description: 'Designed and tested AI-driven interfaces for humanoid robots, reducing test cycles from 10 minutes to 3 minutes through user-centered design thinking and collaborative UX improvements.',
  },
  {
    year: 'Dec 2024 - Present',
    title: 'Founding President',
    company: 'Friends of Figma',
    description: 'Leading 200+ member design community, fostering collaboration between Product Design and Web Development teams to create industry-aligned learning experiences and design sprints.',
  },
  {
    year: 'Aug 2024 - Mar 2025',
    title: 'Lead Sales Associate',
    company: 'OrangeTheory Fitness',
    description: 'Enhanced member experience through personalized service and relationship building, managing operations for 200+ members while training teams in human-centered customer engagement.',
  },
  {
    year: 'Jun 2020 - Nov 2023',
    title: 'Music Producer',
    company: 'Sumerian Records',
    description: 'Directed creative vision across 40+ projects, collaborating with diverse talents to craft cohesive artistic identities and oversee album campaigns with a cumulative 16 million streams.',
  },
];

export function About() {
  return (
    <PageWrapper>
      <AnimatedHeader subtitle="My journey and career" variant="razerRed">
        About Me
      </AnimatedHeader>
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src={aboutImage}
                alt="Professional headshot"
                className="w-full max-h-[80%] object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="lg:pt-12"
            >
              <h1 className="text-5xl mb-6">About Me</h1>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I am a intuitive designer, creating products, art, and engineering ideas. 
                  I bridge the gap between designers and engineers, form and function.
                </p>
                <p>
                  UI/UX is my current exploration into modern design questions. My approach is 
                  to understand the problem at the root of where it happens.
                </p>
                <p>
                  I combine logistics with creative problem solving, real solutions for users 
                  and founders. With expertise spanning, production design, product research, 
                  and development. I bring a grounded perspective to challenges, believing 
                  impact through design is about being close to the issue.
                </p>
                <p>
                  When I'm not designing, i'm working on art, exploring the earth, and hiking!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl mb-16 text-center"
          >
            Work Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}
                >
                  {/* Left side */}
                  <div className={index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 mb-2">{exp.year}</p>
                      <h3 className="text-2xl mb-1">{exp.title}</h3>
                      <p className="text-lg text-gray-600 mb-3">{exp.company}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>

                  {/* Right side (empty for alternating layout) */}
                  <div className={index % 2 === 0 ? 'md:order-2' : ''} />

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-gray-900 rounded-full transform -translate-x-1.5 md:-translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl mb-16 text-center"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl mb-4">Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Product Design</li>
                <li>• UI/UX Design</li>
                <li>• Design Systems</li>
                <li>• Prototyping</li>
                <li>• User Research</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl mb-4">Motion & Graphics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Motion Graphics</li>
                <li>• Animation</li>
                <li>• Graphic Design</li>
                <li>• Illustration</li>
                <li>• Brand Identity</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Figma</li>
                <li>• Adobe Creative Suite</li>
                <li>• After Effects</li>
                <li>• Sketch</li>
                <li>• Prototyping Tools</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}