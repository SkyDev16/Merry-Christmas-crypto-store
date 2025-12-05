import { useState, useCallback } from 'react';
import { Product, CartItem } from '@/types/product';
import { toast } from '@/hooks/use-toast';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    toast({
      title: "Added to cart! 🎁",
      description: `${product.name} has been added to your cart.`,
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalETH = items.reduce((sum, item) => sum + item.priceETH * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    totalETH,
    itemCount,
    isOpen,
    setIsOpen,
  };
};
