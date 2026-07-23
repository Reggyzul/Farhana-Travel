import React from 'react';
import { Navigation, MapPin, CheckCircle, Car, Plane, Anchor, Building2, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const routesList = [
    {
      title: 'Tuban – Bandara Juanda (Surabaya)',
      subtitle: 'Drop Off & Shuttle Bandara 24 Jam',
      desc: 'Layanan antar-jemput tepat waktu ke Bandara Juanda untuk penerbangan domestik & internasional.',
      icon: <Plane className="w-5 h-5" />,
      badge: 'Shuttle Bandara'
    },
    {
      title: 'Tuban – Pelabuhan Tanjung Perak',
      subtitle: 'Shuttle Penyeberangan & Kapal Laut',
      desc: 'Pengantaran nyaman langsung ke dermaga Pelabuhan Tanjung Perak Surabaya tanpa repot.',
      icon: <Anchor className="w-5 h-5" />,
      badge: 'Shuttle Pelabuhan'
    },
    {
      title: 'Tuban – Sidoarjo & Krian',
      subtitle: 'Travel Harian & Perjalanan Keluarga',
      desc: 'Rute harian pintu ke pintu (door to door) menuju area Sidoarjo, Krian, dan sekitarnya.',
      icon: <MapPin className="w-5 h-5" />,
      badge: 'Door to Door'
    },
    {
      title: 'Surabaya – Gresik',
      subtitle: 'Rute Bisnis & Industri Gresik',
      desc: 'Antar jemput instan Surabaya menuju kawasan industri Gresik, Kebomas, Manyar & sekitarnya.',
      icon: <Building2 className="w-5 h-5" />,
      badge: 'Rute Bisnis'
    },
    {
      title: 'Surabaya – Lamongan & Babat',
      subtitle: 'Layanan Shuttle & Travel Harian',
      desc: 'Perjalanan aman & nyaman menghubungkan Kota Surabaya dengan Lamongan, Babat, hingga Tuban.',
      icon: <Navigation className="w-5 h-5" />,
      badge: 'Perjalanan Harian'
    },
    {
      title: 'Tuban – Bojonegoro – Lamongan',
      subtitle: 'Rute Utama Plat S',
      desc: 'Layanan antar-kota harian paling populer di daerah Tuban, Bojonegoro, dan Lamongan.',
      icon: <Navigation className="w-5 h-5" />,
      badge: 'Rute Utama'
    },
    {
      title: 'Tuban / Jatirogo – Malang & Batu',
      subtitle: 'Perjalanan Wisata & Perjalanan Dinas',
      desc: 'Paket travel & sewa mobil keluarga menuju destinasi wisata favorit Malang & Kota Batu.',
      icon: <Compass className="w-5 h-5" />,
      badge: 'Paket Wisata'
    },
    {
      title: 'Sewa Suzuki Ertiga (All-In / Lepas Kunci)',
      subtitle: 'Layanan Spesial Farhana Travel',
      desc: 'Armada bersih, harum, AC dingin double blower, siap ditemani driver ramah & santun.',
      icon: <Car className="w-5 h-5" />,
      badge: 'Armada Unggulan'
    }
  ];

  const handleBookRoute = (routeTitle: string) => {
    const waNumber = '6285203217673';
    const message = `FORM BOOKING TICKET
FARHANA TRAVEL
🖊️ Nama   : 
🗒️ Hari       : 
📆 Tgl         : 
⏰ Pukul    : 
🌞 Jml PNP : 
📲 HP/WA : 
📍 Penjemputan : 
⛩️ Tujuan : ${routeTitle}

🧳 Barang Bawaan : 
💰 TARIF : Mulai Rp 150.000 / Hari

Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-sans font-bold text-xs text-[#dc2626] uppercase tracking-wider bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full inline-block">
            RUTE & LAYANAN TRAVEL TERPERCAYA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Pilihan Rute Farhana Travel
          </h2>
          <p className="font-sans text-gray-700 text-sm sm:text-base font-medium leading-relaxed bg-white border border-gray-200/80 p-4 rounded-2xl shadow-sm max-w-2xl mx-auto">
            <span className="text-[#dc2626] font-bold block text-base sm:text-lg mb-1">
              Tarif Hemat Terjangkau Mulai Rp 150.000 / Hari
            </span>
            Menemani perjalanan Anda sepenuh hati dengan armada Suzuki Ertiga di Tuban, Surabaya, Juanda, Tanjung Perak, Sidoarjo, Gresik, Lamongan, Malang, dan sekitarnya.
          </p>
        </div>

        {/* Route Cards Grid (Without price tag on each card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routesList.map((route, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div className="space-y-3">
                {/* Top Badge & Icon */}
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold group-hover:bg-[#dc2626] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {route.icon}
                  </div>
                  <span className="bg-slate-100 text-slate-700 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {route.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-gray-900 leading-snug group-hover:text-[#dc2626] transition-colors mt-1">
                    {route.title}
                  </h3>
                  <p className="text-[11px] text-[#dc2626] font-semibold mt-0.5">
                    {route.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {route.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10.5px] text-gray-500 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Door to Door</span>
                </div>

                <button
                  onClick={() => handleBookRoute(route.title)}
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors cursor-pointer shadow-sm hover:shadow-md"
                >
                  Pesan Rute
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
