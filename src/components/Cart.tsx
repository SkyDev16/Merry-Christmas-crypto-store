import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Wallet } from 'lucide-react';
import { CartItem } from '@/types/product';
import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  totalETH: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
}

export const Cart = ({
  isOpen,
  onClose,
  items,
  total,
  totalETH,
  onUpdateQuantity,
  onRemove,
  onClear,
}: CartProps) => {
  const { isConnected, connect } = useWallet();

  const handleCheckout = async (method: 'card' | 'crypto') => {
    if (method === 'crypto' && !isConnected) {
      await connect();
      return;
    }
    
    toast({
      title: "Checkout initiated! 🎄",
      description: method === 'crypto' 
        ? "Preparing crypto payment..."
        : "Redirecting to payment...",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Your Cart ({items.length})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    Add some magical gifts!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-4 p-4 rounded-xl bg-muted/50"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => onRemove(item.id)}
                          className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <p className="font-semibold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal</span>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-foreground">
                      ${total.toFixed(2)}
                    </p>
                    <p className="text-sm text-secondary">
                      ≈ {totalETH.toFixed(4)} ETH
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={() => handleCheckout('card')}
                    className="btn-gold"
                  >
                    Pay with Card
                  </Button>
                  <Button
                    onClick={() => handleCheckout('crypto')}
                    className="btn-christmas flex items-center justify-center gap-2"
                  >
                    <Wallet className="w-4 h-4" />
                    Pay with ETH
                  </Button>
                </div>

                <button
                  onClick={onClear}
                  className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
