import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="bg-gold-50 py-16 sm:py-24 border-t border-gold-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="testimonials-header">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] text-gold-500 uppercase font-light inline-block mb-3">
            Pelanggan Setia Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-luxury-black font-light mb-4 uppercase">
            Client Voices
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-5" />
          <p className="font-sans text-xs text-luxury-slate tracking-wider max-w-lg mx-auto leading-relaxed uppercase">
            Bintang lima kepuasan pelanggan, mencerminkan kualitas jahitan butik berskala pengerjaan adibusana asli nusantara.
          </p>
        </div>

        {/* Testimonials Bento Cards Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className="bg-[#0F0F0F] border border-white/10 p-8 rounded-sm relative shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:shadow-sm"
            >
              <div>
                {/* Quote Decor Icon */}
                <Quote className="absolute top-6 right-8 w-10 h-10 text-gold-500/10 stroke-[1.5]" />

                {/* Star ratings */}
                <div className="flex items-center space-x-1 mb-4" id={`stars-${test.id}`}>
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Review Message Text */}
                <p className="font-sans text-xs sm:text-sm text-luxury-charcoal/95 leading-relaxed italic mb-6">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Client Info Bar */}
              <div className="flex justify-between items-center border-t border-gold-100/30 pt-4" id={`client-info-${test.id}`}>
                <div>
                  <h4 className="font-serif text-sm tracking-widest text-luxury-black font-semibold">
                    {test.name}
                  </h4>
                  {test.role && (
                    <span className="block font-sans text-[9px] text-luxury-slate uppercase tracking-wider">
                      {test.role}
                    </span>
                  )}
                </div>
                <span className="font-sans text-[10px] text-luxury-slate">
                  {test.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
