import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Page } from '../types';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section
      id="cinematic-hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-luxury-black overflow-hidden"
    >
      {/* Background Campaign Image - Slow Scale Animation */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/src/assets/images/fashion_hero_1779958266662.png"
          alt="Benang Kain Campaign"
          className="w-full h-full object-cover object-center opacity-65 scale-105"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.900 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          referrerPolicy="no-referrer"
        />
        {/* Deep luxurious vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        {/* Fine subhead badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-flex items-center space-x-1 border border-gold-500/30 bg-gold-900/80 px-3.5 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-500 stroke-[1.5]" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-gold-700 uppercase font-light">
            Eksklusif Nusantara Couture
          </span>
        </motion.div>

        {/* Main luxury title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-6xl md:text-8xl tracking-[0.12em] text-gold-50 mb-6 font-light capitalize leading-tight"
        >
          Benang Tradisi,<br />
          <span className="italic font-light text-gold-400">Gaya Kontemporer</span>
        </motion.h2>

        {/* Short clean tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.0 }}
          className="font-sans text-xs sm:text-sm md:text-base text-gold-400/85 tracking-widest font-light max-w-2xl mx-auto mb-10 leading-relaxed md:leading-loose uppercase"
        >
          Eksplorasi mahakarya bordir buatan tangan asli Summarecon Bekasi. <br />
          Dibuat dengan bahan premium secara terbatas untuk keanggunan sejati Anda.
        </motion.p>

        {/* Premium Twin Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Main Action Call */}
          <button
            id="hero-shop-btn"
            onClick={() => setCurrentPage('catalog')}
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-gold-900 hover:text-gold-50 font-sans text-xs font-semibold tracking-widest uppercase rounded-sm cursor-pointer shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <span>Buka Katalog Mode</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Action Link */}
          <button
            id="hero-story-btn"
            onClick={() => setCurrentPage('about')}
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-gold-900 hover:text-gold-50 font-sans text-xs font-semibold tracking-widest uppercase rounded-sm cursor-pointer shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            Pelajari Seni Bordir Kami
          </button>
        </motion.div>

      </div>

      {/* Elegant scroll indicator cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="font-sans text-[8px] tracking-[0.3em] text-gold-200/50 uppercase mb-2">
          Scroll ke bawah
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold-500/50 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
