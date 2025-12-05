import { motion } from 'framer-motion';
import { Gift, Mail, MapPin, Phone, Twitter, Instagram, Facebook, Heart, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer id="about" className="relative bg-gradient-to-b from-background to-christmas-dark/50 py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-christmas-gold/50 to-transparent" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${20 + i * 15}%`, top: '10%' }}
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-christmas-gold/30" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo size="md" className="mb-6" />
            <p className="text-muted-foreground text-sm mb-4">
              Spreading joy and happiness across the globe. Premium Christmas 2026 gifts 
              with Web3 payment options for the modern world.
            </p>
            <div className="flex items-center gap-2 text-christmas-gold mb-4">
              <Gift className="w-5 h-5" />
              <span className="font-medium">1000+ Magical Gifts</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-christmas-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-christmas-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-christmas-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2">
              {['All Products', 'New Arrivals', 'Best Sellers', 'Sale'].map(link => (
                <li key={link}>
                  <a href="#products" className="text-muted-foreground hover:text-christmas-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Electronics', 'Fashion', 'Jewelry', 'Home Decor', 'Toys & Games'].map(link => (
                <li key={link}>
                  <a href="#categories" className="text-muted-foreground hover:text-christmas-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-christmas-gold" />
                hello@merrychristmas2026.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-christmas-gold" />
                +1 (555) XMAS-2026
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-christmas-gold flex-shrink-0 mt-0.5" />
                North Pole Workshop, Arctic Circle
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-christmas-gold/20 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <span className="text-sm">Accepted Payments:</span>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-secondary/20 rounded-full text-secondary text-sm font-medium">ETH</span>
              <span className="px-3 py-1 bg-christmas-gold/20 rounded-full text-christmas-gold text-sm font-medium">BTC</span>
              <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground text-sm font-medium">VISA</span>
              <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground text-sm font-medium">Mastercard</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Merry Christmas Gift Shop. Made with{' '}
            <Heart className="w-4 h-4 inline text-christmas-red fill-christmas-red" />{' '}
            for the holiday season.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Web3 Powered • Crypto Payments • Worldwide Delivery
          </p>
        </div>
      </div>
    </footer>
  );
};
