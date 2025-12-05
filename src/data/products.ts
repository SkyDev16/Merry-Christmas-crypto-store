import { Product } from '@/types/product';

// Diverse product images from Unsplash - all different categories
const productImages = [
  // Gifts & Presents
  'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1607469256872-48074e807b0c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=400&h=400&fit=crop',
  // Jewelry
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
  // Watches
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=400&fit=crop',
  // Electronics
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
  // Fashion & Accessories
  'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
  // Home Decor
  'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop',
  // Beauty & Perfume
  'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
  // Toys
  'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop',
  // Books
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=400&fit=crop',
  // Christmas Specific
  'https://images.unsplash.com/photo-1543934638-bd2e138430c4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=400&fit=crop',
  // Candles
  'https://images.unsplash.com/photo-1602607105268-73a6a8eb0873?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1608181831718-c9ffd8928eb8?w=400&h=400&fit=crop',
  // Sports & Fitness
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
  // Kitchen
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop',
  // Chocolate & Sweets
  'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop',
  // Art & Craft
  'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop',
  // Music
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop',
  // Plants & Garden
  'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=400&fit=crop',
  // Pet Gifts
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop',
  // Luxury Items
  'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  // Winter Wear
  'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop',
  // Glasses & Sunglasses
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop',
  // Tech Gadgets
  'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop',
  // Wine & Spirits
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=400&fit=crop',
  // Coffee & Tea
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
  // Skincare
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop',
  // Stationery
  'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop',
  // Travel Accessories
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400&h=400&fit=crop',
];

const categories = [
  'Toys & Games',
  'Electronics',
  'Fashion',
  'Home & Decor',
  'Beauty & Perfume',
  'Books & Stationery',
  'Jewelry & Watches',
  'Sports & Fitness',
  'Kitchen & Dining',
  'Chocolate & Sweets',
  'Art & Craft',
  'Music & Entertainment',
  'Plants & Garden',
  'Pet Gifts',
  'Luxury Items',
  'Winter Wear',
  'Tech Gadgets',
  'Wine & Spirits',
  'Coffee & Tea',
  'Travel Essentials',
];

