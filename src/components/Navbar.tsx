import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Instagram, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, CartItem } from '../types';
import { BOUTIQUE_INFO } from '../data';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  setSelectedProductId: (id: string | null) => void;
  cart: CartItem[];
  setCartOpen: (open: boolean) => void;
  onSearchTrigger: () => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  setSelectedProductId,
  cart,
  setCartOpen,
  onSearchTrigger
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track page scroll to toggle background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setSelectedProductId(null);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Catalog', page: 'catalog' },
    { label: 'Our Story', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-gold-50/90 backdrop-blur-md shadow-sm border-gold-100 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between w-full">
          
          {/* Main Navigation Links - Desktop Left */}
          <nav className="hidden md:flex items-center space-x-8 justify-self-start" id="desktop-nav-left">
            {navLinks.slice(0, 2).map((link) => (
              <button
                key={link.page}
                id={`nav-${link.page}`}
                onClick={() => handleNav(link.page)}
                className={`font-sans tracking-widest text-xs uppercase cursor-pointer gold-hover-effect transition-colors duration-300 ${
                  currentPage === link.page
                    ? 'text-gold-600 font-semibold'
                    : 'text-luxury-charcoal/80 hover:text-luxury-black'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Elegant Boutique Logo - Centered */}
          <div className="flex-1 md:flex-initial text-center justify-self-center" id="navbar-logo-container">
            <button
              id="brand-logo-btn"
              onClick={() => handleNav('home')}
              className="inline-block focus:outline-none cursor-pointer group"
            >
              <h1 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.25em] text-luxury-black uppercase leading-tight transition-transform duration-500 group-hover:scale-102">
                Benang Kain
              </h1>
              <span className="block font-sans text-[8px] sm:text-[9px] tracking-[0.45em] text-gold-500 font-medium uppercase mt-0.5 text-center px-1">
                Embroidery &bull; Bekasi
              </span>
            </button>
          </div>

          {/* Right Accessories & Links - Desktop Right */}
          <div className="flex items-center space-x-6 sm:space-x-8 justify-self-end" id="navbar-right-options">
            <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-right">
              {navLinks.slice(2).map((link) => (
                <button
                  key={link.page}
                  id={`nav-${link.page}`}
                  onClick={() => handleNav(link.page)}
                  className={`font-sans tracking-widest text-xs uppercase cursor-pointer gold-hover-effect transition-colors duration-300 ${
                    currentPage === link.page
                      ? 'text-gold-600 font-semibold'
                      : 'text-luxury-charcoal/80 hover:text-luxury-black'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Quick search button */}
            <button
              id="search-trigger-btn"
              onClick={onSearchTrigger}
              className="text-luxury-charcoal/80 hover:text-gold-600 transition-colors p-1"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
            </button>

            {/* Shopping Bag Button */}
            <button
              id="cart-trigger-btn"
              onClick={() => setCartOpen(true)}
              className="relative text-luxury-charcoal/80 hover:text-gold-600 transition-colors p-1"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-gold-50 text-[9px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-luxury-charcoal hover:text-gold-600 transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 stroke-[1.5]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.5]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slide down Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-gold-50 border-b border-gold-100 overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  id={`mobile-nav-${link.page}`}
                  onClick={() => handleNav(link.page)}
                  className={`block w-full text-left py-2 font-serif text-lg tracking-wider border-b border-gold-100/40 ${
                    currentPage === link.page
                      ? 'text-gold-600 font-medium pl-2 border-l-2 border-l-gold-500'
                      : 'text-luxury-charcoal'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Extra contacts quick links in Mobile menu */}
              <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-sans text-luxury-slate">
                <a
                  href={BOUTIQUE_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 hover:text-gold-600 py-1"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BOUTIQUE_INFO.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 hover:text-gold-600 py-1"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Showroom</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
