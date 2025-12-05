import { motion } from 'framer-motion';
import { Gift, Star, Sparkles } from 'lucide-react';

// Sparkle burst component
export const SparkleBurst = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    <Star className="w-4 h-4 text-christmas-gold fill-christmas-gold" />
  </motion.div>
);

// Floating presents with enhanced 3D effects
export const FloatingPresents = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1500px' }}>
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{ 
          y: '110vh', 
          x: `${5 + i * 6}%`, 
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 0.4 + Math.random() * 0.6,
          z: -100 * Math.random()
        }}
        animate={{ 
          y: '-20vh', 
          rotate: [0, 360],
          rotateX: [0, 180, 360],
          rotateY: [0, 360],
          x: [`${5 + i * 6}%`, `${10 + i * 6}%`, `${2 + i * 6}%`, `${5 + i * 6}%`],
          z: [-100, 50, -100],
        }}
        transition={{
          duration: 12 + i * 1.5,
          repeat: Infinity,
          delay: i * 1.2,
          ease: 'linear',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 15, -15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            rotateY: { duration: 3, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Gift 
            className="text-christmas-gold drop-shadow-lg" 
            style={{ 
              width: `${24 + i * 2.5}px`, 
              height: `${24 + i * 2.5}px`,
              filter: `drop-shadow(0 0 ${15 + i * 2}px hsl(43 96% 56% / ${0.5 + Math.random() * 0.3}))`
            }} 
          />
        </motion.div>
      </motion.div>
    ))}
  </div>
);

// Sparkles layer with 3D depth
export const SparklesLayer = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{ scale: 0, opacity: 0, z: -200 }}
        animate={{ 
          scale: [0, 1.5, 0],
          opacity: [0, 1, 0],
          rotate: [0, 180, 360],
          rotateY: [0, 360],
          z: [-200, 100, -200]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          delay: i * 0.3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transformStyle: 'preserve-3d'
        }}
      >
        <Star className="w-4 h-4 text-christmas-gold fill-christmas-gold" 
          style={{ 
            filter: `drop-shadow(0 0 10px hsl(43 96% 56% / 0.8))`
          }} 
        />
      </motion.div>
    ))}
  </div>
);

// Glowing orbs with 3D movement
export const GlowingOrbs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '2000px' }}>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${80 + i * 40}px`,
          height: `${80 + i * 40}px`,
          left: `${5 + i * 12}%`,
          top: `${10 + i * 10}%`,
          background: i % 2 === 0 
            ? `radial-gradient(circle, hsl(43 96% 56% / 0.2) 0%, hsl(0 72% 55% / 0.1) 50%, transparent 70%)`
            : `radial-gradient(circle, hsl(0 72% 55% / 0.2) 0%, hsl(142 76% 36% / 0.1) 50%, transparent 70%)`,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.7, 0.2],
          x: [0, 30, -30, 0],
          y: [0, -40, 40, 0],
          rotateZ: [0, 180, 360],
          z: [-100, 100, -100],
        }}
        transition={{
          duration: 6 + i * 1.5,
          repeat: Infinity,
          delay: i * 0.7,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);