const productNamesByCategory: Record<string, string[]> = {
  'Toys & Games': [
    'Magical Christmas Music Box', 'Vintage Wooden Train Set', 'Enchanted Snow Globe', 
    'Premium Board Game Collection', 'Remote Control Sleigh', 'Plush Reindeer Family',
    'Christmas Puzzle Set', 'Nutcracker Soldier', 'Dancing Snowman Toy', 'LEGO Winter Village'
  ],
  'Electronics': [
    'Smart LED Fairy Lights', 'Wireless Earbuds Pro', 'Smart Home Speaker', 
    'Portable Bluetooth Speaker', 'Digital Photo Frame', 'Wireless Charging Pad',
    'Smart Watch Series', 'Noise Cancelling Headphones', 'Mini Projector', 'VR Headset'
  ],
  'Fashion': [
    'Cozy Cashmere Scarf', 'Nordic Knit Sweater', 'Silk Pajama Set', 
    'Leather Gloves Collection', 'Merino Wool Cardigan', 'Velvet Evening Dress',
    'Designer Belt Set', 'Premium Tie Collection', 'Winter Boot Set', 'Cashmere Beanie'
  ],
  'Home & Decor': [
    'Golden Reindeer Ornament', 'Handcrafted Wooden Sleigh', 'Luxury Candle Collection',
    'Crystal Snowflake Set', 'Velvet Cushion Set', 'Ceramic Vase Collection',
    'Brass Candleholder', 'Embroidered Table Runner', 'Glass Terrarium', 'Woven Basket Set'
  ],
  'Beauty & Perfume': [
    'Designer Perfume Set', 'Luxury Skincare Kit', 'Premium Makeup Palette',
    'Rose Gold Vanity Set', 'Aromatherapy Diffuser', 'Spa Gift Basket',
    'Hair Care Luxury Set', 'Bath Bomb Collection', 'Facial Roller Set', 'Nail Art Kit'
  ],
  'Books & Stationery': [
    'Enchanted Storybook', 'Leather Journal Set', 'Calligraphy Pen Collection',
    'Classic Literature Box Set', 'Art Sketchbook Set', 'Premium Planner 2026',
    'Fountain Pen Gift Set', 'Cookbook Collection', 'Poetry Anthology', 'Diary & Pen Set'
  ],
  'Jewelry & Watches': [
    'Crystal Snowflake Necklace', 'Rose Gold Watch', 'Diamond Stud Earrings',
    'Pearl Bracelet Set', 'Silver Charm Bracelet', 'Gold Pendant Necklace',
    'Vintage Brooch Collection', 'Titanium Ring Set', 'Gemstone Earrings', 'Luxury Watch Box'
  ],
  'Sports & Fitness': [
    'Premium Yoga Mat Set', 'Fitness Tracker Watch', 'Resistance Band Collection',
    'Smart Jump Rope', 'Massage Gun Pro', 'Golf Accessories Set',
    'Tennis Racket Set', 'Swimming Goggles Pro', 'Hiking Backpack', 'Cycling Gloves'
  ],
  'Kitchen & Dining': [
    'Premium Hot Cocoa Set', 'Gourmet Cookie Tin', 'Crystal Wine Glasses',
    'Vintage Wine Decanter', 'Marble Cheese Board', 'Copper Cookware Set',
    'Espresso Machine', 'Cast Iron Dutch Oven', 'Japanese Knife Set', 'Cocktail Shaker Set'
  ],
  'Chocolate & Sweets': [
    'Artisan Chocolate Truffles', 'Belgian Chocolate Box', 'Gourmet Candy Collection',
    'Premium Macaron Set', 'Luxury Fudge Selection', 'Caramel Gift Box',
    'Swiss Chocolate Assortment', 'Handmade Pralines', 'Chocolate Fountain Set', 'Toffee Collection'
  ],
  'Art & Craft': [
    'Professional Paint Set', 'Embroidery Kit Deluxe', 'Pottery Wheel Starter',
    'Watercolor Art Set', 'Knitting Kit Premium', 'Scrapbooking Collection',
    'Canvas & Easel Set', 'Jewelry Making Kit', 'Origami Paper Set', 'Candle Making Kit'
  ],
  'Music & Entertainment': [
    'Vinyl Record Collection', 'Premium Guitar Picks', 'Wireless Karaoke Mic',
    'Music Box Carousel', 'Concert Ticket Gift Card', 'DJ Controller',
    'Ukulele Starter Set', 'Piano Sheet Music Book', 'Bluetooth Turntable', 'Harmonica Set'
  ],
  'Plants & Garden': [
    'Indoor Plant Collection', 'Bonsai Tree Kit', 'Succulent Gift Set',
    'Herb Garden Starter', 'Orchid Plant Premium', 'Terrarium Kit',
    'Garden Tool Set', 'Flower Subscription', 'Seed Collection Box', 'Plant Care Kit'
  ],
  'Pet Gifts': [
    'Luxury Pet Bed', 'Gourmet Pet Treats', 'Interactive Pet Toy',
    'Pet Grooming Kit', 'Designer Pet Collar', 'Pet Photo Frame',
    'Cozy Pet Sweater', 'Pet Travel Carrier', 'Automatic Pet Feeder', 'Pet Spa Set'
  ],
  'Luxury Items': [
    'Marble Chess Set', 'Cashmere Throw Blanket', 'Crystal Decanter Set',
    'Silk Robe Collection', 'Gold Plated Pen', 'Premium Humidor',
    'Designer Sunglasses', 'Leather Portfolio', 'Silver Picture Frame', 'Monogrammed Towels'
  ],
  'Winter Wear': [
    'Heated Gloves Pro', 'Thermal Underwear Set', 'Puffer Jacket Premium',
    'Fleece Lined Leggings', 'Wool Peacoat', 'Snow Boots Deluxe',
    'Ear Warmers Set', 'Ski Goggles Pro', 'Hand Warmer Pack', 'Thermal Socks Set'
  ],
  'Tech Gadgets': [
    'Smart Ring Tracker', 'Portable Power Bank', 'Wireless Mouse Pad',
    'USB Hub Premium', 'Laptop Stand Ergonomic', 'Cable Organizer Set',
    'Smart Pen Digital', 'Desk Lamp Smart', 'Webcam HD Pro', 'Keyboard Mechanical'
  ],
  'Wine & Spirits': [
    'Premium Wine Selection', 'Whiskey Tasting Set', 'Champagne Gift Box',
    'Craft Beer Collection', 'Gin Botanicals Set', 'Port Wine Vintage',
    'Sake Gift Set', 'Brandy Decanter Set', 'Wine Aerator Set', 'Cocktail Bitters Kit'
  ],
  'Coffee & Tea': [
    'Specialty Coffee Set', 'Japanese Tea Collection', 'French Press Premium',
    'Pour Over Coffee Kit', 'Matcha Ceremony Set', 'Espresso Cups Set',
    'Tea Infuser Collection', 'Coffee Grinder Manual', 'Herbal Tea Box', 'Latte Art Kit'
  ],
  'Travel Essentials': [
    'Luxury Luggage Set', 'Travel Pillow Premium', 'Passport Holder Leather',
    'Packing Cube Set', 'Travel Toiletry Bag', 'Universal Adapter Kit',
    'Travel Journal Set', 'Noise Cancelling Buds', 'Eye Mask Silk', 'Travel Blanket'
  ],
};

