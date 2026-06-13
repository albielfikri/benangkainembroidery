import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { INSTAGRAM_POSTS, BOUTIQUE_INFO } from '../data';

export default function InstagramPreview() {
  return (
    <section id="instagram-feed-section" className="bg-luxury-cream py-16 sm:py-24 border-t border-gold-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12" id="instagram-header">
          <Instagram className="w-6 h-6 text-gold-500 mx-auto stroke-[1.5] mb-3" />
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold-500 uppercase font-light">
            Social Journal
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl tracking-widest text-luxury-black uppercase mt-1">
            @benangkainembroidery_
          </h3>
          <div className="w-10 h-[1px] bg-gold-500 mx-auto mt-3 mb-4" />
          <p className="font-sans text-xs text-luxury-slate max-w-md mx-auto leading-relaxed uppercase">
            Saksikan proses pembuatan, rilis produk terbaru, dan inspirasi berpakaian nusantara di galeri visual kami.
          </p>
        </div>

        {/* Beautiful Row Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" id="instagram-grid">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              id={`ig-card-${post.id}`}
              whileHover={{ y: -4 }}
              className="group relative aspect-square bg-[#0F0F0F] overflow-hidden border border-white/10 shadow-xs block cursor-pointer"
            >
              {/* Post Image */}
              <img
                src={post.imageUrl}
                alt="Instagram Post"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-750 ease-out group-hover:scale-104"
              />

              {/* Black elegant overlay with Likes & Comments count */}
              <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-gold-50" id={`ig-hover-${post.id}`}>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 fill-current text-gold-500" />
                  <span className="text-xs font-sans font-medium tracking-wide">{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4 fill-current text-white" />
                  <span className="text-xs font-sans font-medium tracking-wide">{post.comments}</span>
                </div>
              </div>

              {/* Instantly recognizable small IG icon in corner */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <Instagram className="w-3.5 h-3.5" />
              </div>

            </motion.a>
          ))}
        </div>

        {/* Bottom Callout Button */}
        <div className="text-center mt-12">
          <a
            href={BOUTIQUE_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-gold-500 hover:bg-gold-500 hover:text-gold-50 text-gold-500 font-sans text-[10px] tracking-widest uppercase rounded-xs transition-all duration-300 cursor-pointer"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Kunjungi Instagram Resmi Kami</span>
          </a>
        </div>

      </div>
    </section>
  );
}
