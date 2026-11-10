// proeg2 Replica Database with 20 Products & Cart Management
window.proegDB = {
  products: [
    {
      id: 'proeg-1',
      name: 'Egg White Protein Powder - Unflavoured & Unsweetened',
      category: 'Protein Powder',
      goal: 'Muscle Health',
      price: 34.95,
      badge: '🔥 BESTSELLER',
      rating: 4.9,
      reviews: 40,
      image: 'https://fiteg2.com/cdn/shop/files/Modelu_bildes_produktiem_3_-min.png?v=1774876559&width=1445',
      description: '100% pure albumin egg white protein. Lactose-free, dairy-free, and packed with all 9 essential amino acids.'
    },
    {
      id: 'proeg-2',
      name: 'Egg White Protein Powder - Salted Caramel',
      category: 'Protein Powder',
      goal: 'Muscle Health',
      price: 34.95,
      badge: '✨ NEW',
      rating: 5.0,
      reviews: 25,
      image: 'https://images.pexels.com/photos/13779108/pexels-photo-13779108.jpeg',
      description: 'Smooth salted caramel flavor combined with high-grade natural egg white protein.'
    },
    {
      id: 'proeg-3',
      name: 'Egg White Protein Powder - Chocolate Stevia',
      category: 'Protein Powder',
      goal: 'Muscle Health',
      price: 34.95,
      badge: 'Popular',
      rating: 4.87,
      reviews: 53,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeAYKgwiR4P53EBf2OdhaYT9H_mP_ci_Sjx-y6ctAZg&s',
      description: 'Rich natural chocolate taste sweetened with pure stevia leaf extract. Zero added sugar.'
    },
    {
      id: 'proeg-4',
      name: 'Egg White Protein Powder - Vanilla Stevia',
      category: 'Protein Powder',
      goal: 'Muscle Health',
      price: 34.95,
      badge: 'Classic',
      rating: 4.83,
      reviews: 54,
      image: 'https://www.pureformulas.com/ccstore/v1/images/?source=%2Ffile%2Fv1434998011625245537%2Fproducts%2Fegg-white-protein-vanilla-12-oz-by-mrm-extra6.jpg&height=780&width=780',
      description: 'Classic creamy vanilla flavored egg white protein ideal for morning smoothies and shakes.'
    },
    {
      id: 'proeg-5',
      name: 'Pure Collagen (Egg Membrane) - Mobility Formula',
      category: 'Pure Collagen',
      goal: 'Joint Support',
      price: 34.95,
      badge: 'Mobility',
      rating: 4.85,
      reviews: 13,
      image: 'https://images.pexels.com/photos/28988965/pexels-photo-28988965.jpeg',
      description: '60 capsules of Ovomet® egg membrane collagen designed for comprehensive joint and tendon mobility.'
    },
   
    {
      id: 'proeg-7',
      name: 'Egg White Protein Bar MIX (3 flavours), 12 bars',
      category: 'Protein Bars',
      goal: 'Snacking',
      price: 22.95,
      badge: 'Bundle',
      rating: 4.73,
      reviews: 15,
      image: 'https://julianbakery.com/cdn/shop/files/egg-white-protein-bar-almond-butter-4101643.png?v=1770715352&width=480',
      description: 'Natural ingredients and egg white protein in every delicious, chewy bite across 3 signature flavors.'
    },
    {
      id: 'proeg-8',
      name: 'Egg White Protein Bar - Blueberry, 12 bars',
      category: 'Protein Bars',
      goal: 'Snacking',
      price: 22.95,
      badge: 'Fruity',
      rating: 5.0,
      reviews: 6,
      image: 'https://m.media-amazon.com/images/I/81I4A2IXRIL.jpg?aicid=community-reviews',
      description: 'Chewy protein snack bar infused with real blueberries and high-grade albumin protein.'
    },
    {
      id: 'proeg-9',
      name: 'Egg White Protein Bar - Peanut Butter, 12 bars',
      category: 'Protein Bars',
      goal: 'Snacking',
      price: 22.95,
      badge: 'Nutty',
      rating: 4.75,
      reviews: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5Ra__EDBPgOXNPo-5IowcusZEO5cPVLiL6czRppQn7LKaIAt3tjyNcc&s=10',
      description: 'Rich peanut butter protein bars providing sustained daily energy and muscle nourishment.'
    },
    {
      id: 'proeg-10',
      name: 'Egg White Protein Bar - Chocolate, 12 bars',
      category: 'Protein Bars',
      goal: 'Snacking',
      price: 22.95,
      badge: 'Cocoa',
      rating: 5.0,
      reviews: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHbu8baOvff941io6DZxifzOSBccdXNI-pDOD9bSMYUUKjbK7TvQlLTY&s=10',
      description: 'Decadent dark chocolate protein bar with zero added sugar and natural ingredients.'
    },
    {
      id: 'proeg-11',
      name: 'Egg White Protein Set "Starter MIX"',
      category: 'Bundles',
      goal: 'Starter Kit',
      price: 15.95,
      oldPrice: 20.68,
      badge: 'SALE',
      rating: 4.8,
      reviews: 19,
      image: 'https://fiteg2.com/cdn/shop/files/Fiteg_startermix_1.png?v=1793093607&width=713',
      description: 'Starter trial pack featuring unflavoured and flavored egg white protein sachets.'
    },
    {
      id: 'proeg-12',
      name: 'Egg White Protein Set “Protein MIX”',
      category: 'Bundles',
      goal: 'Muscle Health',
      price: 79.95,
      oldPrice: 104.85,
      badge: 'SALE',
      rating: 4.84,
      reviews: 19,
      image: 'https://fiteg2.com/cdn/shop/files/fiteg_komplekts_visi_1080x1080_1.jpg?v=1774960435&width=713',
      description: 'Comprehensive multi-flavor protein bundle for dedicated fitness routines.'
    },
    {
      id: 'proeg-13',
      name: 'Egg White Protein Sachets - Chocolate Trio',
      category: 'Protein Powder',
      goal: 'Trial Pack',
      price: 7.50,
      badge: 'Trial',
      rating: 4.9,
      reviews: 11,
      image: 'https://fiteg2.com/cdn/shop/files/Egg_white_protein_sachet_-_chocolate_trio_1.png?v=1779881128&width=713',
      description: 'Convenient single-serving chocolate protein sachets for on-the-go training.'
    },
    {
      id: 'proeg-14',
      name: 'Egg White Protein Sachets - Vanilla Trio',
      category: 'Protein Powder',
      goal: 'Trial Pack',
      price: 7.50,
      badge: 'Trial',
      rating: 4.8,
      reviews: 9,
      image: 'https://fiteg2.com/cdn/shop/files/Eggwhiteproteinsachet-vanillatrio_1.png?v=1779885579',
      description: 'Convenient single-serving vanilla protein sachets for travel and testing.'
    },
    {
      id: 'proeg-15',
      name: '2-month Collagen Course „Joy of Movement”',
      category: 'Pure Collagen',
      goal: 'Joint Support',
      price: 55.95,
      oldPrice: 69.90,
      badge: 'COURSE',
      rating: 5.0,
      reviews: 2,
      image: 'https://fiteg2.com/cdn/shop/files/Modelu_bildes_produktiem_1_-min.png?v=1767079372&width=1445',
      description: 'A dedicated 60-day supply of mobility collagen for sustained joint comfort.'
    },
    {
      id: 'proeg-16',
      name: '2-month Collagen Course "Beauty Ritual"',
      category: 'Pure Collagen',
      goal: 'Skin & Hair',
      price: 63.95,
      oldPrice: 79.90,
      badge: 'COURSE',
      rating: 5.0,
      reviews: 2,
      image: 'https://fiteg2.com/cdn/shop/files/fiteg_komplekts_1080x1080fiteg_komplekts_1080x1080_pure2.jpg?v=1770040315',
      description: 'A dedicated 60-day supply of beauty collagen for skin radiance and hair vitality.'
    }
  ],
  getCart() {
    try {
      return JSON.parse(localStorage.getItem('proeg_cart')) || [];
    } catch (e) {
      return [];
    }
  },
  saveCart(cart) {
    localStorage.setItem('proeg_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  },
  addToCart(productId) {
    let cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: productId, qty: 1 });
    }
    this.saveCart(cart);
  },
  clearCart() {
    localStorage.removeItem('proeg_cart');
    window.dispatchEvent(new Event('cartUpdated'));
  }
};