const adjectives = ['Premium', 'Deluxe', 'Luxury', 'Artisan', 'Handcrafted', 'Vintage', 'Limited Edition', 'Exclusive', 'Designer', 'Professional'];
const colors = ['Gold', 'Silver', 'Rose Gold', 'Crystal', 'Pearl', 'Ruby', 'Emerald', 'Sapphire', 'Onyx', 'Bronze'];

export const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let productId = 1;
  
  // Generate 50+ products per category to reach 1000+
  categories.forEach((category, catIndex) => {
    const categoryNames = productNamesByCategory[category] || productNamesByCategory['Toys & Games'];
    
    for (let i = 0; i < 55; i++) {
      const nameIndex = i % categoryNames.length;
      const baseName = categoryNames[nameIndex];
      const imageIndex = (catIndex * 5 + i) % productImages.length;
      
      // Generate varied prices
      const basePrice = 19.99 + Math.random() * 480;
      const price = Math.round(basePrice * 100) / 100;
      
      // Create unique product name with variations
      let productName = baseName;
      if (i >= categoryNames.length) {
        const adjIndex = Math.floor(i / categoryNames.length) % adjectives.length;
        const colorIndex = Math.floor(i / (categoryNames.length * 2)) % colors.length;
        productName = `${adjectives[adjIndex]} ${colors[colorIndex]} ${baseName}`;
      }
      
      products.push({
        id: `prod-${productId}`,
        name: productName,
        description: `Make this Christmas 2026 magical with our ${productName.toLowerCase()}. Beautifully crafted with exceptional quality and attention to detail. The perfect gift to spread holiday joy.`,
        price: price,
        priceETH: Math.round((price / 2200) * 10000) / 10000,
        image: productImages[imageIndex],
        category: category,
        rating: 3.8 + Math.random() * 1.2,
        inStock: Math.random() > 0.1,
        tags: ['Christmas 2026', 'Gift', 'Holiday', category],
      });
      
      productId++;
    }
  });
  
  // Shuffle products for variety
  return products.sort(() => Math.random() - 0.5);
};

export const products = generateProducts();
export const featuredProducts = products.filter(p => p.rating >= 4.5).slice(0, 12);
export const categories_list = categories;
