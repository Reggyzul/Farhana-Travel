import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Ticket } from 'lucide-react';

interface HeroProps {
  onRentClick: () => void;
  lang?: 'ID' | 'EN';
}

export default function Hero({ onRentClick }: HeroProps) {
  // Booking Form State matching screenshot inputs
  const [nama, setNama] = useState('');
  const [asal, setAsal] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [penumpang, setPenumpang] = useState('1 Orang');

  const handlePesanSekarang = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama) {
      alert('Mohon masukkan Nama Anda!');
      return;
    }

    const waNumber = '6285203217673';
    const message = `FORM BOOKING TICKET
FARHANA TRAVEL
🖊️ Nama   : ${nama}
🗒️ Hari       : 
📆 Tgl         : 
⏰ Pukul    : 
🌞 Jml PNP : ${penumpang}
📲 HP/WA : 
📍 Penjemputan : ${asal || 'Jatirogo / Tuban'}
⛩️ Tujuan : ${tujuan || 'Surabaya / Malang'}

🧳 Barang Bawaan : 
💰 TARIF : Mulai Rp 200.000 / Hari

Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI`;

    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const handleDirectPesanWA = () => {
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
💰 TARIF : Mulai Rp 200.000 / Hari

Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI`;

    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const handleScrollToRute = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gray-900 shadow-2xl min-h-[520px] flex items-center">
          
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1600"
              alt="Farhana Travel Road Trip Background"
              className="w-full h-full object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          </div>

          {/* Grid Layout inside Hero Card */}
          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Description matching screenshot */}
            <div className="lg:col-span-7 space-y-6 text-left text-white">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                  Travel bersama <br />
                  <span className="text-[#dc2626]">Farhana Travel</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl"
              >
                Travel bersama Farhana Travel, kami menawarkan layanan rental mobil Suzuki Ertiga bersih & nyaman (mulai Rp 200rb/hari) di daerah Jawa Timur, terutama pada rute travel Tuban, Juanda, Tanjung Perak, Sidoarjo, Gresik, Lamongan, Surabaya, Malang, dan sekitarnya.
              </motion.p>

              {/* Action Buttons: Pesan & Rute matching screenshot */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 pt-2"
              >
                <button
                  onClick={handleDirectPesanWA}
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                  <span>Pesan</span>
                </button>

                <button
                  onClick={handleScrollToRute}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-sans font-bold text-sm px-7 py-3 rounded-xl transition-all cursor-pointer border border-white/20"
                >
                  Rute
                </button>
              </motion.div>

            </div>

            {/* Right Column: Floating White Booking Card matching reference screenshot 1:1 */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-gray-800 relative overflow-hidden border-b-4 border-[#dc2626]"
              >
                {/* Form Header matching screenshot */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-100 text-left">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700">
                    <Ticket className="w-4 h-4 text-gray-700" />
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-800">
                    Info Pemesanan
                  </h3>
                </div>

                {/* Form Inputs matching screenshot 1:1 */}
                <form onSubmit={handlePesanSekarang} className="space-y-4 text-left">
                  
                  {/* Nama Anda */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-600">
                      Nama anda
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#dc2626] focus:bg-white transition-all font-sans text-gray-800 outline-none"
                    />
                  </div>

                  {/* Asal & Tujuan Side by Side */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-600">
                        Asal
                      </label>
                      <input
                        type="text"
                        value={asal}
                        onChange={(e) => setAsal(e.target.value)}
                        className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#dc2626] focus:bg-white transition-all font-sans text-gray-800 outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-600">
                        Tujuan
                      </label>
                      <input
                        type="text"
                        value={tujuan}
                        onChange={(e) => setTujuan(e.target.value)}
                        className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#dc2626] focus:bg-white transition-all font-sans text-gray-800 outline-none"
                      />
                    </div>
                  </div>

                  {/* Jumlah Penumpang */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-600">
                      Jumlah Penumpang
                    </label>
                    <select
                      value={penumpang}
                      onChange={(e) => setPenumpang(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#dc2626] focus:bg-white transition-all font-sans text-gray-800 cursor-pointer outline-none"
                    >
                      <option value="1 Orang">1 Orang</option>
                      <option value="2 Orang">2 Orang</option>
                      <option value="3-4 Orang">3 - 4 Orang</option>
                      <option value="5-7 Orang (Rombongan)">5 - 7 Orang</option>
                    </select>
                  </div>

                  {/* Bright Red Submit Button: Pesan Sekarang */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                    >
                      Pesan Sekarang
                    </button>
                  </div>

                </form>

              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
