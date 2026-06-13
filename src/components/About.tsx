import { Sparkles, Trophy, HeartHandshake, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { BOUTIQUE_INFO } from '../data';

export default function About() {
  const brandPillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-gold-500 stroke-[1.5]" />,
      title: 'Desain Otentik Nusantara',
      desc: 'Setiap motif sulaman disesuaikan dari ragam hias kebudayaan nusantara secara orisinil, menghasilkan perpaduan kontemporer elegan yang sarat makna.',
    },
    {
      icon: <Trophy className="w-5 h-5 text-gold-500 stroke-[1.5]" />,
      title: 'Eksklusivitas Koleksi',
      desc: 'Kami membatasi proses pembuatan setiap model busana. Eksklusivitas bahan dan corak menjamin Anda tampil anggun secara unik tanpa plagiarisme mode.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-gold-500 stroke-[1.5]" />,
      title: 'Jahitan Rapi & Presisi',
      desc: 'Seperti ulasan pelanggan setia kami, pengerjaan pola bordiran dan keliman butik dilakukan secara sangat teliti, mengutamakan kenyamanan maksimal kulit.',
    },
    {
      icon: <Eye className="w-5 h-5 text-gold-500 stroke-[1.5]" />,
      title: 'Layanan Desain Custom',
      desc: 'Dari showroom Summarecon Burgundy, kami melayani pemesanan kain bordir kustom, kebaya wisuda, couture gaun pesta, hingga pakaian seragam semi-formal.',
    },
  ];

  return (
    <section id="about-us-section" className="bg-gold-50 pt-24 sm:pt-32 pb-16">
      
      {/* 1. Header Hero Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.4em] text-gold-500 uppercase font-light inline-block mb-3 animate-pulse">
            Warisan Keindahan Nusantara
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-widest text-luxury-black font-light mb-6 uppercase">
            Our Story & Heritage
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-500 mx-auto mb-6" />
          <p className="font-serif text-lg sm:text-xl italic text-luxury-charcoal/85 max-w-2xl mx-auto leading-relaxed">
            &ldquo;Menenun harmoni keagungan tradisi Indonesia ke dalam busana modern yang minimalis.&rdquo;
          </p>
        </div>

        {/* Diagonal Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6" id="about-history-narrative">
            <h3 className="font-serif text-2xl sm:text-3xl tracking-wide text-luxury-black font-light capitalize">
              Kisah Cerita Benang Kain Embroidery
            </h3>
            <p className="font-sans text-sm text-luxury-charcoal leading-relaxed">
              Di tengah maraknya bordir mesin modern, Benang Kain Embroidery yang didirikan oleh dr. Ayu Melfiza merupakan isteri dari Kolonel Cke Triyadi Sujatmiko, S.Sos., M.Tr(Han) tetap mempertahankan keindahan bordir manual sebagai bentuk karya seni yang memiliki nilai estetika tinggi, eksklusif, dan penuh sentuhan personal. Dikerjakan oleh pengrajin berpengalaman, sehingga menghasilkan jahitan yang rapi, detail, dan memiliki karakter unik yang tidak dapat sepenuhnya ditiru oleh mesin bordir modern.
            </p>
            <p className="font-sans text-sm text-luxury-charcoal leading-relaxed">
              Sejak didirikan pada tahun 2020, Benang Kain Embroidery terus berkembang sebagai usaha bordir yang menciptakan keindahan bunga yang menjadi daya tarik tersendiri. Sebagai tailor dan butik fashion selalu melayani berbagai kebutuhan customer, mulai dari bordir untuk busana maupun aksesoris seperti pakaian, kebaya, daster, mukena, gamis dan souvenir.
            </p>
            <p className="font-sans text-sm text-luxury-charcoal leading-relaxed">
              Dukungan dari Ketua Umum Persit Kartika Chandra Kirana, Ny. Uli Simanjuntak melalui program Persit Bisa II menjadi energi besar UMKM Benang Kain Embroidery.
            </p>
            <p className="font-sans text-sm text-luxury-charcoal leading-relaxed">
              Program ini menekankan pentingnya pemberdayaan kerajinan lokal. Pembina Persit Kartika Chandra Kirana Cabang XXI Pussiberad PG Mabesad, Brigjen TNI, Dr. Fransiscus Ari Susetio S.E., M.Han,  selalu memberikan dorongan dan dukungan untuk UMKM Benang Kain Embroidery milik Ny. Ayu Triyadi.

Sebagai usaha bordir manual, Benang Kain Embroidery terus berupaya menghadirkan produk bordir yang berkualitas dengan sentuhan seni dan kreativitas tinggi.

Dengan mengutamakan detail, kerapihan, dan desain custom.

Usaha ini siap menjadi pilihan terbaik untuk kebutuhan bordir manual di semua kalangan.
            </p>
            <div className="pt-4 flex items-center space-x-6">
              <div>
                <span className="block font-serif text-4xl text-gold-500 font-light">100%</span>
                <span className="font-sans text-[10px] tracking-widest text-luxury-slate uppercase">Handcrafted</span>
              </div>
              <div className="w-[1px] h-10 bg-gold-200" />
              <div>
                <span className="block font-serif text-4xl text-gold-500 font-light">5.0</span>
                <span className="font-sans text-[10px] tracking-widest text-luxury-slate uppercase">Customer Rating</span>
              </div>
              <div className="w-[1px] h-10 bg-gold-200" />
              <div>
                <span className="block font-serif text-4xl text-gold-500 font-light">Bekasi</span>
                <span className="font-sans text-[10px] tracking-widest text-luxury-slate uppercase">Summarecon</span>
              </div>
            </div>
          </div>

          {/* Right Image Frame with Craftsmanship Details */}
          <div className="lg:col-span-6" id="about-craftsmanship-images">
            <div className="relative aspect-[4/3] bg-luxury-cream border border-gold-100/30 overflow-hidden shadow-lg group">
              <img
                src="/images/about/artisan_craft_1779958321622.png"
                alt="Embroidery craftsmanship"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-gold-50">
                <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-gold-500 block mb-1">
                  Atelier Detail
                </span>
                <p className="font-serif text-xs italic opacity-90">
                  Proses penyulaman benang katun pada sutra luhur secara manual oleh pengrajin Benang Kain.
                </p>
              </div> */}
            </div>
          </div>

        </div>
      </div>

      {/* 2. Core Pillars (Bento Grid Style) */}
      <div className="bg-luxury-cream border-y border-gold-100/40 py-20 px-4 mb-20" id="brand-pillars-box">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="font-sans text-[9px] tracking-[0.3em] text-gold-500 uppercase font-light">
              Prinsip Kami
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-widest text-luxury-black uppercase mt-1">
              Pilar Kebanggaan Butik Nusantara
            </h3>
            <div className="w-10 h-[1px] bg-gold-500 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-gold-50 p-7 border border-gold-100/20 hover:border-gold-500/40 rounded-xs transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 flex justify-center md:justify-start">
                    {pillar.icon}
                  </div>
                  <h4 className="font-serif text-lg tracking-wider text-luxury-black font-semibold mb-3">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-luxury-slate leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* 3. physical Boutique Summarecon Address Invitation Callout */}
      <div className="max-w-5xl mx-auto px-4 text-center pb-8" id="show-room-invitation">
        <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-12 rounded-sm max-w-4xl mx-auto">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-500 uppercase font-semibold block mb-3">
            Visit Our Showroom
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl tracking-wider text-luxury-black font-light mb-4 uppercase">
            Ruko Burgundy Residence
          </h3>
          <p className="font-sans text-xs sm:text-sm text-luxury-charcoal max-w-2xl mx-auto mb-6 leading-relaxed">
            Mari temukan kehalusan benang kain dan nikmati sensasi fitting terbaik secara personal. Kami terletak di kompleks Ruko Burgundy Residence Summarecon Bekasi, menyajikan suasana belanja privat eksklusif.
          </p>
          <p className="font-bold text-xs font-sans tracking-widest text-gold-600 block mb-6">
            📍 {BOUTIQUE_INFO.address}
          </p>
          <a
            href={BOUTIQUE_INFO.googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-luxury-black text-gold-50 font-sans text-[10px] tracking-widest uppercase hover:bg-gold-500 transition-all rounded-xs shadow-md"
          >
            Buka Navigasi Rute Maps
          </a>
        </div>
      </div>

    </section>
  );
}
