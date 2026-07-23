import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  UserCheck, 
  Banknote, 
  MapPin, 
  Clock, 
  Headset, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  Award,
  ThumbsUp,
  HeartHandshake
} from 'lucide-react';

interface AdvantagesProps {
  onBookClick?: () => void;
}

export default function Advantages({ onBookClick }: AdvantagesProps) {
  const advantagesList = [
    {
      id: 'armada-steril',
      icon: <ShieldCheck className="w-7 h-7 text-[#dc2626]" />,
      badge: 'Jaminan Kebersihan',
      badgeBg: 'bg-red-50 text-[#dc2626]',
      title: 'Armada Prima, Bersih & Steril',
      description: 'Mobil Suzuki Ertiga selalu dicuci bersih, wangi, AC double blower super dingin, dan dirawat secara berkala untuk kenyamanan maksimal perjalanan Anda.',
      highlights: ['Kabin Bebas Bau', 'AC Double Blower', 'Servis Rutin Berkala']
    },
    {
      id: 'driver-handal',
      icon: <UserCheck className="w-7 h-7 text-amber-500" />,
      badge: 'Sopir Pengalaman',
      badgeBg: 'bg-amber-50 text-amber-700',
      title: 'Pengemudi Ramah & Berpengalaman',
      description: 'Driver profesional yang sopan, ramah, serta menguasai jalur cepat & aman di seluruh Jawa Timur (Tuban, Surabaya, Malang, Lamongan, Bojonegoro).',
      highlights: ['Ramah & Santun', 'Paham Rute Luar Kota', 'Mengutamakan Keselamatan']
    },
    {
      id: 'harga-transparan',
      icon: <Banknote className="w-7 h-7 text-emerald-600" />,
      badge: 'Hemat & Jujur',
      badgeBg: 'bg-emerald-50 text-emerald-700',
      title: 'Harga Murah & Tanpa Biaya Tersembunyi',
      description: 'Tarif sewa & travel mulai dari Rp 150.000 / Hari. Sangat transparan tanpa biaya tersembunyi, cocok untuk kantong keluarga maupun bisnis.',
      highlights: ['Mulai Rp 150rb/Hari', 'Tanpa Biaya Siluman', 'DP Ringan / Bayar di Tempat']
    },
    {
      id: 'door-to-door',
      icon: <MapPin className="w-7 h-7 text-blue-600" />,
      badge: 'Praktis & Nyaman',
      badgeBg: 'bg-blue-50 text-blue-700',
      title: 'Layanan Door to Door (Antar Jemput)',
      description: 'Tidak perlu repot ke terminal atau pool! Kami siap menjemput Anda tepat di depan pintu rumah dan mengantar hingga ke lokasi tujuan akhir.',
      highlights: ['Jemput Depan Rumah', 'Bebas Repot Transit', 'Titik Antar Sesuai Request']
    },
    {
      id: 'tepat-waktu',
      icon: <Clock className="w-7 h-7 text-purple-600" />,
      badge: 'Disiplin Waktu',
      badgeBg: 'bg-purple-50 text-purple-700',
      title: 'Tepat Waktu & Jadwal Terjamin',
      description: 'Kami sangat menghargai waktu Anda. Jadwal keberangkatan tepat waktu sehingga Anda tidak perlu khawatir terlambat acara penting atau penerbangan.',
      highlights: ['Standby Lebih Awal', 'Jadwal Fleksibel', 'Garansi Keberangkatan']
    },
    {
      id: 'cs-responsive',
      icon: <Headset className="w-7 h-7 text-teal-600" />,
      badge: 'Fast Response 24/7',
      badgeBg: 'bg-teal-50 text-teal-700',
      title: 'Layanan WhatsApp 24 Jam Nonstop',
      description: 'Customer Service Farhana Travel siap merespons pertanyaan, konsultasi rute, dan pemesanan tiket Anda dengan cepat kapan saja dibutuhkan.',
      highlights: ['Respon Hits Cepat', 'Konsultasi Gratis', 'Booking Mudah 2 Menit']
    }
  ];

  const statItems = [
    { label: 'Pelanggan Puas', value: '500+', subText: 'Perjalanan Sukses' },
    { label: 'Tarif Sewa', value: '150 Rb', subText: 'Mulai per Hari' },
    { label: 'Jaminan Waktu', value: '100%', subText: 'On-Time Departure' },
    { label: 'Layanan CS', value: '24/7', subText: 'WhatsApp Fast Response' }
  ];

  const handleWhatsAppConsultation = (title: string) => {
    const waNumber = '6285203217673';
    const message = `Halo Farhana Travel, saya tertarik dengan keunggulan layanan: ${title}. Boleh minta info selengkapnya?`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-gray-100">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="advantages-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#dc2626] font-display font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#dc2626]" />
            <span>MENGAPA MEMILIH FARHANA TRAVEL</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight uppercase">
            Keunggulan Layanan <span className="text-[#dc2626]">Farhana Travel</span>
          </h2>

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            Komitmen terbaik kami untuk memberikan pengalaman perjalanan travel dan sewa mobil Suzuki Ertiga teraman, terpercaya, dan paling nyaman di Tuban & sekitarnya.
          </p>
        </div>

        {/* 6 Grid Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#dc2626]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4 text-left">
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-[#dc2626] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Checklist Bullet Points */}
                <div className="pt-2 space-y-2 border-t border-gray-100">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Farhana Quality</span>
                <button
                  onClick={() => handleWhatsAppConsultation(item.title)}
                  className="text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                >
                  <span>Tanya CS</span>
                  <MessageCircle className="w-3.5 h-3.5 fill-current transform group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlighted Banner: Garansi Kepuasan & Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-slate-900 text-white rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          id="advantages-guarantee-banner"
        >
          {/* Decorative glowing gradient circle background */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 font-display font-bold text-xs">
                <HeartHandshake className="w-4 h-4 text-rose-400" />
                <span>KOMITMEN PELAYANAN SEPENUH HATI</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-tight">
                Siap Menemani Perjalanan Anda dengan Aman & Nyaman
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Nikmati kenyamanan maksimal naik armada Suzuki Ertiga dengan driver ramah dan berpengalaman. Dapatkan kemudahan booking instant cukup kirim pesan WhatsApp.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=6285203217673&text=Halo%20Farhana%20Travel,%20saya%20ingin%20tanya%20sewa%20mobil%20Suzuki%20Ertiga"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-xs uppercase px-6 py-3.5 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                  <span>Pesan Sekarang via WA</span>
                </a>

                {onBookClick && (
                  <button
                    onClick={onBookClick}
                    className="bg-white/15 hover:bg-white/25 text-white border border-white/20 font-sans font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    Lihat Armada (Rp 150rb)
                  </button>
                )}
              </div>
            </div>

            {/* Right Stats Grid Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {statItems.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl text-center space-y-1">
                  <div className="font-display font-black text-2xl sm:text-3xl text-red-400">
                    {stat.value}
                  </div>
                  <div className="font-sans font-bold text-xs text-white">
                    {stat.label}
                  </div>
                  <div className="font-sans text-[10px] text-slate-300">
                    {stat.subText}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
