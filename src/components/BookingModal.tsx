import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle, Sparkles, MessageCircle, Luggage, Navigation } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface BookingModalProps {
  car: Car | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
  onCarChange?: (car: Car) => void;
}

export default function BookingModal({ car, onClose, lang, onCarChange }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [hari, setHari] = useState('Senin');
  const [startDate, setStartDate] = useState('');
  const [pickupTime, setPickupTime] = useState('08:00 WIB');
  const [passengers, setPassengers] = useState('1 Orang');
  const [pickupAddress, setPickupAddress] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [barangBawaan, setBarangBawaan] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (car) {
      setName('');
      setPhone('');
      setHari('Senin');
      setStartDate('');
      setPickupTime('08:00 WIB');
      setPassengers('1 Orang');
      setPickupAddress('');
      setTujuan('');
      setBarangBawaan('');
      setIsBooked(false);
    }
  }, [car]);

  if (!car) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !pickupAddress) {
      alert('Mohon lengkapi kolom Nama, No HP/WA, dan Alamat Penjemputan!');
      return;
    }

    const waNumber = '6285203217673';
    const textTemplate = `FORM BOOKING TICKET
FARHANA TRAVEL
🖊️ Nama   : ${name}
🗒️ Hari       : ${hari}
📆 Tgl         : ${startDate || 'Hari Ini'}
⏰ Pukul    : ${pickupTime}
🌞 Jml PNP : ${passengers}
📲 HP/WA : ${phone}
📍 Penjemputan : ${pickupAddress}
⛩️ Tujuan : ${tujuan || 'Surabaya / Malang / Tujuan'}

🧳 Barang Bawaan : ${barangBawaan || '-'}
💰 TARIF : Mulai Rp 300.000 / Hari

Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI`;

    const encodedText = encodeURIComponent(textTemplate);
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedText}`;
    
    window.open(waUrl, '_blank', 'noreferrer');
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          id="booking-backdrop"
        />

        {/* Modal panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="bg-white rounded-[32px] w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 z-10 max-h-[90vh] md:max-h-none"
          id="booking-modal-panel"
        >
          {/* Left Column */}
          <div className="md:col-span-5 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[35vh] md:max-h-[80vh] lg:max-h-none">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span className="font-display font-extrabold text-xs tracking-widest uppercase">FARHANA TRAVEL</span>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display font-black text-2xl uppercase text-left text-white">
                  {car.name}
                </h3>
                <p className="font-display font-extrabold text-base text-[#25D366] text-left">
                  Mulai Rp 300.000 / Hari
                </p>
              </div>

              {/* Car Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-800/80 p-2">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-auto object-contain max-h-[160px] mx-auto"
                />
              </div>

              {/* Spec list */}
              <div className="space-y-2 text-xs text-left border-t border-white/10 pt-3">
                <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Fasilitas Utama:</p>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-lg border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>7 Penumpang</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-lg border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>AC Double Blower</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-lg border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Mobil Steril</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-lg border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Driver Ramah</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/10 hidden md:block text-left">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                Alamat Kantor Usaha:
              </p>
              <p className="text-xs font-semibold text-white">
                Ds. Kebonharjo RT 01 RW 04, Kec. Jatirogo, Kab. Tuban
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto max-h-[55vh] md:max-h-[80vh] lg:max-h-[85vh] flex flex-col justify-between bg-white relative">
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer z-20"
              id="close-booking-modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2.5 py-1 rounded-md">
                    FORM BOOKING TICKET
                  </span>
                  <h4 className="font-display font-black text-xl text-gray-900 uppercase mt-1">
                    FARHANA TRAVEL
                  </h4>
                  <p className="font-sans text-xs text-gray-500">
                    Isi formulir di bawah ini untuk terhubung langsung via WhatsApp.
                  </p>
                </div>

                <div className="space-y-3">
                  
                  {/* Row 1: Nama & HP/WA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        🖊️ Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan Nama Anda"
                        className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        📲 HP / WA *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 085203217673"
                        className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Row 2: Hari, Tgl & Pukul */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        🗒️ Hari
                      </label>
                      <select
                        value={hari}
                        onChange={(e) => setHari(e.target.value)}
                        className="block w-full px-2 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50 cursor-pointer"
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
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        📆 Tanggal
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="block w-full px-2 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        ⏰ Pukul
                      </label>
                      <input
                        type="text"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        placeholder="08:00 WIB"
                        className="block w-full px-2 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Row 3: Penjemputan & Tujuan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        📍 Penjemputan *
                      </label>
                      <input
                        type="text"
                        required
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder="Misal: Ds. Kebonharjo Jatirogo"
                        className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        ⛩️ Tujuan
                      </label>
                      <input
                        type="text"
                        value={tujuan}
                        onChange={(e) => setTujuan(e.target.value)}
                        placeholder="Misal: Surabaya / Malang"
                        className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Row 4: Jumlah PNP & Barang Bawaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        🌞 Jumlah Penumpang
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50 cursor-pointer"
                      >
                        <option value="1 Orang">1 Orang</option>
                        <option value="2 Orang">2 Orang</option>
                        <option value="3-4 Orang">3 - 4 Orang</option>
                        <option value="5-7 Orang (Ertiga)">5 - 7 Orang (Mobil Suzuki Ertiga)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 text-left">
                        🧳 Barang Bawaan
                      </label>
                      <input
                        type="text"
                        value={barangBawaan}
                        onChange={(e) => setBarangBawaan(e.target.value)}
                        placeholder="Misal: 1 Koper, 2 Tas"
                        className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc2626] text-xs font-sans bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Red Note Warning */}
                  <div className="bg-red-50/80 border border-red-100 p-2.5 rounded-xl text-[10.5px] font-bold text-[#dc2626] text-left">
                    Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-xs uppercase py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-current" />
                    <span>Kirim Booking Ticket via WhatsApp</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 space-y-4 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-display font-black text-2xl text-gray-900 uppercase">
                  Pemesanan Berhasil Dikirim!
                </h4>
                <p className="font-sans text-xs text-gray-600 max-w-sm mx-auto">
                  Silakan lanjutkan obrolan di aplikasi WhatsApp dengan Customer Service Farhana Travel.
                </p>
                <button
                  onClick={onClose}
                  className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
