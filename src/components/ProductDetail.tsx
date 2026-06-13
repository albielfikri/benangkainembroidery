import { useState, useEffect } from 'react';
import { ArrowLeft, MessageSquare, ShoppingBag, Check, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Product, CartItem } from '../types';
import { BOUTIQUE_INFO } from '../data';
import { formatPrice } from './Catalog';

interface ProductDetailProps {
  product: Product;
  allProducts: Product[];
  onSelectProduct: (id: string) => void;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  setCartOpen: (open: boolean) => void;
}

export default function ProductDetail({
  product,
  allProducts,
  onSelectProduct,
  onBack,
  onAddToCart,
  setCartOpen,
}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [cartSuccess, setCartSuccess] = useState<boolean>(false);

  // Sync state if product changes
  useEffect(() => {
    setSelectedImage(product.images[0]);
    setSelectedSize(product.sizes[0] || '');
    setQuantity(1);
    setCartSuccess(false);
  }, [product]);

  // Find related products (excluding current, ideally matching category, limit 3)
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.featured))
    .slice(0, 3);

  // WhatsApp Order Flow Handler
  const handleWhatsAppOrder = () => {
    const rawPhone = BOUTIQUE_INFO.phoneRaw;
    const finalPriceFormatted = formatPrice(product.price * quantity);
    
    // Format message strictly as requested: containing product name, selected size, and quantity
    const message = `Halo Benang Kain Embroidery! 🌸
Saya ingin memesan produk berikut:

🏷️ *Nama Produk*: ${product.name}
📐 *Ukuran Terpilih*: ${selectedSize}
🔢 *Jumlah*: ${quantity} Pcs
💰 *Harga Satuan*: ${formatPrice(product.price)}
✨ *Estimasi Total*: ${finalPriceFormatted}

Mohon informasi ketersediaan stok dan tata cara pembayaran. Terima kasih banyak.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${rawPhone}&text=${encodedText}`;
    
    // Safely open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBagSubmit = () => {
    onAddToCart({
      product,
      selectedSize,
      quantity,
    });
    setCartSuccess(true);
    setTimeout(() => {
      setCartSuccess(false);
      setCartOpen(true);
    }, 1500);
  };

  return (
    <section id="product-detail-view" className="bg-gold-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          id="detail-back-btn"
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-sans tracking-widest uppercase text-luxury-slate hover:text-luxury-black mb-10 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Katalog</span>
        </button>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* LEFT: Multi-Image Showcase Component */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4" id="gallery-container">
            
            {/* Main Primary Selected Image */}
            <div className="flex-1 aspect-[3/4] bg-luxury-cream border border-gold-100/30 overflow-hidden relative">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                src={selectedImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-luxury-black text-gold-50 text-[10px] font-sans font-bold tracking-widest px-3 py-1.5 uppercase rounded-xs">
                  New Arrival
                </span>
              )}
            </div>

            {/* Vertical thumbnails scroller */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible md:w-24 pb-2 md:pb-0 scrollbar-none" id="thumbnails-list">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  id={`thumbnail-btn-${idx}`}
                  onClick={() => setSelectedImage(img)}
                  className={`flex-shrink-0 w-16 h-20 md:w-full md:h-28 bg-luxury-cream border overflow-hidden transition-all duration-300 cursor-pointer ${
                    selectedImage === img
                      ? 'border-gold-500 scale-102 ring-1 ring-gold-500/30'
                      : 'border-gold-100 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} Preview ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: Product Buy Box / Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="product-purchase-box">
            <div>
              {/* Category Breadcrumb */}
              <span className="font-sans text-[10px] tracking-[0.3em] text-gold-600 uppercase font-medium block mb-3">
                {product.category} &bull; Limited Release
              </span>

              {/* Product Name */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-luxury-black lowercase first-letter:uppercase font-light leading-tight mb-4">
                {product.name}
              </h2>

              {/* Price Label */}
              <span className="block font-sans text-xl tracking-wider text-gold-600 font-semibold mb-6">
                {formatPrice(product.price)}
              </span>

              <div className="w-full h-[1.5px] bg-gold-100/50 my-6" />

              {/* Description Paragraph */}
              <p className="font-sans text-sm text-luxury-charcoal/95 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features / Details short bullet list */}
              <ul className="space-y-2 mb-8" id="product-short-specs-list">
                {product.details.slice(0, 3).map((spec, index) => (
                  <li key={index} className="flex items-start text-xs font-sans text-luxury-slate tracking-wide">
                    <span className="text-gold-500 mr-2.5 mt-1">&bull;</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              {/* Size Selector Board */}
              <div className="mb-8" id="size-selector-board">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-sans text-xs tracking-widest text-luxury-black uppercase font-medium">
                    Pilih Ukuran (Size)
                  </span>
                  <button
                    id="size-guide-btn"
                    onClick={() => alert(`Panduan Ukuran (Size Chart):\nS (MD: 92cm)\nM (MD: 96cm)\nL (MD: 100cm)\nXL (MD: 104cm)\nCustom: Sesuaikan dengan lingkar dada Anda. Cantumkan di chat!`)}
                    className="font-sans text-[10px] tracking-widest text-gold-600 hover:text-gold-700 underline uppercase"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      id={`size-btn-${size.toLowerCase()}`}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2.5 text-xs font-sans tracking-widest rounded-xs font-medium cursor-pointer transition-all duration-300 uppercase ${
                        selectedSize === size
                          ? 'bg-white text-black border border-white'
                          : 'bg-transparent text-luxury-black border border-white/10 hover:border-white/30 hover:bg-white/5'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector Interface */}
              <div className="mb-10" id="qty-selector-board">
                <span className="block font-sans text-xs tracking-widest text-luxury-black uppercase font-medium mb-3">
                  Jumlah (Quantity)
                </span>
                <div className="flex items-center w-28 bg-[#0F0F0F] border border-white/10 rounded-xs">
                  <button
                    id="qty-minus-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-luxury-charcoal hover:text-gold-600 font-sans text-lg font-light cursor-pointer select-none"
                  >
                    &minus;
                  </button>
                  <span className="flex-1 text-center font-sans text-xs font-semibold text-luxury-black">
                    {quantity}
                  </span>
                  <button
                    id="qty-plus-btn"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-luxury-charcoal hover:text-gold-600 font-sans text-lg font-light cursor-pointer select-none"
                  >
                    &#43;
                  </button>
                </div>
              </div>

            </div>

            {/* CTA action buttons */}
            <div className="space-y-4" id="detail-actions-tray">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Direct WhatsApp Order Button */}
                <button
                  id="wa-order-btn"
                  onClick={handleWhatsAppOrder}
                  className="w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-semibold tracking-widest uppercase rounded-sm cursor-pointer shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Order via WhatsApp</span>
                </button>

                {/* 2. Add To Shopping Bag */}
                <button
                  id="bag-add-btn"
                  onClick={handleBagSubmit}
                  className={`w-full px-6 py-4 font-sans text-xs font-medium tracking-widest uppercase rounded-sm cursor-pointer border transition-all duration-300 ${
                    cartSuccess
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-600'
                      : 'bg-luxury-black hover:bg-luxury-charcoal border-luxury-black text-gold-50'
                  }`}
                >
                  {cartSuccess ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Check className="w-4 h-4 animate-scale-up" />
                      <span>Dimasukkan!</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Masukkan Tas</span>
                    </span>
                  )}
                </button>

              </div>

              {/* Trust Badge Grid */}
              <div className="grid grid-cols-3 gap-2 pt-6 text-[9px] font-sans text-luxury-slate tracking-widest uppercase border-t border-gold-100/50" id="trust-badge-container">
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-4 h-4 text-gold-500 mb-1" />
                  <span>100% Orisinil</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <HelpCircle className="w-4 h-4 text-gold-500 mb-1" />
                  <span>Jahitan Rapi</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-gold-500 font-bold mb-1">WA</span>
                  <span>Layanan Celas</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Accordion / Informative Rows */}
        <div className="max-w-4xl border-t border-gold-100/60 pt-12 mb-24" id="specs-accordion-wrapper">
          <h3 className="font-serif text-2xl tracking-widest text-luxury-black uppercase mb-6">
            Detail Mahakarya & Cara Perawatan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans">
            
            <div className="space-y-3 bg-[#0F0F0F] p-6 border border-white/10 rounded-sm">
              <h4 className="font-medium tracking-wider text-gold-600 uppercase text-xs">
                Spesifikasi Teknis
              </h4>
              <ul className="space-y-2 text-xs text-luxury-charcoal/85 leading-relaxed">
                {product.details.map((spec, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-gold-500 mr-2">&bull;</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 bg-[#0F0F0F] p-6 border border-white/10 rounded-sm">
              <div>
                <h4 className="font-medium tracking-wider text-gold-600 uppercase text-xs mb-2">
                  Komitmen Kebudayaan Indonesia
                </h4>
                <p className="text-xs text-luxury-charcoal/85 leading-relaxed">
                  Semua bordir dan jahitan dikerjakan langsung oleh pengrajin berpengalaman di butik Nusantara kami. Setiap ornamen memadukan keindahan wastra tradisional dengan kesederhanaan cutting mewah yang nyaman dipakai seharian.
                </p>
              </div>
              <div className="border-t border-gold-100/40 pt-4">
                <h4 className="font-medium tracking-wider text-gold-600 uppercase text-xs mb-2">
                  Petunjuk Pencucian (Care Instruction)
                </h4>
                <p className="text-xs text-luxury-charcoal/85 leading-relaxed">
                  Kami menyarankan Dry Clean untuk semua pakaian dengan sulaman bordir sutra/emas/mutiara. Jangan menggunakan pemutih. Setrika uap dengan suhu sedang dari sisi dalam pakaian untuk mempertahankan kemilau ornamen.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div id="related-products-board">
            <div className="text-center mb-12">
              <span className="block font-sans text-[10px] tracking-[0.3em] text-gold-500 uppercase font-light">
                Atelier Suggests
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-widest text-luxury-black uppercase mt-1">
                Koleksi Terkait Lainnya
              </h3>
              <div className="w-10 h-[1px] bg-gold-500 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  id={`related-card-${p.id}`}
                  onClick={() => {
                    onSelectProduct(p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer text-center"
                >
                  <div className="aspect-[3/h-100] sm:aspect-[3/4] bg-luxury-cream border border-gold-100/30 overflow-hidden mb-4 relative">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-black/50 via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] text-gold-50 uppercase tracking-widest font-sans font-medium">
                        Lihat Produk &rarr;
                      </span>
                    </div>
                  </div>
                  <span className="block font-sans text-[9px] tracking-widest text-gold-600 uppercase font-light mb-1">
                    {p.category}
                  </span>
                  <h4 className="font-serif text-base tracking-wider text-luxury-black group-hover:text-gold-600 transition-colors leading-snug">
                    {p.name}
                  </h4>
                  <span className="block font-sans text-xs tracking-wider text-luxury-slate mt-1 font-medium">
                    {formatPrice(p.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
