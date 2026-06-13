import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface CatalogProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
  initialSearchQuery?: string;
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export default function Catalog({ products, onSelectProduct, initialSearchQuery = '' }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Kebaya', 'Kaftan', 'Abaya', 'Casual Outer', 'Premium Silk'];

  // Filter and sort items dynamically
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        // default featured sorting
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="catalog-section" className="bg-gold-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elegant Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="catalog-header">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] text-gold-500 uppercase font-light inline-block mb-3">
            Atelier Collection &bull; Borobudur & Burgundy Vibe
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-luxury-black font-light mb-4 uppercase">
            Signature Catalog
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-5" />
          <p className="font-sans text-xs text-luxury-slate tracking-wider max-w-lg mx-auto leading-relaxed uppercase">
            Jelajahi keunikan detail bordiran buatan tangan murni, dirancang dengan keselarasan pola nusantara dan potongan kontemporer.
          </p>
        </div>

        {/* Dynamic Filters and Search Controls Board */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-8 border-b border-gold-100/60 mb-12" id="catalog-filters">
          
          {/* Category Quick Filter Selectors */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none" id="category-scroller">
            {categories.map((category) => (
              <button
                key={category}
                id={`category-btn-${category.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-sans tracking-widest uppercase rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-luxury-black text-gold-50 font-medium'
                    : 'bg-luxury-cream text-luxury-charcoal/85 hover:bg-gold-100/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar and Sorters */}
          <div className="flex flex-col sm:flex-row items-center gap-4" id="filters-search-sort">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-slate stroke-[1.5]" />
              <input
                id="catalog-search-input"
                type="text"
                placeholder="CARI KOLEKSI INDAH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-luxury-cream border border-gold-100 rounded-sm font-sans text-xs tracking-widest text-luxury-black placeholder-luxury-slate/75 uppercase focus:outline-none focus:border-gold-500 focus:bg-gold-50/20 transition-all duration-300"
              />
            </div>

            {/* Sorting Box */}
            <div className="relative w-full sm:w-auto flex items-center bg-luxury-cream border border-gold-100 rounded-sm px-3.5 py-2.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-luxury-slate stroke-[1.5] mr-2" />
              <select
                id="catalog-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-sans text-xs tracking-widest text-luxury-charcoal uppercase focus:outline-none cursor-pointer pr-4"
              >
                <option value="featured">Featured</option>
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Harga: Rendah ke Tinggi</option>
                <option value="price-desc">Harga: Tinggi ke Rendah</option>
              </select>
            </div>
          </div>

        </div>

        {/* Dynamic Items Counter */}
        <div className="mb-8 flex justify-between items-center text-xs font-sans text-luxury-slate tracking-widest uppercase" id="catalog-count-info">
          <span>Menampilkan {filteredProducts.length} hasil mahakarya</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-gold-600 hover:text-gold-700 underline underline-offset-2"
            >
              Bersihkan Pencarian
            </button>
          )}
        </div>

        {/* Grid of Product Cards */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              id="catalog-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  id={`product-card-${product.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    onSelectProduct(product.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer"
                >
                  
                  {/* Image container with elegant aspect ratio & dynamic hover scaling */}
                  <div className="relative aspect-[3/4] bg-luxury-cream overflow-hidden border border-gold-100/30 mb-5">
                    
                    {/* Primary Image */}
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Secondary Image revealed on Hover (if available) - Smooth Opacity Reveal */}
                    {product.images[1] && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                        <img
                          src={product.images[1]}
                          alt={`${product.name} Detail`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    )}

                    {/* Badges Box (e.g., NEW ARRIVAL or FEATURED) */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10" id={`badges-${product.id}`}>
                      {product.isNew && (
                        <span className="bg-luxury-black text-gold-50 text-[9px] font-sans font-semibold tracking-widest px-2.5 py-1 uppercase rounded-xs">
                          New
                        </span>
                      )}
                      {product.featured && (
                        <span className="bg-gold-500 text-gold-900 text-[9px] font-sans font-bold tracking-widest px-2.5 py-1 uppercase rounded-xs flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Quick overlay link */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-black/60 via-luxury-black/10 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between" id={`overlay-${product.id}`}>
                      <span className="text-gold-50 font-sans text-[10px] tracking-[0.2em] uppercase font-medium">
                        Lihat Lebih Detail &rarr;
                      </span>
                    </div>

                  </div>

                  {/* Metadata Text */}
                  <div className="flex justify-between items-start gap-3" id={`meta-${product.id}`}>
                    <div className="space-y-1">
                      <span className="block font-sans text-[9px] tracking-[0.2em] text-gold-600 uppercase font-light">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-lg tracking-wider text-luxury-black group-hover:text-gold-600 transition-colors duration-300 leading-snug">
                        {product.name}
                      </h3>
                    </div>
                    <span className="font-sans text-xs tracking-wider text-luxury-charcoal/90 font-medium whitespace-nowrap mt-4">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 px-4 bg-luxury-cream border border-gold-100 rounded-sm"
              id="catalog-empty-state"
            >
              <h4 className="font-serif text-xl tracking-wider text-luxury-black mb-3">
                Koleksi Tidak Ditemukan
              </h4>
              <p className="font-sans text-xs text-luxury-slate tracking-widest uppercase mb-6 max-w-sm mx-auto">
                Maaf, tidak ada busana yang cocok dengan filter atau kata kunci terpilih Anda.
              </p>
              <button
                id="reset-filter-btn"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 border border-gold-500 hover:bg-gold-500 hover:text-gold-50 text-gold-500 font-sans text-[10px] tracking-widest uppercase rounded-xs transition-all duration-300 cursor-pointer"
              >
                Reset Semua Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
