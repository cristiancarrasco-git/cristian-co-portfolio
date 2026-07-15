import { motion } from 'motion/react';
import googleLogo from 'figma:asset/f4e5aa94864c63a743624558f8529b5a6e4067bb.png';
import teslaLogo from 'figma:asset/8ca454e4f66ef2901c31db0035fbef31d15af40e.png';
import sanJoseLogo from 'figma:asset/5d4934f3c90949f1cf6ccee143e6fdba9ca22ee2.png';
import figmaLogo from 'figma:asset/f6e83d1a0adc40fd099383d965b89b9bc15bff66.png';
import sphinxLogo from 'figma:asset/f911a4912c377a4975d6eb3b378f4ef2c0230f3f.png';
import warnerbrosLogo from 'figma:asset/e633f065a6add315cab9f1c9a305af86da874daf.png';

const companies = [
  { name: 'Google', logo: googleLogo },
  { name: 'Tesla', logo: teslaLogo },
  { name: 'City of San Jose', logo: sanJoseLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Sphinx', logo: sphinxLogo },
  { name: 'Warner Bros', logo: warnerbrosLogo },
];

export function CompanyLogos() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
          Trusted by Leading Organizations
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
              className="flex items-center justify-center w-32 h-32 rounded-lg bg-white hover:bg-gray-50 transition-colors p-4"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}