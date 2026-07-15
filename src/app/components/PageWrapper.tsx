import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pt-20 flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}