import { X, Trash2, Send, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { BOUTIQUE_INFO } from '../data';
import { formatPrice } from './Catalog';

interface ShoppingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (idx: number, newQty: number) => void;
  onRemoveItem: (idx: number) => void;
  onClearCart: () => void;
}

export default function ShoppingBagDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}: ShoppingBagDrawerProps) {
  
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckoutViaWhatsApp = () => {
    if (cart.length === 0) return;

    let itemsMessage = '';
    cart.forEach((item, index) => {
      itemsMessage += `${index + 1}. *${item.product.name}*\n   📐 Ukuran: ${item.selectedSize}\n   🔢 Jumlah: ${item.quantity} Qty\n   💰 Harga: ${formatPrice(item.product.price * item.quantity)}\n\n`;
    });

    const msg = `Halo Benang Kain Embroidery! 🌸
Saya ingin melakukan pemesanan (Checkout Bag) dengan rincian berikut:

${itemsMessage}🛒 *Estimasi Total Belanja*: ${formatPrice(totalPrice)}

Mohon dampingi saya untuk pemrosesan order dan estimasi ongkos kirim ke alamat saya. Terima kasih banyak!`;

    const encodedText = encodeURIComponent(msg);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${BOUTIQUE_INFO.phoneRaw}&text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank', 'noreferrer,noopener');
  };

  return (
    <AnimatePresence id="drawer-animateable">
      {isOpen && (
        <>
          {/* Transparent Backdrop backdrop curtain */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-luxury-black/75 z-50 backdrop-blur-xs cursor-pointer"
          />

          {/* Sliding Right Shelf Drawer */}
          <motion.div
            id="cart-shelf-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-gold-50 shadow-2xl z-50 flex flex-col justify-between overflow-hidden border-l border-gold-200/50"
          >
            {/* Header Area */}
            <div className="p-6 border-b border-gold-100 flex items-center justify-between" id="drawer-header">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag className="w-5 h-5 text-gold-500 stroke-[1.5]" />
                <h3 className="font-serif text-lg tracking-widest text-luxury-black uppercase">
                  Shopping Bag
                </h3>
                <span className="font-sans text-[10px] bg-gold-500 text-gold-95 px-2.5 py-0.5 rounded-full font-semibold">
                  {cart.length}
                </span>
              </div>
              <button
                id="close-drawer-btn"
                onClick={onClose}
                className="p-1 text-luxury-charcoal hover:text-gold-600 transition-colors"
                aria-label="Close Bag Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Items Container Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none" id="drawer-items-list-area">
              {cart.length > 0 ? (
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    id={`cart-item-row-${idx}`}
                    className="flex justify-between items-stretch gap-4 pb-6 border-b border-gold-100/40 last:border-b-0"
                  >
                    
                    {/* Small thumbnail model */}
                    <div className="w-16 aspect-[3/4] bg-luxury-cream border border-gold-100/30 overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Meta info of item */}
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <div>
                        <h4 className="font-serif text-sm tracking-wide text-luxury-black font-medium leading-snug">
                          {item.product.name}
                        </h4>
                        <span className="block font-sans text-[9px] text-gold-600 uppercase tracking-widest font-medium mt-0.5">
                          Size: {item.selectedSize}
                        </span>
                      </div>

                      {/* Quantity Modifier inside drawer */}
                      <div className="flex items-center space-x-2.5 mt-2">
                        <div className="flex items-center bg-[#161616] border border-white/10 rounded-xs">
                          <button
                            id={`qty-minus-drawer-${idx}`}
                            onClick={() => onUpdateQty(idx, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center font-sans text-xs text-luxury-charcoal hover:text-gold-500 select-none cursor-pointer"
                          >
                            &minus;
                          </button>
                          <span className="text-xs font-sans font-medium text-luxury-black px-1.5 w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            id={`qty-plus-drawer-${idx}`}
                            onClick={() => onUpdateQty(idx, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center font-sans text-xs text-luxury-charcoal hover:text-gold-500 select-none cursor-pointer"
                          >
                            &#43;
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price and delete trash button */}
                    <div className="flex flex-col justify-between items-end py-1">
                      <span className="font-sans text-xs tracking-wider text-luxury-charcoal font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        id={`delete-btn-drawer-${idx}`}
                        onClick={() => onRemoveItem(idx)}
                        className="text-luxury-slate hover:text-red-500 p-1 cursor-pointer transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5 stroke-[1.5]" />
                      </button>
                    </div>

                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20" id="drawer-empty-state">
                  <ShoppingBag className="w-10 h-10 text-gold-200 stroke-[1.5]" />
                  <div>
                    <h4 className="font-serif text-base tracking-wider text-luxury-black uppercase">
                      Tas Belanja Anda Kosong
                    </h4>
                    <p className="font-sans text-[10px] text-luxury-slate max-w-[200px] mx-auto uppercase mt-1">
                      Belum ada busana indah yang dimasukkan ke tas belanja.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom calculation price checkout Area */}
            {cart.length > 0 && (
              <div className="p-6 bg-luxury-cream border-t border-gold-100 space-y-4" id="drawer-footer-checkout">
                
                {/* Visual calculation display */}
                <div className="space-y-2 text-xs font-sans text-luxury-charcoal">
                  <div className="flex justify-between tracking-wider uppercase">
                    <span>Subtotal Harga</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between tracking-wider uppercase">
                    <span>Biaya Asisten / Konsultasi</span>
                    <span className="text-emerald-600 font-semibold uppercase">Free</span>
                  </div>
                  <div className="flex justify-between tracking-wider uppercase">
                    <span>Ongkos Kirim JNE / Sicepat</span>
                    <span className="text-luxury-slate italic">Dihitung Nanti</span>
                  </div>
                  <div className="w-full h-[1px] bg-gold-100 my-2" />
                  <div className="flex justify-between font-medium text-sm tracking-wider uppercase text-luxury-black">
                    <span>Estimasi Total</span>
                    <span className="text-gold-600 font-bold">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                {/* Submit button checkout WhatsApp */}
                <div className="space-y-2.5 pt-2">
                  <button
                    id="checkout-bag-btn"
                    onClick={handleCheckoutViaWhatsApp}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-gold-50 font-sans text-xs font-semibold tracking-widest uppercase rounded-sm flex items-center justify-center space-x-2 shadow cursor-pointer transform transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Checkout via WhatsApp</span>
                  </button>
                  <button
                    id="clear-bag-btn"
                    onClick={onClearCart}
                    className="w-full py-2 text-center text-luxury-slate hover:text-luxury-black font-sans text-[9px] tracking-widest uppercase cursor-pointer"
                  >
                    Kosongkan Semua Tas
                  </button>
                </div>

              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
