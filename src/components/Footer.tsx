import React from 'react';
import { Headset, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-14 pb-8 border-t border-gray-800 relative overflow-hidden">
      
      {/* Top Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#dc2626]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper pre-footer banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-gray-800 items-center">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2 text-red-400 font-sans font-bold text-xs uppercase tracking-wider">
              <Heart className="w-4 h-4 fill-current text-red-500" />
              <span>Menemani Perjalanan Anda Sepenuh Hati</span>
            </div>
            <h3 className="font-display font-black text-2xl text-white tracking-tight uppercase">
              FARHANA <span className="text-[#dc2626]">TRAVEL</span>
            </h3>
            <p className="font-sans text-xs text-gray-400">
              Sewa Mobil Suzuki Ertiga Terpercaya di Jatirogo, Tuban – Mulai Rp 300.000 / Hari
            </p>
          </div>

          {/* Social Media Badges */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-2.5">
            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@farhanatravel" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-sans font-semibold text-xs px-3.5 py-2 rounded-full transition-all"
            >
              <span className="text-pink-400">TikTok:</span>
              <strong className="text-white">Farhana travel</strong>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/farhanatravel" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-sans font-semibold text-xs px-3.5 py-2 rounded-full transition-all"
            >
              <span className="text-blue-400">FB:</span>
              <strong className="text-white">Farhana travel</strong>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/farhanatravel" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-sans font-semibold text-xs px-3.5 py-2 rounded-full transition-all"
            >
              <span className="text-amber-400">IG:</span>
              <strong className="text-white">Farhana travel</strong>
            </a>
          </div>
        </div>

        {/* Core Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 pb-8">
          
          {/* Column 1: Office Address & Branding */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex flex-col">
              <span className="font-display font-black text-xl text-white tracking-tight uppercase">
                FARHANA <span className="text-[#dc2626]">TRAVEL</span>
              </span>
            </div>

            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
              Farhana Travel siap melayani kebutuhan transportasi Anda di Jatirogo, Tuban, Bojonegoro, Lamongan, Surabaya, Malang, dan sekitarnya. Mobil Suzuki Ertiga bersih, AC dingin, dan harga hemat mulai Rp 300.000 / Hari.
            </p>

            <div className="text-xs text-gray-300 font-sans space-y-2 pt-2 border-t border-gray-800">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                <span className="font-semibold text-white">Ds. Kebonharjo RT 01 RW 04, Kec. Jatirogo, Kab. Tuban</span>
              </div>
              <p className="text-gray-500 text-[11px]">©2026 Farhana Travel. Semua Hak Dilindungi.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-display font-bold text-xs tracking-wider text-[#dc2626] uppercase border-l-2 border-[#dc2626] pl-2">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gray-400">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-white transition-colors cursor-pointer text-left w-full">
                  • Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-white transition-colors cursor-pointer text-left w-full">
                  • Rute & Layanan
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('cars')} className="hover:text-white transition-colors cursor-pointer text-left w-full">
                  • Armada Suzuki Ertiga (300rb)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('advantages')} className="hover:text-white transition-colors cursor-pointer text-left w-full">
                  • Keunggulan Layanan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Map */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display font-bold text-xs tracking-wider text-[#dc2626] uppercase border-l-2 border-[#dc2626] pl-2">
              Kontak Pemesanan WhatsApp
            </h4>
            
            <div className="space-y-3 text-xs font-sans">
              <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-2xl border border-gray-700">
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow">
                  <Headset className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">WhatsApp Fast Response</p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=6285203217673"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-display font-extrabold text-white hover:text-[#25D366] block"
                  >
                    085203217673
                  </a>
                </div>
              </div>
            </div>

            {/* Map Google Embed */}
            <div className="pt-1">
              <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-md w-full h-32 bg-gray-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.455246738706!2d111.642557!3d-6.883391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e774fbf48a9754f%3A0x4027a76e352f750!2sJatirogo%2C%20Tuban%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Farhana Travel Jatirogo Tuban Location Map"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="border-t border-gray-800 pt-6 text-center text-[10px] text-gray-500 font-sans leading-relaxed">
          Website Resmi Farhana Travel – Ds. Kebonharjo RT 01 RW 04, Kec. Jatirogo, Kab. Tuban.
        </div>

      </div>
    </footer>
  );
}
