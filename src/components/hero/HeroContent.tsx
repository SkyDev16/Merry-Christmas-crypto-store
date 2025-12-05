import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Wallet, Sparkles } from 'lucide-react';
import { Logo } from '../Logo';
import { AnimatedText, Animated2026, AnimatedWord } from './AnimatedLetters';
import gift3D from '@/assets/gift-3d.png';

interface HeroContentProps {
  showContent: boolean;
}

export const HeroContent = ({ showContent }: HeroContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  const stats = [
    { value: '1000+', label: 'Unique Gifts' },
    { value: 'ETH', label: 'Crypto Pay' },
    { value: '5', label: 'Continents' },
    { value: '24h', label: 'Fast Delivery' },
  ];

  return (
    <div className="container mx-auto px-4 relative z-10 pt-20">
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: '2000px' }}
          >
            {/* Logo with 3D glow animation */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 10px hsl(43 96% 56% / 0.3))',
                    'drop-shadow(0 0 30px hsl(43 96% 56% / 0.6))',
                    'drop-shadow(0 0 10px hsl(43 96% 56% / 0.3))',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Logo size="lg" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-christmas-gold" />
              </motion.div>
              <span className="text-christmas-gold font-display font-medium tracking-widest uppercase text-sm">
                Holiday Collection 2026 • New Year Edition
              </span>
            </motion.div>
            
            {/* Modern 3D Animated Main Title - ENHANCED VISIBILITY */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              style={{ 
                perspective: '2000px', 
                transformStyle: 'preserve-3d',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              {/* "Happy" with enhanced visibility */}
              <motion.div 
                className="block mb-3"
                initial={{ opacity: 0, x: -150, rotateY: -45, z: -200 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
                transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 50 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {'Happy'.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block font-display"
                    initial={{ opacity: 0, y: 100, rotateX: -90, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0, 
                      scale: 1,
                      textShadow: [
                        '0 5px 15px rgba(0,0,0,0.3), 0 0 20px hsl(0 72% 55% / 0.4)',
                        '0 8px 25px rgba(0,0,0,0.4), 0 0 40px hsl(0 72% 55% / 0.7)',
                        '0 5px 15px rgba(0,0,0,0.3), 0 0 20px hsl(0 72% 55% / 0.4)',
                      ]
                    }}
                    transition={{
                      default: { delay: 0.6 + i * 0.1, type: 'spring', stiffness: 80, damping: 10 },
                      textShadow: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotateY: 20,
                      z: 60,
                      color: 'hsl(43, 96%, 56%)',
                      textShadow: '0 0 40px hsl(43 96% 56% / 1), 0 20px 60px rgba(0,0,0,0.5)',
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      background: 'linear-gradient(135deg, hsl(0, 72%, 55%), hsl(43, 96%, 56%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: 'clamp(3rem, 8vw, 5rem)',
                      fontWeight: 900,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* "Merry Christmas" with rainbow gradient */}
              <motion.div 
                className="block text-6xl md:text-8xl lg:text-9xl overflow-visible mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 1, type: 'spring', stiffness: 60 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {'Merry Christmas'.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ 
                      opacity: 0, 
                      y: 150, 
                      rotateX: -180,
                      rotateY: -90,
                      scale: 0,
                      z: -300
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      rotateY: 0,
                      scale: 1,
                      z: 0,
                      textShadow: [
                        '0 10px 30px rgba(0,0,0,0.4), 0 0 30px hsl(43 96% 56% / 0.5)',
                        '0 15px 45px rgba(0,0,0,0.5), 0 0 60px hsl(43 96% 56% / 0.9)',
                        '0 10px 30px rgba(0,0,0,0.4), 0 0 30px hsl(43 96% 56% / 0.5)',
                      ]
                    }}
                    transition={{
                      default: { delay: 1.3 + i * 0.05, type: 'spring', stiffness: 70, damping: 10 },
                      textShadow: { duration: 2.5, repeat: Infinity, delay: i * 0.15 }
                    }}
                    whileHover={{
                      scale: 1.25,
                      rotateY: 25,
                      rotateX: -15,
                      z: 80,
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      background: i % 3 === 0 
                        ? 'linear-gradient(135deg, hsl(0, 72%, 55%), hsl(43, 96%, 56%))'
                        : i % 3 === 1
                        ? 'linear-gradient(135deg, hsl(43, 96%, 56%), hsl(142, 76%, 36%))'
                        : 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(0, 72%, 55%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundSize: '200% 200%',
                      fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                      fontWeight: 900,
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* "2026" with spectacular effects */}
              <motion.div 
                className="block" 
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <Animated2026 />
              </motion.div>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Discover <motion.span 
                className="text-christmas-gold font-semibold"
                animate={{ 
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 10px hsl(43 96% 56% / 0.3)',
                    '0 0 20px hsl(43 96% 56% / 0.6)',
                    '0 0 10px hsl(43 96% 56% / 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
              >1000+ magical gifts</motion.span> from around the world. 
              Pay with <motion.span 
                className="text-secondary font-semibold"
                whileHover={{ scale: 1.1, rotateY: -10 }}
                style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
              >ETH, BTC</motion.span>, or card — 
              celebrate the joy of giving this holiday season.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              {/* 3D Gift Button */}
              <motion.a
                href="#products"
                className="btn-christmas inline-flex items-center justify-center gap-3 text-lg relative overflow-visible"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 0 50px hsl(43 96% 56% / 0.6)',
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(0 72% 51% / 0.3)',
                    '0 0 40px hsl(0 72% 51% / 0.5)',
                    '0 0 20px hsl(0 72% 51% / 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.img
                  src={gift3D}
                  alt="Gift"
                  className="w-8 h-8 object-contain"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 4, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
                Shop Presents
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="#categories"
                className="btn-gold inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Wallet className="w-5 h-5" />
                Pay with Crypto
              </motion.a>
            </motion.div>

            {/* Stats with 3D stagger animation */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, y: 50, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 2 + index * 0.2, type: 'spring', stiffness: 80 }}
                  whileHover={{ scale: 1.15, y: -10, rotateY: 10 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="font-display text-2xl md:text-3xl font-bold text-christmas-gold"
                    animate={{ 
                      textShadow: [
                        '0 0 10px hsl(43 96% 56% / 0.3), 0 10px 20px hsl(0 0% 0% / 0.2)',
                        '0 0 25px hsl(43 96% 56% / 0.6), 0 15px 30px hsl(0 0% 0% / 0.3)',
                        '0 0 10px hsl(43 96% 56% / 0.3), 0 10px 20px hsl(0 0% 0% / 0.2)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground font-body">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
