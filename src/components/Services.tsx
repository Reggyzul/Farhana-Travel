import React from 'react';
import { Navigation, MapPin, CheckCircle, Car } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const routesList = [
    {
      title: 'Tuban – Bojonegoro – Lamongan',
      subtitle: 'Rute Travel Harian',
      desc: 'Layanan antar-jemput harian yang nyaman & aman dengan Suzuki Ertiga.',
      price: 'Mulai Rp 300.000 / Hari'
    },
    {
      title: 'Tuban / Jatirogo – Surabaya',
      subtitle: 'Drop Off & Shuttle Bandara Juanda',
      desc: 'Antar jemput tepat waktu untuk keperluan bisnis, keluarga, atau penerbangan.',
      price: 'Mulai Rp 300.000'
    },
    {
      title: 'Tuban / Jatirogo – Malang & Batu',
      subtitle: 'Perjalanan Wisata & Perjalanan Dinas',
      desc: 'Paket travel & sewa mobil keluarga menuju destinasi wisata Malang & Batu.',
      price: 'Mulai Rp 300.000'
    },
    {
      title: 'Sewa Suzuki Ertiga (All-In / Lepas Kunci)',
      subtitle: 'Layanan Spesial Farhana Travel',
      desc: 'Armada bersih, harum, AC dingin double blower, siap ditemani driver ramah.',
      price: 'Rp 300.000 / Hari'
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
💰 TARIF : Mulai Rp 300.000 / Hari

Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="services" className="py-16 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="font-sans font-bold text-xs text-[#dc2626] uppercase tracking-wider">
            RUTE & LAYANAN TRAVEL
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Pilihan Rute Farhana Travel
          </h2>
          <p className="font-sans text-gray-600 text-sm leading-relaxed">
            Menemani perjalanan anda sepenuh hati dengan armada Suzuki Ertiga di Tuban dan kota-kota sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routesList.map((route, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full border border-emerald-100">
                    {route.price}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900">
                    {route.title}
                  </h3>
                  <p className="text-xs text-[#dc2626] font-semibold mt-0.5">
                    {route.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {route.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Pelayanan Sepenuh Hati</span>
                </div>

                <button
                  onClick={() => handleBookRoute(route.title)}
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
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
