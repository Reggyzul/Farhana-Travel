import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar, Clock, MapPin, User, Phone, CheckCircle, Sparkles } from 'lucide-react';
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
  const [startDate, setStartDate] = useState('');
  const [pickupTime, setPickupTime] = useState('08:00');
  const [duration, setDuration] = useState(1);
  const [includeDriver, setIncludeDriver] = useState(true);
  const [pickupAddress, setPickupAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (car) {
      setName('');
      setPhone('');
      setStartDate('');
      setPickupTime('08:00');
      setDuration(1);
      setIncludeDriver(true);
      setPickupAddress('');
      setNotes('');
      setIsBooked(false);
    }
  }, [car]);

  if (!car) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !startDate || !pickupAddress) {
      alert('Mohon lengkapi semua kolom yang wajib diisi!');
      return;
    }

    const waNumber = '6285203217673';
    const textTemplate = `Halo Farhana Travel, saya ingin sewa armada berikut:

*RESERVASI SUZUKI ERTIGA:*
👉 Armada: *${car.name}*
💰 Tarif: Mulai Rp 300.000 / Hari

*JADWAL & DURASI:*
🗓 Tanggal Sewa: ${startDate}
⏰ Jam Jemput: ${pickupTime}
⏳ Durasi: ${duration} Hari

*DATA PELANGGAN:*
👤 Nama: ${name}
📞 No. WhatsApp: ${phone}
📍 Alamat Jemput / Tujuan: ${pickupAddress}
📝 Catatan Kebutuhan: ${notes || '-'}
👨‍✈️ Layanan Driver: ${includeDriver ? 'Dengan Driver' : 'Tanpa Driver / Sesuai Kesepakatan'}

Mohon konfirmasi ketersediaannya. Terima kasih!`;

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
                  className="w-full h-auto object-contain max-h-[160px]"
                />
              </div>

              {/* Specs */}
              <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                <p className="font-display font-bold uppercase text-blue-400 tracking-wider text-[10px] mb-2 text-left">
                  Fasilitas & Layanan:
                </p>
                <div className="space-y-1.5 text-xs text-left">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Kapasitas:</span>
                    <span className="font-bold text-white">7 Penumpang</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Kondisi:</span>
                    <span className="font-bold text-white">Bersih, Harum & AC Cold</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Pelayanan:</span>
                    <span className="font-bold text-blue-300">Sepenuh Hati</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 hidden md:block text-left">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                Lokasi Usaha:
              </p>
              <p className="text-xs font-semibold text-white">
                Ds. Kebonharjo RT 01 RW 04, Jatirogo, Tuban
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 text-left">
                  <h4 className="font-display font-black text-xl text-gray-900 uppercase">
                    Form Reservasi Fast Response
                  </h4>
                  <p className="font-sans text-xs text-gray-500">
                    Isi data di bawah ini untuk terhubung langsung via WhatsApp 085203217673.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide text-left">
                      {t.modal_field_name} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Rian Prasetya"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide text-left">
                      Nomor WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 085203217673"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide text-left">
                        Tanggal Sewa <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          required
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide text-left">
                        Jam Jemput
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <input
                          type="time"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] text-sm font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Duration Slider */}
                  <div className="space-y-1 text-left">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700 uppercase">
                      <span>Durasi Sewa: <strong>{duration} Hari</strong></span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="14"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400">
                      <span>1 Hari</span>
                      <span>7 Hari</span>
                      <span>14 Hari</span>
                    </div>
                  </div>

                  {/* Pickup Address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide text-left">
                      Alamat Jemput / Tujuan <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-3 pointer-events-none text-gray-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        rows={2}
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder="Contoh: Ds. Kebonharjo Jatirogo Tuban..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide text-left">
                      Catatan Kebutuhan (Opsional)
                    </label>
                    <textarea
                      rows={1}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Contoh: Acara keluarga, perjalanan luar kota..."
                      className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] text-sm font-sans text-left"
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="text-left">
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Tarif Sewa</span>
                    <span className="font-display font-extrabold text-sm text-[#2563eb]">Mulai Rp 300.000 / Hari</span>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-extrabold text-xs uppercase py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="submit-booking-to-whatsapp"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim ke WhatsApp 085203217673</span>
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                id="booking-success-message"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-display font-bold text-2xl text-gray-900 uppercase">
                  Pesan Terbuka di WhatsApp!
                </h4>
                <p className="font-sans text-gray-600 text-sm max-w-md leading-relaxed">
                  Silakan tekan tombol <strong>Kirim</strong> di aplikasi WhatsApp Anda untuk menyelesaikan pemesanan sewa Suzuki Ertiga di Farhana Travel.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#2563eb] hover:bg-blue-700 text-white font-display font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer mt-4"
                >
                  Kembali ke Website
                </button>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
