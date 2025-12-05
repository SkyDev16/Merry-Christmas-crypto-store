import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { categories_list } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Magical <span className="text-gradient-christmas">Gifts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of {products.length}+ Christmas presents, 
            each one handpicked to bring joy and wonder.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search gifts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-card border-border rounded-full"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All
            </Button>
            {categories_list.slice(0, 4).map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {visibleProducts.length} of {filteredProducts.length} products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              index={index}
            />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="btn-gold"
            >
              Load More Gifts
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
