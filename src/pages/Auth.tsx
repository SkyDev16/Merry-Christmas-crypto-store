import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/Logo';
import { Snowfall } from '@/components/Snowfall';
import { toast } from '@/hooks/use-toast';
import { Mail, Lock, User, ArrowRight, Sparkles } from 'lucide-react';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        navigate('/');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast({ title: 'Welcome back! 🎄', description: 'Successfully signed in.' });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { name }
          }
        });
        if (error) throw error;
        toast({ title: 'Account created! 🎁', description: 'Welcome to Merry Christmas 2026!' });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-christmas-dark via-background to-christmas-dark flex items-center justify-center relative overflow-hidden">
      <Snowfall />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 100}px`,
              height: `${150 + i * 100}px`,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 10}%`,
              background: `radial-gradient(circle, hsl(var(--christmas-gold) / 0.1) 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4 + i, repeat: Infinity }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10 w-full max-w-md mx-4"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50"
          whileHover={{ rotateY: 2, rotateX: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Logo size="md" />
          </motion.div>

          {/* Title */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
              {isLogin ? 'Welcome Back' : 'Join the Magic'}
            </h1>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-christmas-gold" />
              Merry Christmas 2026
              <Sparkles className="w-4 h-4 text-christmas-gold" />
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleAuth} className="space-y-5">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 bg-background/50 border-border/50 focus:border-christmas-gold"
                  />
                </div>
              </motion.div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-christmas-gold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-christmas-gold"
                />
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 btn-christmas text-lg font-semibold"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          {/* Toggle */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-muted-foreground hover:text-christmas-gold transition-colors"
            >
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <span className="font-semibold text-christmas-gold">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Auth;
