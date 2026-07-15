import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedHeaderProps {
  children: ReactNode;
  subtitle?: string;
  variant?: 'blue' | 'purple' | 'green' | 'orange' | 'lightOrange' | 'razerRed' | 'deepBlue';
}

const variantStyles = {
  blue: {
    gradient: 'from-blue-950 via-blue-900 to-blue-950',
    waveColor: 'rgba(59, 130, 246, 0.3)',
    textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
    subtitleColor: 'text-blue-200',
  },
  purple: {
    gradient: 'from-purple-950 via-purple-900 to-purple-950',
    waveColor: 'rgba(168, 85, 247, 0.3)',
    textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
    subtitleColor: 'text-purple-200',
  },
  green: {
    gradient: 'from-emerald-950 via-emerald-900 to-emerald-950',
    waveColor: 'rgba(16, 185, 129, 0.3)',
    textShadow: '0 0 30px rgba(16, 185, 129, 0.5)',
    subtitleColor: 'text-emerald-200',
  },
  orange: {
    gradient: 'from-orange-950 via-orange-900 to-orange-950',
    waveColor: 'rgba(251, 146, 60, 0.3)',
    textShadow: '0 0 30px rgba(251, 146, 60, 0.5)',
    subtitleColor: 'text-orange-200',
  },
  lightOrange: {
    gradient: 'from-orange-100 via-orange-50 to-white',
    waveColor: 'rgba(251, 146, 60, 0.2)',
    textShadow: '0 0 20px rgba(251, 146, 60, 0.3)',
    subtitleColor: 'text-orange-800',
  },
  razerRed: {
    gradient: 'from-black via-red-900 to-black',
    waveColor: 'rgba(220, 38, 38, 0.4)',
    textShadow: '0 0 40px rgba(220, 38, 38, 0.7)',
    subtitleColor: 'text-red-200',
  },
  deepBlue: {
    gradient: 'from-[#0a1929] via-[#0d2136] to-[#0a1929]',
    waveColor: 'rgba(59, 130, 246, 0.3)',
    textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
    subtitleColor: 'text-blue-200',
  },
};

export function AnimatedHeader({ children, subtitle, variant = 'blue' }: AnimatedHeaderProps) {
  const styles = variantStyles[variant];

  return (
    <section className="relative h-[18vh] md:h-[25vh] overflow-hidden flex items-center justify-center">
      {/* Animated Wavy Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient}`}>
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
                  ${styles.waveColor} 25%, 
                  ${styles.waveColor} 50%, 
                  ${styles.waveColor} 75%, 
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
              linear-gradient(${styles.waveColor} 1px, transparent 1px),
              linear-gradient(90deg, ${styles.waveColor} 1px, transparent 1px)
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
        <h1 className="text-5xl md:text-8xl text-white mb-2 md:mb-4" style={{ textShadow: styles.textShadow }}>
          {children}
        </h1>
        {subtitle && (
          <p className={`text-base md:text-2xl ${styles.subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}