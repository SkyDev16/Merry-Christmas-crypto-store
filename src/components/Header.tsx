import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Wallet, Menu, X, User, LogOut } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Logo } from './Logo';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const { address, isConnecting, connect, disconnect, formatAddress, isConnected, balance } = useWallet();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-christmas-gold/20 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <Logo size="sm" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'Categories', 'About'].map((item) => (
              <motion.a
                key={item}
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-christmas-gold transition-colors font-medium tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Auth Button */}
            <div className="hidden sm:block">
              {user ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="px-3 py-2 rounded-full bg-christmas-gold/10 border border-christmas-gold/30">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-christmas-gold" />
                      <span className="text-sm font-medium text-foreground">
                        {user.email?.split('@')[0]}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </motion.div>
              ) : (
                <Link to="/auth">
                  <Button
                    variant="outline"
                    className="border-christmas-gold/30 text-foreground hover:bg-christmas-gold/10"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
              )}
            </div>

            {/* Wallet Connection */}
            <div className="hidden sm:block">
              {isConnected ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="px-4 py-2 rounded-full bg-christmas-green/10 border border-christmas-green/30">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-christmas-green animate-pulse" />
                      <span className="text-sm font-medium text-foreground">
                        {formatAddress(address!)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {parseFloat(balance || '0').toFixed(4)} ETH
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={disconnect}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    Disconnect
                  </Button>
                </motion.div>
              ) : (
                <Button
                  onClick={connect}
                  disabled={isConnecting}
                  className="bg-gradient-to-r from-secondary to-christmas-green text-foreground hover:opacity-90 flex items-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </Button>
              )}
            </div>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-3 rounded-full bg-card hover:bg-christmas-gold/10 border border-christmas-gold/30 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-christmas-gold" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-christmas-red text-snow text-xs">
                  {cartCount}
                </Badge>
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md rounded-b-xl border border-christmas-gold/20"
            >
              <nav className="py-4 flex flex-col gap-4 px-4">
                {['Home', 'Products', 'Categories', 'About'].map((item) => (
                  <a 
                    key={item}
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} 
                    className="text-foreground/80 hover:text-christmas-gold transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                {!user && (
                  <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-christmas-gold/30">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                )}
                {user && (
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="w-full border-destructive/30 text-destructive"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                )}
                {!isConnected && (
                  <Button
                    onClick={connect}
                    disabled={isConnecting}
                    className="bg-gradient-to-r from-secondary to-christmas-green w-full"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                  </Button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
