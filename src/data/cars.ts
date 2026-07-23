import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'suzuki-ertiga',
    name: 'Suzuki Ertiga MPV',
    nameAr: 'سوزوكي إرتيجا',
    category: 'Family MPV',
    pricePerDay: 150000,
    priceDisplay: 'Mulai Rp 150.000 / Hari',
    image: '/ertiga.png',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Irit & Halus)',
    fuelAr: 'بنزين',
    includeList: ['Mobil Bersih & Harum', 'AC Double Blower', 'Layanan Prima'],
    includeListAr: ['السيارة', 'تكييف'],
    description: 'Mobil keluarga ideal yang irit, nyaman, dan lapang. Sangat cocok untuk perjalanan wisata, keluarga, bisnis, atau dinas.',
    descriptionAr: 'سيارة عائلية مريحة ومناسبة للرحلات.',
    rating: 5.0,
    reviewsCount: 128,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Transmisi', value: 'Manual / Automatic', labelAr: 'القير', valueAr: 'عادي / أوتوماتيك' },
      { label: 'Fasilitas', value: 'Full AC, Audio Bluetooth, Clean Interior', labelAr: 'الميزات', valueAr: 'مكيف، بلوتوث' },
      { label: 'Kondisi', value: 'Terawat Rutin & Selalu Steril', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Budi Santoso',
    role: 'Pelanggan dari Tuban',
    text: 'Sewa mobil Suzuki Ertiga di Farhana Travel sangat memuaskan! Mobilnya sangat bersih, AC dingin, dan pelayanannya benar-benar sepenuh hati.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    carModel: 'Suzuki Ertiga',
    date: 'Juli 2026'
  },
  {
    id: 'testi-2',
    name: 'Siti Rahma',
    role: 'Pelanggan dari Jatirogo',
    text: 'Tarifnya terjangkau banget mulai 150 ribu perhari. Proses booking via WhatsApp cepat dan ramah. Rekomendasi banget untuk warga Tuban dan sekitarnya!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    carModel: 'Suzuki Ertiga',
    date: 'Juni 2026'
  },
  {
    id: 'testi-3',
    name: 'Ahmad Fauzi',
    role: 'Perjalanan Keluarga',
    text: 'Farhana Travel menemani perjalanan kami sepenuh hati. Mobil Ertiga-nya irit dan nyaman untuk perjalanan jauh. Terima kasih!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    carModel: 'Suzuki Ertiga',
    date: 'Mei 2026'
  }
];
