import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ExternalLink, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { BOUTIQUE_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Konsultasi Bordir Custom',
    message: '',
  });

  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi semua baris isian formulir.');
      return;
    }
    // Simulate successful submission of client message
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', subject: 'Konsultasi Bordir Custom', message: '' });
    }, 4000);
  };

  const subjects = [
    'Konsultasi Bordir Custom',
    'Kebaya Pernikahan / Wisuda',
    'Kerjasama Seragam & Kain',
    'Seputar Katalog Mode / Stok',
    'Lainnya'
  ];

  return (
    <section id="contact-us-view" className="bg-gold-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="contact-header">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] text-gold-500 uppercase font-light inline-block mb-3">
            Hubungi Showroom Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-luxury-black font-light mb-4 uppercase">
            Let&#39;s Connect
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-5" />
          <p className="font-sans text-xs text-luxury-slate tracking-wider max-w-lg mx-auto leading-relaxed uppercase">
            Punya gagasan busana impian atau butuh bordiran custom nusantara? Hubungi asisten butik kami untuk bantuan personal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Boutique Details Board */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
            <div className="bg-luxury-cream border border-gold-100/40 p-8 rounded-sm space-y-6">
              <h3 className="font-serif text-xl tracking-widest text-luxury-black uppercase border-b border-gold-100/50 pb-4">
                Informasi Butik
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold-500 stroke-[1.5] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-medium">
                    Showroom Address
                  </span>
                  <p className="font-sans text-xs text-luxury-charcoal leading-relaxed">
                    {BOUTIQUE_INFO.address}
                  </p>
                  <a
                    href={BOUTIQUE_INFO.googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-[10px] font-sans tracking-widest text-gold-600 hover:text-gold-700 uppercase font-semibold pt-1"
                  >
                    <span>Buka Peta Lokasi</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-gold-500 stroke-[1.5] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-medium">
                    Customer Hotline / WA
                  </span>
                  <p className="font-sans text-xs text-luxury-charcoal font-semibold">
                    {BOUTIQUE_INFO.phoneFormatted}
                  </p>
                  <span className="block text-[10px] text-emerald-600 font-medium">
                    &bull; Melayani order instan & fitting via WhatsApp
                  </span>
                </div>
              </div>

              {/* Instagram Accounts */}
              <div className="flex items-start space-x-4">
                <Instagram className="w-5 h-5 text-gold-500 stroke-[1.5] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-medium">
                    Official Instagram
                  </span>
                  <a
                    href={BOUTIQUE_INFO.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-xs text-luxury-charcoal font-semibold hover:text-gold-600 transition-colors"
                  >
                    {BOUTIQUE_INFO.instagramHandle}
                  </a>
                  <span className="block text-[10px] text-luxury-slate font-light">
                    Follow portfolio terbaru kami di IG Benang Kain.
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-gold-500 stroke-[1.5] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-medium">
                    Operating Hours
                  </span>
                  <p className="font-sans text-xs text-luxury-charcoal">
                    {BOUTIQUE_INFO.hours}
                  </p>
                  <span className="block text-[10px] text-red-500">
                    *Menerima fitting di butik paling lambat pukul 19:15
                  </span>
                </div>
              </div>

            </div>

            {/* Interactive Google Map Display Container */}
            <div className="relative aspect-video bg-gold-50 rounded-sm border border-white/10 flex items-center justify-center overflow-hidden" id="interactive-showroom-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5292419266155!2d106.9922262!3d-6.193657799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bfaea134bd9%3A0xc3fde9b533a1e948!2sRuko%20Burgundy%20Commercial!5e0!3m2!1sen!2sid!4v1718296316279!5m2!1sen!2sid"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-[#0F0F0F] border border-white/10 p-8 sm:p-10 rounded-sm shadow-xs">
              <h3 className="font-serif text-xl sm:text-2xl tracking-widest text-luxury-black uppercase mb-6">
                Formulir Reservasi & Konsultasi
              </h3>

              {formSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-950/20 border border-emerald-500/30 p-8 rounded-sm text-center py-16 space-y-4"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="font-serif text-xl tracking-wider text-emerald-800">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="font-sans text-xs text-emerald-700 tracking-wider max-w-sm mx-auto uppercase leading-relaxed">
                    Terima kasih telah menghubungi Benang Kain. Asisten butik kami akan merespons melalui email/WhatsApp Anda dalam kurun 1x24 jam.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="user-name" className="font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-semibold">
                        Nama Lengkap *
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Cth: Elizabeth"
                        className="w-full px-4 py-3 bg-luxury-cream border border-gold-100 rounded-sm font-sans text-xs text-luxury-black focus:outline-none focus:border-gold-500 placeholder-luxury-slate/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="user-email" className="font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-semibold">
                        Alamat Email *
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elizabeth@example.com"
                        className="w-full px-4 py-3 bg-luxury-cream border border-gold-100 rounded-sm font-sans text-xs text-luxury-black focus:outline-none focus:border-gold-500 placeholder-luxury-slate/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject Selector */}
                  <div className="space-y-2">
                    <label htmlFor="consultation-subject" className="font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-semibold">
                      Tujuan Hubungan (Subject)
                    </label>
                    <div className="relative">
                      <select
                        id="consultation-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-luxury-cream border border-gold-100 rounded-sm font-sans text-xs text-luxury-black focus:outline-none focus:border-gold-500 cursor-pointer"
                      >
                        {subjects.map((sub) => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message area */}
                  <div className="space-y-2">
                    <label htmlFor="user-message" className="font-sans text-[10px] tracking-widest text-luxury-slate uppercase font-semibold">
                      Tulis Pesan Anda *
                    </label>
                    <textarea
                      id="user-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Bagikan ide Anda seputar ukuran kustom, jenis bordiran, atau tanggal fitting showroom Anda..."
                      className="w-full px-4 py-3 bg-luxury-cream border border-gold-100 rounded-sm font-sans text-xs text-luxury-black focus:outline-none focus:border-gold-500 placeholder-luxury-slate/50 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full py-4 bg-luxury-black hover:bg-gold-500 hover:text-gold-900 text-gold-50 font-sans text-xs font-semibold tracking-widest uppercase rounded-sm cursor-pointer shadow transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Kirim Formulir Sekarang</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10px] text-center text-luxury-slate tracking-wide uppercase leading-normal">
                    * Kami menjaga kerahasiaan data pribadi Anda sejalan dengan kebijakan keamanan butik.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
