import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: [0, 10, 0] }}
    transition={{ 
      opacity: { delay: 3 },
      y: { duration: 2, repeat: Infinity }
    }}
  >
    <span className="text-xs text-muted-foreground tracking-wider uppercase font-display">Scroll to explore</span>
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <ArrowDown className="w-6 h-6 text-christmas-gold" />
    </motion.div>
  </motion.div>
);
