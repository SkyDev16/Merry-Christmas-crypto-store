import { motion } from 'framer-motion';
import heroImage from '@/assets/christmas-hero.jpg';

export const HeroBackground = () => (
  <motion.div 
    className="absolute inset-0"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
  >
    <motion.img
      src={heroImage}
      alt="Five beautiful fashion model girls from around the world celebrating Christmas together with presents in the snow"
      className="w-full h-full object-cover object-top"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
  </motion.div>
);
