import { MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { BOUTIQUE_INFO } from '../data';

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  // Delay the pop up bubble cue to look interactive
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleFloatingClick = () => {
    const phone = BOUTIQUE_INFO.phoneRaw;
    const defaultText = encodeURIComponent(
      'Halo Benang Kain Embroidery! 🌸\nSaya berkunjung ke website butik Anda dan ingin berkonsultasi mengenai pemesanan kain, kebaya custom, atau koleksi busana terbaru.'
    );
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${defaultText}`, '_blank', 'noreferrer,noopener');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3" id="floating-whatsapp-trigger">
      
      {/* Interactive Micro chat bubble cue */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:block bg-luxury-black text-gold-50 border border-gold-500/20 px-4 py-2.5 rounded-sm shadow-md text-slate-102 font-sans text-[10px] tracking-widest uppercase font-semibold relative"
          >
            <span>Ada Pertanyaan? Chat Butik</span>
            {/* Small arrow triangle */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-luxury-black" />
            
            {/* Direct Close small cross */}
            <button
              id="close-wa-bubble"
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="absolute -top-1.5 -left-1.5 bg-gold-500 text-gold-900 w-4 h-4 rounded-full flex items-center justify-center text-[8px] hover:bg-gold-600 font-bold"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Glow Button */}
      <button
        id="wa-floating-btn"
        onClick={handleFloatingClick}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110 relative group"
      >
        <span className="absolute inset-0 bg-emerald-600/30 rounded-full animate-ping group-hover:animate-none" />
        <MessageSquare className="w-6 h-6 fill-current relative z-10" />
      </button>

    </div>
  );
}
