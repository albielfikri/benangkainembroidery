import { Page } from '../types';
import { BOUTIQUE_INFO } from '../data';
import { Instagram, MapPin, Phone, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  setSelectedProductId: (id: string | null) => void;
}

export default function Footer({ setCurrentPage, setSelectedProductId }: FooterProps) {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-boutique-footer" className="bg-[#050505] text-[#E5E5E5] border-t border-white/10 shadow-xl">
      
      {/* Upper Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12" id="footer-bento-grid">
          
          {/* Col 1: Brand Pitch & Vision */}
          <div className="md:col-span-4 space-y-5" id="footer-pitch">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-white font-light">
              Benang Kain
            </h3>
            <span className="block font-sans text-[8px] tracking-[0.45em] text-gold-500 uppercase mt-0.5">
              Embroidery &bull; Bekasi Summarecon
            </span>
            <p className="font-sans text-xs text-white/70 leading-relaxed max-w-sm">
              Eksplorasi mahakarya bordir orisinil nusantara. Setiap pasang busana adalah simbol keagungan seni sulam tradisional Javanese yang dianyam secara elegan untuk gaya hidup modern yang bersahaja.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={BOUTIQUE_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                id="footer-ig-link"
                className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                aria-label="Instagram Handle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BOUTIQUE_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                id="footer-maps-link"
                className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                aria-label="Google Maps Address"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="md:col-span-3 space-y-4" id="footer-quicklinks">
            <h4 className="font-serif text-sm tracking-widest text-[#C4A484] uppercase font-semibold">
              Butik Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-white/75">
              <li>
                <button
                  id="foot-nav-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-gold-500 transition-colors uppercase cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="foot-nav-catalog"
                  onClick={() => handleNav('catalog')}
                  className="hover:text-gold-500 transition-colors uppercase cursor-pointer"
                >
                  Katalog Busana (Collections)
                </button>
              </li>
              <li>
                <button
                  id="foot-nav-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-gold-500 transition-colors uppercase cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  id="foot-nav-contact"
                  onClick={() => handleNav('contact')}
                  className="hover:text-gold-500 transition-colors uppercase cursor-pointer"
                >
                  Kontak Butik & Reservasi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Showroom Location & Time */}
          <div className="md:col-span-5 space-y-4" id="footer-showroom-times">
            <h4 className="font-serif text-sm tracking-widest text-[#C4A484] uppercase font-semibold">
              Showroom Sumatra Burgundy
            </h4>
            <div className="space-y-3.5 text-xs font-sans text-white/75 leading-relaxed">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-[#C4A484] mr-2.5 flex-shrink-0 mt-0.5" />
                <span>{BOUTIQUE_INFO.address}</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-[#C4A484] mr-2.5 flex-shrink-0" />
                <span>{BOUTIQUE_INFO.phoneFormatted} (Hotline & Order)</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-[#C4A484] mr-2.5 flex-shrink-0" />
                <span>{BOUTIQUE_INFO.email}</span>
              </p>
              <div className="border-t border-white/10 pt-3 flex items-center text-[10px] tracking-widest text-gold-500">
                <Sparkles className="w-3.5 h-3.5 text-gold-500 mr-2 animate-pulse" />
                <span>{BOUTIQUE_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Extreme Bottom Bar */}
      <div className="bg-[#020202] text-[#888888] py-6 px-4 border-t border-white/5" id="footer-bottom-credits">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans tracking-widest uppercase">
          <p className="text-center sm:text-left">
            &copy; 2026 {BOUTIQUE_INFO.name}. All Rights Reserved. &bull; Summarecon Bekasi.
          </p>
          <p className="text-center sm:text-right mt-2 sm:mt-0 flex items-center space-x-1 justify-center">
            <span>crafted in Modern Luxury Style</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
