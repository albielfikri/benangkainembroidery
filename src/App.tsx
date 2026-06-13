import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, MessageSquare, ArrowRight, Star } from 'lucide-react';

import { Page, CartItem, Product } from './types';
import { PRODUCTS, BOUTIQUE_INFO } from './data';

import { formatPrice } from './components/Catalog';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import InstagramPreview from './components/InstagramPreview';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ShoppingBagDrawer from './components/ShoppingBagDrawer';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  
  // Cart/Bag state persisted in localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('benang_kain_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);

  // Global search modal state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [activeCatalogSearchQuery, setActiveCatalogSearchQuery] = useState('');

  // Persist cart items
  useEffect(() => {
    localStorage.setItem('benang_kain_bag', JSON.stringify(cart));
  }, [cart]);

  // Handle adding an item to the shopping bag safely
  const handleAddToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) =>
          item.product.id === newItem.product.id &&
          item.selectedSize === newItem.selectedSize
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      } else {
        return [...prevCart, newItem];
      }
    });
  };

  const handleUpdateQty = (idx: number, newQty: number) => {
    if (newQty < 1) return;
    setCart((prevCart) => {
      const updated = [...prevCart];
      updated[idx].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (idx: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== idx));
  };

  const handleClearCart = () => {
    if (window.confirm('Apakah Anda yakin ingin mengosongkan tas belanja Anda?')) {
      setCart([]);
    }
  };

  // Quick navigation helpers
  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('detail');
  };

  // Search submit trigger from search modal overlay
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputValue.trim()) {
      setActiveCatalogSearchQuery(searchInputValue);
      setCurrentPage('catalog');
      setSelectedProductId(null);
      setSearchOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Find currently selected product (for detail view)
  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Curated Featured Collections for Home view
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gold-50 flex flex-col justify-between selection:bg-gold-500/30 text-luxury-black font-sans">
      
      {/* 1. Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedProductId={setSelectedProductId}
        cart={cart}
        setCartOpen={setCartOpen}
        onSearchTrigger={() => setSearchOpen(true)}
      />

      {/* 2. Primary Page Router Section */}
      <main className="flex-grow pt-[70px] md:pt-[90px]">
        <AnimatePresence mode="wait">
          
          {/* HOME PAGE VIEW COMPOSITION */}
          {currentPage === 'home' && (
            <motion.div
              key="page-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Cinematic Hero header */}
              <Hero setCurrentPage={setCurrentPage} />

              {/* Curated Campaign Highlights Board */}
              <section className="py-20 sm:py-28 bg-gold-50" id="home-featured-hightlights">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  {/* Miniature editorial heading */}
                  <div className="text-center mb-16 sm:mb-20">
                    <span className="font-sans text-[10px] tracking-[0.4em] text-gold-600 uppercase font-light inline-block mb-2">
                      New Sensations
                    </span>
                    <h3 className="font-serif text-3xl sm:text-5xl tracking-widest text-luxury-black uppercase font-light">
                      Masterpiece Highlights
                    </h3>
                    <div className="w-10 h-[1px] bg-gold-500 mx-auto mt-4" />
                  </div>

                  {/* Curated highlights of gorgeous assets with customized grids */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12" id="home-highlights-grid">
                    {featuredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleSelectProduct(p.id)}
                        className="group cursor-pointer text-center"
                        id={`highlight-${p.id}`}
                      >
                        <div className="aspect-[3/4] bg-luxury-cream border border-gold-100/40 overflow-hidden relative mb-5">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                          />
                          {p.isNew && (
                            <span className="absolute top-4 left-4 bg-luxury-black text-gold-50 text-[9px] font-sans font-semibold tracking-widest px-2.5 py-1 uppercase rounded-xs">
                              New In
                            </span>
                          )}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex justify-center">
                            <span className="text-[10px] tracking-widest font-sans font-semibold uppercase text-gold-50">
                              Buka Mahakarya &rarr;
                            </span>
                          </div>
                        </div>

                        <span className="block font-sans text-[9px] tracking-[0.2em] text-gold-600 uppercase font-light mb-1">
                          {p.category}
                        </span>
                        <h4 className="font-serif text-lg tracking-wider text-luxury-black group-hover:text-gold-600 transition-colors leading-snug">
                          {p.name}
                        </h4>
                        <span className="block font-sans text-xs tracking-wider text-luxury-slate mt-1 font-semibold">
                          {formatPrice(p.price)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Centered CTA row redirecting to the deep catalog */}
                  <div className="text-center mt-16">
                    <button
                      id="home-view-collection-btn"
                      onClick={() => {
                        setActiveCatalogSearchQuery('');
                        setCurrentPage('catalog');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center space-x-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-gold-900 hover:text-gold-50 font-sans text-xs font-semibold tracking-widest uppercase rounded-sm cursor-pointer shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      <span>Lihat Seluruh Koleksi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </section>

              {/* Quick mid-way micro banner summarizing artisan core values */}
              <section className="bg-luxury-cream border-y border-gold-100/30 py-20" id="home-artisan-callout">
                <div className="max-w-5xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Visual block */}
                    <div className="relative aspect-video sm:aspect-square md:aspect-video overflow-hidden border border-gold-200/40 rounded-sm">
                      <img
                        src="/src/assets/images/artisan_craft_1779958321622.png"
                        alt="Our craft hands"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Copywriting blocks */}
                    <div className="space-y-5 text-center md:text-left">
                      <div className="flex justify-center md:justify-start">
                        <Sparkles className="w-5 h-5 text-gold-500 animate-pulse stroke-[1.5]" />
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl tracking-wide text-luxury-black font-light leading-tight">
                        Dedikasi Pada Kehalusan Sulaman Indonesia
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-luxury-slate leading-relaxed">
                        Setiap helai pakaian di Benang Kain Embroidery merangkum pengerjaan manual artisan lokal. Kami menjaga komitmen penyulaman premium yang tidak hanya elok dipandang, namun juga bertahan lintas generasi.
                      </p>
                      <button
                        id="home-read-story-btn"
                        onClick={() => {
                          setCurrentPage('about');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-block text-[10px] font-sans tracking-widest text-gold-600 hover:text-gold-700 underline uppercase font-bold pt-2 cursor-pointer"
                      >
                        Pelajari Heritage Butik Kami &rarr;
                      </button>
                    </div>

                  </div>
                </div>
              </section>

              {/* Dynamic local Customer Reviews Testimonial frame */}
              <Testimonials />

              {/* Dynamic visual Instagram Preview journal feed */}
              <InstagramPreview />
            </motion.div>
          )}

          {/* CATALOG VIEW */}
          {currentPage === 'catalog' && (
            <motion.div
              key="page-catalog"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Catalog
                products={PRODUCTS}
                onSelectProduct={handleSelectProduct}
                initialSearchQuery={activeCatalogSearchQuery}
              />
            </motion.div>
          )}

          {/* PRODUCT DETAIL VIEW */}
          {currentPage === 'detail' && (
            <motion.div
              key="page-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <ProductDetail
                product={selectedProduct}
                allProducts={PRODUCTS}
                onSelectProduct={handleSelectProduct}
                onBack={() => setCurrentPage('catalog')}
                onAddToCart={handleAddToCart}
                setCartOpen={setCartOpen}
              />
            </motion.div>
          )}

          {/* ABOUT OUR STORY STORY VIEW */}
          {currentPage === 'about' && (
            <motion.div
              key="page-about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <About />
            </motion.div>
          )}

          {/* CONTACT INFO AND FORM VIEW */}
          {currentPage === 'contact' && (
            <motion.div
              key="page-contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <Footer setCurrentPage={setCurrentPage} setSelectedProductId={setSelectedProductId} />

      {/* 4. Interactive Floating WhatsApp Bubble Shortcut widget */}
      <FloatingWhatsApp />

      {/* 5. Right Sliding Shopping Bag Drawer Panel */}
      <ShoppingBagDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 6. Elite Full Screen Search Overlay modal */}
      <AnimatePresence id="search-modal-animateable">
        {searchOpen && (
          <motion.div
            id="global-search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              id="close-search-overlay-btn"
              onClick={() => {
                setSearchOpen(false);
                setSearchInputValue('');
              }}
              className="absolute top-8 right-8 text-gold-100 hover:text-gold-500 transition-colors p-2"
              aria-label="Close Search"
            >
              <X className="w-8 h-8 stroke-[1.25]" />
            </button>

            <div className="w-full max-w-2xl" id="search-modal-box">
              <span className="block text-center font-sans text-[10px] tracking-[0.4em] text-gold-500 uppercase font-light mb-4">
                Global Search Collection
              </span>
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  id="overlay-search-input"
                  type="text"
                  autoFocus
                  placeholder="Ketik kata kunci (Cth: Kebaya, Kencana)..."
                  value={searchInputValue}
                  onChange={(e) => setSearchInputValue(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-gold-100/30 focus:border-gold-500 py-4 font-serif text-2xl sm:text-3xl md:text-4xl text-gold-50 tracking-wider placeholder-gold-200/25 uppercase focus:outline-none transition-colors"
                />
                <button
                  id="overlay-search-submit-btn"
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gold-200 hover:text-gold-500 transition-colors p-1"
                >
                  <Search className="w-6 h-6 stroke-[1.5]" />
                </button>
              </form>
              <div className="mt-8 flex flex-wrap gap-2.5 items-center justify-center" id="search-tags-container">
                <span className="font-sans text-[10px] text-gold-100/50 uppercase tracking-widest mr-2">
                  Populer:
                </span>
                {['Kebaya', 'Kaftan', 'Abaya', 'Linen', 'Silk'].map((tag) => (
                  <button
                    key={tag}
                    id={`popular-tag-btn-${tag.toLowerCase()}`}
                    type="button"
                    onClick={() => {
                      setSearchInputValue(tag);
                      setActiveCatalogSearchQuery(tag);
                      setCurrentPage('catalog');
                      setSelectedProductId(null);
                      setSearchOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-4 py-1.5 bg-gold-900/40 border border-gold-500/20 hover:border-gold-500 hover:bg-gold-500/10 text-gold-100 text-[9px] font-sans tracking-widest uppercase rounded-full cursor-pointer transition-all duration-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Simple absolute inline helper for close button icon reference
function X({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
