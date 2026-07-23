import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, Clock, ShieldCheck, Tag, Heart, MapPin, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const [showFullStory, setShowFullStory] = useState(false);
  const t = TRANSLATIONS[lang];

  const keyStrengths = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2563eb]" />,
      title: t.strength_clean_title,
      description: t.strength_clean_desc
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: t.strength_driver_title,
      description: t.strength_driver_desc
    },
    {
      icon: <Tag className="w-6 h-6 text-[#2563eb]" />,
      title: t.strength_price_title,
      description: t.strength_price_desc
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: t.strength_time_title,
      description: t.strength_time_desc
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Left: The Showcase Card */}
          <div className="lg:col-span-5 relative" id="about-image-card">
            <div className="relative p-6 bg-slate-900 rounded-[32px] shadow-2xl overflow-hidden text-white group">
              
              {/* Card Header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-display font-bold tracking-widest text-blue-400 uppercase">
                    PROFIL & VISI MISI
                  </p>
                  <h3 className="font-display font-extrabold text-lg text-white">FARHANA TRAVEL</h3>
                </div>
                <div className="bg-blue-600/30 border border-blue-400/30 text-blue-300 text-[10px] font-bold px-3 py-1 rounded-full">
                  Jatirogo - Tuban
                </div>
              </div>

              {/* Ertiga image showcase inside frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mb-6 bg-slate-800/80 border border-white/10 flex items-center justify-center p-2">
                <img
                  src="/ertiga.png"
                  alt="Suzuki Ertiga Farhana Travel Tuban"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#25D366] text-white font-display font-bold text-[10px] px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Sewa Mulai 150rb/Hari</span>
                </div>
              </div>

              {/* Visi Misi Quote Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-rose-400 font-display font-bold text-xs mb-1">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>VISI & MISI UTAMA</span>
                </div>
                <p className="font-display font-extrabold text-lg text-white italic leading-snug">
                  "Menemani Perjalanan Anda Sepenuh Hati"
                </p>
                <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                  Ds. Kebonharjo RT 01 RW 04, Kec. Jatirogo, Kab. Tuban
                </p>
              </div>

            </div>
          </div>

          {/* About Right: The Story */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center" id="about-content">
            
            <div className="space-y-2">
              <span className="font-display font-extrabold text-xs text-[#2563eb] tracking-widest uppercase">
                {t.about_tag}
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight uppercase">
                {t.about_title_1} <br />
                <span className="text-[#2563eb]">{t.about_title_2}</span>
              </h2>
            </div>

            <div className="space-y-4 font-sans text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                {t.about_desc_1}
              </p>
              <p>
                {t.about_desc_2}
              </p>
            </div>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-xs text-gray-900">Armada Suzuki Ertiga Utama</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Bersih, AC dingin, dan siap perjalanan jauh.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-xs text-gray-900">Tarif Transparan & Hemat</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Mulai Rp 150.000 / hari tanpa biaya terselubung.</p>
                </div>
              </div>
            </div>

            {/* Read More Accordion showing strengths details */}
            <AnimatePresence>
              {showFullStory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-4 border-t border-gray-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {keyStrengths.map((strength, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="mb-2">{strength.icon}</div>
                        <h4 className="font-display font-bold text-sm text-gray-900 mb-1">{strength.title}</h4>
                        <p className="font-sans text-xs text-gray-500 leading-relaxed">{strength.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons Row */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
                id="about-readmore-btn"
              >
                {showFullStory ? t.about_read_less : t.about_read_more}
              </button>
              
              <button
                onClick={() => {
                  const target = document.getElementById('contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 p-3 rounded-xl transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
                id="about-contact-icon-btn"
              >
                <MapPin className="w-4 h-4 text-[#2563eb]" />
                <span>Lihat Alamat Jatirogo</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
