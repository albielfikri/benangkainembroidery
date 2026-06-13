import { Product, Testimonial, InstagramPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Sekar Jagad Silk Kebaya',
    price: 2450000,
    category: 'Kebaya',
    description: 'An exquisite statement modern Kebaya in signature translucent cream organza. Embellished with delicate hand-embroidered white orchid patterns that trail along the tailored high collar and graceful sheer sleeves. Each bloom is hand-contoured, celebrating contemporary Nusantara heritage.',
    details: [
      'Tailored from premium translucent, structure-holding organza',
      'Exclusive hand-embroidered floral motifs using fine high-lustre threads',
      'Classic hidden front closure with elegant luxury metal press buttons',
      'Slightly tapered modern silhouette with soft padding slots',
      'Original limited design of Benang Kain Embroidery Summarecon Bekasi atelier',
      'Dry Clean only'
    ],
    images: [
      '/images/catalog/catalog_kebaya_1779958284408.png',
      '/images/about/artisan_craft_1779958321622.png',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    featured: true,
    isNew: true
  },
  {
    id: 'prod-2',
    name: 'Nirwana Gold-Trim Kaftan',
    price: 3100000,
    category: 'Kaftan',
    description: 'Sartorial luxury redefined. This flowing Kaftan in ultra-fine, pure pastel sage-green silk drapes spectacularly, creating an ethereal contour. Highlighted by complex heritage embroidery along the neck collar bib using premium fine matte-gold and pearl-white threads.',
    details: [
      '100% premium grade heavy mulberry silk with a satin finish',
      'Extremely soft drape designed for effortless elegance',
      'Incredibly detailed, hand-guided gold embroidery collar detailing',
      'Relaxed, flowy standard fit that adjusts to various silhouettes',
      'Designed and handmade ethically in West Java'
    ],
    images: [
      '/images/catalog/catalog_kaftan_1779958302734.png',
      '/images/about/artisan_craft_1779958321622.png',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600'
    ],
    sizes: ['One Size', 'CustomSize'],
    featured: true,
    isNew: false
  },
  {
    id: 'prod-3',
    name: 'Srikandi Embroidered Coat',
    price: 1850000,
    category: 'Casual Outer',
    description: 'A structural, campaign-featured modern outerwear crafted from premium heavy textured native linen of the highest weave density. Highlighted by subtle yet striking modern botanical hand-embroidery over the lapels and shoulders, balancing raw heritage craft with clean luxury architecture.',
    details: [
      'Crafted from 100% heavy textured crisp linen-canvas blend',
      'Earthy, warm off-white minimalist ivory aesthetic with bespoke detailing',
      'Two elegant deep welt pockets integrated into side seams',
      'Dropped shoulder silhouette for versatile layering options',
      'Breathable, lightweight, yet retains pristine structure'
    ],
    images: [
      '/images/hero/fashion_hero_1779958266662.png',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'Custom'],
    featured: true,
    isNew: true
  },
  {
    id: 'prod-4',
    name: 'Prameswari Regal Abaya',
    price: 2950000,
    category: 'Abaya',
    description: 'Breathtaking modest luxury. Tailored from highly exclusive charcoal midnight black linen-viscose blend, featuring premium tone-on-tone fine silver embroidery on the flared trumpet cuffs. Created for special celebrations and refined gala evenings.',
    details: [
      'Signature heavy linen-rayon blend that feels smooth and premium',
      'Intricate, dense Javanese vine embroidery in elegant charcoal-silver threading',
      'Flowing flared trumpet-style sleeves with satin inner cuffs',
      'Includes premium matching embroidered shawl scarf',
      'Front hook closure with subtle concealed plaque buttoning'
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600',
      '/images/about/artisan_craft_1779958321622.png',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    featured: false,
    isNew: false
  },
  {
    id: 'prod-5',
    name: 'Kencana Hand-Woven Blouse',
    price: 1650000,
    category: 'Premium Silk',
    description: 'Made from hand-woven organic silk fibers, this relaxed-fit tunic blouse represents absolute casual premium perfection. Embroidered with geometric ethnic Nusantara patterns bordering the split-neck and tailored sleeves.',
    details: [
      '100% wild silk blend hand-spun thread technique',
      'Symmetric geometric hand-guided embroidery bordering collar',
      'Split-neck with soft micro-hook closures',
      'Subtle high-low curved hemline with side vents',
      'Highly breathable textured linen-silk feels cooler on skin'
    ],
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'Custom'],
    featured: false,
    isNew: true
  },
  {
    id: 'prod-6',
    name: 'Aruna Embroidered Kimono',
    price: 1450000,
    category: 'Casual Outer',
    description: 'Our modern embroidery lounger overlay. Tailored from a supreme linen-cotton blend. Accented with very subtle off-white leaf-vein embroidery running down the long lapels. Perfect for minimalist styling during weekend brunches or boutique gallery trips.',
    details: [
      'Sustainable premium linen and organic combed cotton fabric blend',
      'Minimalist botanical embroidered panels down front overlap',
      'Wide kimonoid sleeves for maximum comfort and style layers',
      'Exquisite french-seamed internal structure for supreme longevity',
      'Extremely versatile to layer with solid silk underslips or trousers'
    ],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    featured: false,
    isNew: false
  },
  {
    id: 'prod-7',
    name: 'Jelita Encim Kebaya',
    price: 1250000,
    category: 'Kebaya',
    description: 'A classic Peranakan-inspired encim kebaya with vibrant pastel floral embroidery. Perfect for daytime formal events or chic casual pairings.',
    details: [
      'Soft and breathable fine cotton fabric',
      'Hand-cranked pastel floral embroidery',
      'Traditional V-neck scalloped collar',
      'Front button closure',
      'Dry clean or gentle hand wash'
    ],
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: false,
    isNew: true
  },
  {
    id: 'prod-8',
    name: 'Maharani Velvet Kebaya',
    price: 2850000,
    category: 'Kebaya',
    description: 'A luxurious dark velvet kebaya encrusted with heavy gold thread embroidery. Designed for evening galas and majestic ceremonial events.',
    details: [
      'Premium heavy midnight velvet',
      'Thick gold thread artisan embroidery',
      'Fitted modern contour',
      'Inner soft silk lining',
      'Dry Clean only'
    ],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'Custom'],
    featured: true,
    isNew: false
  },
  {
    id: 'prod-9',
    name: 'Sahara Desert Kaftan',
    price: 1950000,
    category: 'Kaftan',
    description: 'A breezy sand-colored kaftan made from crinkle georgette, featuring subtle geometric border embroidery for a modest yet striking look.',
    details: [
      'Lightweight crinkle georgette material',
      'Minimalist geometric embroidery borders',
      'Loose draped silhouette',
      'Includes matching inner slip',
      'Easy care and wrinkle resistant'
    ],
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600'
    ],
    sizes: ['One Size', 'CustomSize'],
    featured: false,
    isNew: true
  },
  {
    id: 'prod-10',
    name: 'Almira Flow Kaftan',
    price: 2200000,
    category: 'Kaftan',
    description: 'An ethereal dusty rose kaftan constructed from soft chiffon silk. The neckline is adorned with pearl beads and hand-guided silver thread work.',
    details: [
      'Premium chiffon silk blend',
      'Hand-beaded pearl and silver embroidery',
      'Elegant batwing sleeves',
      'Fully lined with soft rayon',
      'Designed for weddings and formal gatherings'
    ],
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600'
    ],
    sizes: ['One Size', 'CustomSize'],
    featured: false,
    isNew: false
  },
  {
    id: 'prod-11',
    name: 'Layla Noir Abaya',
    price: 2750000,
    category: 'Abaya',
    description: 'A classic pure black abaya crafted from premium nidha fabric, boasting intricate floral lace embroidery trailing down the sides and sleeves.',
    details: [
      'Authentic premium nidha fabric from Dubai',
      'Detailed tone-on-tone lace embroidery',
      'Front open design with snap buttons',
      'Includes premium matching hijab scarf',
      'Highly breathable and elegant drape'
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    featured: false,
    isNew: true
  },
  {
    id: 'prod-12',
    name: 'Zahra Embellished Abaya',
    price: 3200000,
    category: 'Abaya',
    description: 'Our most luxurious abaya offering, featuring hand-stitched Swarovski crystals over deep green velvet-touch embroidery motifs.',
    details: [
      'Heavyweight luxury crêpe fabric',
      'Genuine crystal embellishments',
      'Exquisite deep green embroidery contrast',
      'Closed front modern silhouette',
      'Strictly dry clean only'
    ],
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom'],
    featured: true,
    isNew: false
  },
  {
    id: 'prod-13',
    name: 'Rinjani Linen Vest',
    price: 1150000,
    category: 'Casual Outer',
    description: 'A versatile longline vest tailored from raw earthy linen. Accentuated with subtle tribal embroidery along the hem and pockets.',
    details: [
      '100% natural raw linen',
      'Sleeveless longline structure',
      'Functional deep patch pockets',
      'Tribal-inspired border embroidery',
      'Perfect for tropical layering'
    ],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L'],
    featured: false,
    isNew: true
  },
  {
    id: 'prod-14',
    name: 'Malioboro Duster Coat',
    price: 1750000,
    category: 'Casual Outer',
    description: 'A lightweight duster coat made of soft rayon twill. Features large contemporary botanical embroidery on the upper back.',
    details: [
      'Flowy premium rayon twill',
      'Large artistic botanical back-embroidery',
      'Drop shoulder relaxed fit',
      'Matching fabric tie belt included',
      'Machine washable on gentle cycle'
    ],
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'Custom'],
    featured: false,
    isNew: false
  },
  {
    id: 'prod-15',
    name: 'Cendana Raw Silk Blouse',
    price: 2400000,
    category: 'Premium Silk',
    description: 'A structured blouse crafted from pure raw silk with a distinct texture. Elegantly embroidered with gold threads around the cuffs and mandarin collar.',
    details: [
      '100% pure raw silk with natural slubs',
      'Mandarin collar with gold embroidery',
      'Concealed front placket',
      'Tailored crisp fit',
      'A true statement piece for formal office wear or dinners'
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    isNew: true
  },
  {
    id: 'prod-16',
    name: 'Keraton Silk Tunic',
    price: 2100000,
    category: 'Premium Silk',
    description: 'An elongated silk tunic showcasing asymmetrical Javanese floral embroidery. The liquid-like drape of the silk creates a stunning silhouette.',
    details: [
      'Lustrous liquid satin silk',
      'Asymmetrical side embroidery placement',
      'Boat neckline',
      'High side slits for easy movement',
      'Requires delicate care and dry cleaning'
    ],
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600'
    ],
    sizes: ['S', 'M', 'L', 'Custom'],
    featured: false,
    isNew: false
  },
  {
    id: 'prod-17',
    name: 'Kusuma GPT Kebaya Edition 1',
    price: 3500000,
    category: 'Kebaya',
    description: 'An exclusive new addition featuring intricate hand-stitching with premium materials. This Kebaya offers a regal look perfect for the most special occasions.',
    details: [
      'Bespoke manual embroidery craftsmanship',
      'Ultra-premium translucent fabric',
      'Timeless elegant silhouette',
      'Exclusively custom tailored upon request'
    ],
    images: [
      '/images/catalog/GPT1.png',
      '/images/about/artisan_craft_1779958321622.png'
    ],
    sizes: ['Custom'],
    featured: true,
    isNew: true
  },
  {
    id: 'prod-18',
    name: 'Kusuma GPT Kebaya Edition 2',
    price: 3750000,
    category: 'Kebaya',
    description: 'A masterpiece of modern Nusantara design. The exquisite detailing on this Kebaya highlights the dedication to our slow fashion ethos.',
    details: [
      'Exquisite signature floral embroidery patterns',
      'High-quality imported silk inner lining',
      'Sophisticated high neck design',
      'Dry clean only'
    ],
    images: [
      '/images/catalog/GPT2.png',
      '/images/catalog/catalog_kebaya_1779958284408.png'
    ],
    sizes: ['Custom'],
    featured: true,
    isNew: true
  },
  {
    id: 'prod-19',
    name: 'Kusuma GPT Kebaya Edition 3',
    price: 3850000,
    category: 'Kebaya',
    description: 'A brilliant contemporary interpretation of the classic Nusantara Kebaya, crafted with love and extreme attention to detail for a truly stunning look.',
    details: [
      'Exquisite and highly detailed modern embroidery',
      'Luxurious breathable fabric',
      'Subtle contemporary contouring',
      'Dry clean only'
    ],
    images: [
      '/images/catalog/GPT3.png',
      '/images/catalog/catalog_kebaya_1779958284408.png'
    ],
    sizes: ['Custom'],
    featured: true,
    isNew: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aldi Novian',
    role: 'Verified Google Local Reviewer',
    rating: 5,
    text: 'Butiknya bagus, bahannya bagus, ngerjainnya juga sangat rapih, ini baru butik nusantara! ❤️ Kehalusan jahitan dan bordirannya benar-benar terasa eksklusif.',
    date: '3 months ago'
  },
  {
    id: 't-2',
    name: 'Ayu Miko',
    role: 'Connoisseur client',
    rating: 5,
    text: 'Kain bordirnya eksklusif dan keren banget, sangat elegan di pakai untuk acara semi-formal. Bagusnya lagi harga butik premium ini ramah di kantong.',
    date: '3 months ago'
  },
  {
    id: 't-3',
    name: 'Muhammad Rifai',
    role: 'Google Local Guide',
    rating: 5,
    text: 'Desain dan motif otentik Indonesia banget.. Benar-benar menunjukkan keanggunan bordir khas nusantara dengan modifikasi pola yang kontemporer dan modern.',
    date: '3 months ago'
  },
  {
    id: 't-4',
    name: 'Sri Handayani',
    role: 'VVIP Member Bekasi Summarecon',
    rating: 5,
    text: 'Jasa bordir custom mereka di butik Summarecon Burgundy sangat presisi. Saya memesan Kebaya wisuda custom di sini dan dapet banyak pujian saat acara. Pelayanan bintang lima!',
    date: '1 month ago'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: '/images/catalog/catalog_kebaya_1779958284408.png',
    likes: '1.2k',
    comments: '42',
    link: 'https://www.instagram.com/benangkainembroidery_/'
  },
  {
    id: 'ig-2',
    imageUrl: '/images/catalog/catalog_kaftan_1779958302734.png',
    likes: '890',
    comments: '18',
    link: 'https://www.instagram.com/benangkainembroidery_/'
  },
  {
    id: 'ig-3',
    imageUrl: '/images/hero/fashion_hero_1779958266662.png',
    likes: '2.5k',
    comments: '110',
    link: 'https://www.instagram.com/benangkainembroidery_/'
  },
  {
    id: 'ig-4',
    imageUrl: '/images/about/artisan_craft_1779958321622.png',
    likes: '1.7k',
    comments: '64',
    link: 'https://www.instagram.com/benangkainembroidery_/'
  }
];

export const BOUTIQUE_INFO = {
  name: 'Benang Kain Embroidery',
  phone: '0811-8809-0899',
  phoneFormatted: '+62 811-8809-0899',
  phoneRaw: '6281188090899', // for WhatsApp url
  address: 'RUKO BERGUNDY No.RAL 33, RT.001/RW.001, Summarecon Bekasi, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17123',
  googleMapsLink: 'https://maps.google.com/?q=Ruko+Burgundy+Benang+Kain+Embroidery+Summarecon+Bekasi',
  hours: 'Open Daily: 10:00 AM - 08:00 PM',
  instagram: 'https://www.instagram.com/benangkainembroidery_/',
  instagramHandle: '@benangkainembroidery_',
  email: 'info@benangkainembroidery.com',
  website: 'benangkainembroidery.com',
  coords: { lat: -6.2241, lng: 106.9961 } // approximate ruko burgundy summarecon bekasi
};
