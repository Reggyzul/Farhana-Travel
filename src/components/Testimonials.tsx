import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/cars';
import { Testimonial } from '../types';
import { Star, Quote, MessageSquarePlus, Check, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface TestimonialsProps {
  lang: 'ID' | 'EN';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showAddReview, setShowAddReview] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const t = TRANSLATIONS[lang];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Form states
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newCarModel, setNewCarModel] = useState('Suzuki Ertiga');
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (showAddReview) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length, showAddReview]);

  useEffect(() => {
    const local = localStorage.getItem('farhana_reviews');
    if (local) {
      try {
        setReviews(JSON.parse(local));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) {
      alert('Mohon tuliskan nama dan isi ulasan Anda!');
      return;
    }

    const newReview: Testimonial = {
      id: `local-testi-${Date.now()}`,
      name: newName,
      role: newRole || 'Pelanggan Setia',
      text: newText,
      rating: newRating,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      carModel: newCarModel,
      date: 'Hari Ini'
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('farhana_reviews', JSON.stringify(updatedReviews));

    setNewName('');
    setNewRole('');
    setNewText('');
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setShowAddReview(false);
    }, 2500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3" id="testimonials-heading">
          <span className="font-display font-extrabold text-xs text-[#2563eb] tracking-widest uppercase">
            {t.testi_tag}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {t.testi_title}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.testi_desc}
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center relative" id="testimonials-carousel-section">
            
            <AnimatePresence mode="wait">
              {reviews.length > 0 && (
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[32px] p-8 sm:p-10 border border-blue-100 shadow-lg relative"
                  id={`testimonial-bubble-${activeIdx}`}
                >
                  <div className="absolute top-6 right-6 text-blue-100">
                    <Quote className="w-14 h-14 transform -scale-x-100 fill-current opacity-60" />
                  </div>

                  <div className="space-y-5 relative z-10 text-left">
                    <div className="flex text-amber-400">
                      {[...Array(reviews[activeIdx].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    <p className="font-sans text-gray-700 italic text-base sm:text-lg leading-relaxed">
                      "{reviews[activeIdx].text}"
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <img
                        src={reviews[activeIdx].image}
                        alt={reviews[activeIdx].name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#2563eb]"
                      />
                      <div>
                        <h4 className="font-display font-extrabold text-base text-gray-900 tracking-wide">
                          {reviews[activeIdx].name}
                        </h4>
                        <p className="font-sans text-xs text-gray-500">
                          {reviews[activeIdx].role}
                        </p>
                        
                        <span className="inline-flex items-center gap-1 bg-blue-50 text-[#2563eb] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-blue-100 mt-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{reviews[activeIdx].carModel} ({reviews[activeIdx].date})</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between gap-4 mt-6" id="carousel-controls">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 bg-white hover:bg-[#2563eb] hover:text-white text-gray-700 font-display font-bold text-xs py-2.5 px-4 rounded-xl border border-gray-200 shadow-sm transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIdx === i ? 'w-8 bg-[#2563eb]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-1 bg-white hover:bg-[#2563eb] hover:text-white text-gray-700 font-display font-bold text-xs py-2.5 px-4 rounded-xl border border-gray-200 shadow-sm transition-all cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Write Review Form */}
          <div className="lg:col-span-5" id="testimonials-form-section">
            <div className="bg-slate-900 text-white rounded-[32px] p-7 border border-slate-800 shadow-xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!showAddReview ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 relative z-10 py-4 text-left"
                  >
                    <Quote className="w-9 h-9 text-[#2563eb]" />
                    <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                      Punya Pengalaman Bersama Farhana Travel?
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      Ulasan dan saran Anda sangat berharga bagi peningkatan pelayanan kami sepenuh hati.
                    </p>
                    <button
                      onClick={() => setShowAddReview(true)}
                      className="bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase py-3.5 px-6 rounded-xl shadow-md transition-colors flex items-center gap-2 justify-center w-full cursor-pointer"
                    >
                      <MessageSquarePlus className="w-4 h-4" />
                      <span>Tulis Ulasan Anda</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4 relative z-10"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-xs uppercase text-blue-400 tracking-wider">
                        Formulir Ulasan Pelanggan
                      </h3>
                      <button
                        onClick={() => setShowAddReview(false)}
                        className="text-slate-400 hover:text-white text-xs font-semibold cursor-pointer"
                      >
                        Batal
                      </button>
                    </div>

                    {successMsg ? (
                      <div className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-2 text-xs">
                        <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span>Terima kasih! Ulasan Anda telah tersimpan.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleAddReviewSubmit} className="space-y-3 text-left">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-slate-300 uppercase">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            required
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Contoh: Rian Prasetya"
                            className="block w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:ring-1 focus:ring-[#2563eb] text-xs font-sans"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-slate-300 uppercase">
                            Alamat / Asal
                          </label>
                          <input
                            type="text"
                            value={newRole}
                            onChange={(e) => setNewRole(e.target.value)}
                            placeholder="Contoh: Pelanggan dari Jatirogo Tuban"
                            className="block w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:ring-1 focus:ring-[#2563eb] text-xs font-sans"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-slate-300 uppercase">
                            Rating Kepuasan
                          </label>
                          <div className="flex gap-1 text-amber-400">
                            {[1, 2, 3, 4, 5].map((stars) => (
                              <button
                                key={stars}
                                type="button"
                                onClick={() => setNewRating(stars)}
                                className="p-1 cursor-pointer"
                              >
                                <Star 
                                  className={`w-5 h-5 ${
                                    stars <= newRating ? 'fill-current text-amber-400' : 'text-slate-600'
                                  }`} 
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-slate-300 uppercase">
                            Pesan Ulasan *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            placeholder="Tuliskan pengalaman Anda bersama Farhana Travel..."
                            className="block w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:ring-1 focus:ring-[#2563eb] text-xs font-sans"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase py-3 rounded-xl transition-colors cursor-pointer"
                        >
                          Kirim Ulasan
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
