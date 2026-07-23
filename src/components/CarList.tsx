import React from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { motion } from 'motion/react';
import { Users, Fuel, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

interface CarListProps {
  onSelectCar: (car: Car) => void;
}

export default function CarList({ onSelectCar }: CarListProps) {

  const handleWhatsAppDirect = (carName: string) => {
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
⛩️ Tujuan : 

🧳 Barang Bawaan : 
💰 TARIF : Mulai Rp 150.000 / Hari (${carName})

Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="cars" className="py-16 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2" id="cars-heading">
          <span className="font-sans font-bold text-xs text-[#dc2626] uppercase tracking-wider">
            ARMADA UNGGULAN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Suzuki Ertiga – Mulai Rp 150.000 / Hari
          </h2>
          <p className="font-sans text-gray-600 text-sm leading-relaxed">
            Pilihan armada terbaik keluarga, bersih, harum, dingin, dan sangat irit untuk perjalanan Anda.
          </p>
        </div>

        {/* Featured Car Card */}
        <div className="max-w-4xl mx-auto">
          {CARS.map((car) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={car.id}
              className="bg-slate-50 rounded-3xl border border-gray-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              id={`car-card-${car.id}`}
            >
              {/* Car Image Column */}
              <div className="lg:col-span-6 bg-white p-8 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="absolute top-4 left-4 bg-[#dc2626] text-white font-sans font-bold text-xs px-3.5 py-1.5 rounded-full shadow">
                  MULAI 150 RB / HARI
                </div>
                
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-auto object-contain max-h-[260px] hover:scale-105 transition-transform duration-500 py-4"
                />

                <div className="w-full flex items-center justify-center gap-4 text-xs font-semibold text-gray-600 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#dc2626]" />
                    <span>7 Kursi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="w-4 h-4 text-[#dc2626]" />
                    <span>Mesin Irit & Halus</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#dc2626]" />
                    <span>Steril & Harum</span>
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2.5 py-1 rounded-md">
                        Pilihan Keluarga No. 1
                      </span>
                      <h3 className="font-display font-extrabold text-2xl text-gray-900 mt-2">
                        {car.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-gray-400 font-bold uppercase">Harga Sewa</div>
                      <div className="font-display font-black text-xl text-[#dc2626]">
                        Rp 150.000 <span className="text-xs font-normal text-gray-500">/Hari</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                    {car.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                    <div className="font-sans font-bold text-xs text-gray-800 uppercase">Fasilitas Utama:</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {car.specifications.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <div>
                            <span className="text-gray-400 font-medium block text-[10px]">{spec.label}</span>
                            <span className="font-bold text-gray-800">{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => handleWhatsAppDirect(car.name)}
                    className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-xs uppercase py-3.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-current" />
                    <span>Pesan via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onSelectCar(car)}
                    className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white font-sans font-bold text-xs uppercase py-3.5 px-5 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                  >
                    Form Pemesanan
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
