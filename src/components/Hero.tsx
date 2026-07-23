import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Ticket, Calendar, Clock, MapPin, Users, Luggage, Phone, User } from 'lucide-react';

interface HeroProps {
  onRentClick: () => void;
  lang?: 'ID' | 'EN';
}

export default function Hero({ onRentClick }: HeroProps) {
  // Booking Form State matching Farhana Travel WA Ticket Format
  const [nama, setNama] = useState('');
  const [hari, setHari] = useState('Senin');
  const [tgl, setTgl] = useState('');
  const [pukul, setPukul] = useState('08:00 WIB');
  const [jmlPnp, setJmlPnp] = useState('1 Orang');
  const [hpWa, setHpWa] = useState('');
  const [penjemputan, setPenjemputan] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [barangBawaan, setBarangBawaan] = useState('');

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
🗒️ Hari       : ${hari}
📆 Tgl         : ${tgl || 'Hari Ini'}
⏰ Pukul    : ${pukul}
🌞 Jml PNP : ${jmlPnp}
📲 HP/WA : ${hpWa || '-'}
📍 Penjemputan : ${penjemputan || 'Jatirogo / Tuban'}
⛩️ Tujuan : ${tujuan || 'Surabaya / Malang'}

🧳 Barang Bawaan : ${barangBawaan || '-'}
💰 TARIF : Mulai Rp 300.000 / Hari

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
💰 TARIF : Mulai Rp 300.000 / Hari

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
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gray-900 shadow-2xl min-h-[560px] flex items-center">
          
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1600"
              alt="Farhana Travel Road Trip Background"
              className="w-full h-full object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
          </div>

          {/* Grid Layout inside Hero Card */}
          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-6 text-left text-white">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <span className="inline-block px-3.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                  Menemani Perjalanan Anda Sepenuh Hati
                </span>
                
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
                Layanan rental mobil Suzuki Ertiga bersih, harum & dingin (mulai Rp 300rb/hari) di Jawa Timur: rute Tuban, Jatirogo, Bojonegoro, Lamongan, Surabaya, Malang, dan sekitarnya.
              </motion.p>

              {/* Action Buttons: Pesan & Rute */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 pt-2"
              >
                <button
                  onClick={handleDirectPesanWA}
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pesan Fast WA</span>
                </button>

                <button
                  onClick={handleScrollToRute}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-sans font-bold text-sm px-7 py-3.5 rounded-xl transition-all cursor-pointer border border-white/20"
                >
                  Lihat Rute
                </button>
              </motion.div>

            </div>

            {/* Right Column: Floating White Booking Card */}
            <div className="lg:col-span-6 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-100 text-gray-800"
              >
                {/* Form Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 text-left">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-[#dc2626]" />
                    <div>
                      <h3 className="font-display font-black text-sm sm:text-base text-gray-900 uppercase tracking-tight">
                        FORM BOOKING TICKET
                      </h3>
                      <p className="text-[10px] font-bold text-[#dc2626] uppercase">FARHANA TRAVEL</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-red-50 text-[#dc2626] font-bold px-2.5 py-1 rounded-full border border-red-100">
                    WA 085203217673
                  </span>
                </div>

                {/* Form Inputs matching requested fields */}
                <form onSubmit={handlePesanSekarang} className="space-y-3 text-left">
                  
                  {/* Row 1: Nama & HP/WA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 flex items-center gap-1">
                        <span>🖊️ Nama Lengkap *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Contoh: Rian Prasetya"
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white transition-all font-sans text-gray-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 flex items-center gap-1">
                        <span>📲 No. HP / WA</span>
                      </label>
                      <input
                        type="tel"
                        value={hpWa}
                        onChange={(e) => setHpWa(e.target.value)}
                        placeholder="Contoh: 085203217673"
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white transition-all font-sans text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Row 2: Hari, Tgl & Pukul */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700">
                        🗒️ Hari
                      </label>
                      <select
                        value={hari}
                        onChange={(e) => setHari(e.target.value)}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-2 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white font-sans text-gray-800 cursor-pointer"
                      >
                        <option value="Senin">Senin</option>
                        <option value="Selasa">Selasa</option>
                        <option value="Rabu">Rabu</option>
                        <option value="Kamis">Kamis</option>
                        <option value="Jumat">Jumat</option>
                        <option value="Sabtu">Sabtu</option>
                        <option value="Minggu">Minggu</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700">
                        📆 Tanggal
                      </label>
                      <input
                        type="date"
                        value={tgl}
                        onChange={(e) => setTgl(e.target.value)}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-2 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white font-sans text-gray-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700">
                        ⏰ Pukul
                      </label>
                      <input
                        type="text"
                        value={pukul}
                        onChange={(e) => setPukul(e.target.value)}
                        placeholder="08:00 WIB"
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-2 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white font-sans text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Row 3: Penjemputan & Tujuan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700">
                        📍 Penjemputan
                      </label>
                      <input
                        type="text"
                        value={penjemputan}
                        onChange={(e) => setPenjemputan(e.target.value)}
                        placeholder="Misal: Kebonharjo Jatirogo Tuban"
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white font-sans text-gray-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700">
                        ⛩️ Tujuan
                      </label>
                      <input
                        type="text"
                        value={tujuan}
                        onChange={(e) => setTujuan(e.target.value)}
                        placeholder="Misal: Surabaya / Malang"
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white font-sans text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Row 4: Jumlah Penumpang & Barang Bawaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700">
                        🌞 Jumlah Penumpang
                      </label>
                      <select
                        value={jmlPnp}
                        onChange={(e) => setJmlPnp(e.target.value)}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white font-sans text-gray-800 cursor-pointer"
                      >
                        <option value="1 Orang">1 Orang</option>
                        <option value="2 Orang">2 Orang</option>
                        <option value="3-4 Orang">3 - 4 Orang</option>
                        <option value="5-7 Orang (Satu Ertiga)">5 - 7 Orang (Mobil Suzuki Ertiga)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700">
                        🧳 Barang Bawaan
                      </label>
                      <input
                        type="text"
                        value={barangBawaan}
                        onChange={(e) => setBarangBawaan(e.target.value)}
                        placeholder="Misal: 1 Koper + 1 Ransel"
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#dc2626] focus:bg-white font-sans text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Red Disclaimer Note */}
                  <div className="bg-red-50/80 border border-red-100 p-2.5 rounded-xl text-[10.5px] font-bold text-[#dc2626]">
                    Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI
                  </div>

                  {/* Red Submit Button: Kirim Form WA */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-xs uppercase py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Kirim Booking Ticket via WhatsApp</span>
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
