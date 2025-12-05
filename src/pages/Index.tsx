import { Snowfall } from '@/components/Snowfall';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { ProductGrid } from '@/components/ProductGrid';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { products } from '@/data/products';

const Index = () => {
  const cart = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Snowfall />
      <Header cartCount={cart.itemCount} onCartClick={() => cart.setIsOpen(true)} />
      <main>
        <Hero />
        <Categories />
        <div id="products">
          <ProductGrid products={products} onAddToCart={cart.addItem} />
        </div>
      </main>
      <Footer />
      <Cart
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        total={cart.total}
        totalETH={cart.totalETH}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
        onClear={cart.clearCart}
      />
    </div>
  );
};

export default Index;
