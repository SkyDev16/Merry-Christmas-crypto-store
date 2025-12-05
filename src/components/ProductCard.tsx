import { motion } from 'framer-motion';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
}

export const ProductCard = ({ product, onAddToCart, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card-festive group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Button */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="w-full btn-christmas flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </motion.div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!product.inStock && (
            <span className="px-3 py-1 rounded-full bg-muted-foreground/90 text-background text-xs font-medium">
              Sold Out
            </span>
          )}
          {product.rating >= 4.5 && (
            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Best Seller
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-accent fill-accent'
                  : 'text-muted-foreground'
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <h3 className="font-heading font-semibold text-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-xs text-muted-foreground mb-3">
          {product.category}
        </p>

        <div className="flex items-baseline gap-2">
          <span className="font-heading text-xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-secondary font-medium">
            {product.priceETH} ETH
          </span>
        </div>
      </div>
    </motion.div>
  );
};
