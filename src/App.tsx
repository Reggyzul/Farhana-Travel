import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CarList from './components/CarList';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Car } from './types';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ['home', 'services', 'cars', 'advantages', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFastWhatsApp = () => {
    const waNumber = '6285203217673';
    const text = encodeURIComponent(`FORM BOOKING TICKET
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

Note : PESAN TIKET KE DRIVER DILUAR TANGGUNG JAWAB KAMI`);
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <div 
      className="relative min-h-screen bg-white text-gray-800 selection:bg-[#dc2626] selection:text-white font-sans" 
      id="main-app-container"
    >
      
      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick}
      />

      {/* Main Single Landing Page Content */}
      <main className="relative z-10">
        {/* 1. Hero Section with Info Pemesanan Form */}
        <Hero onRentClick={() => handleNavClick('cars')} />

        {/* 2. Rute & Layanan Travel */}
        <Services />

        {/* 3. Armada & Tarif (Suzuki Ertiga mulai 200rb) */}
        <CarList onSelectCar={handleSelectCar} />

        {/* 4. Keunggulan Farhana Travel (Di bawah Armada Unggulan) */}
        <Advantages onBookClick={() => handleNavClick('cars')} />

        {/* 5. Testimoni Pelanggan */}
        <Testimonials lang="ID" />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Interactive Booking Modal */}
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} lang="ID" onCarChange={setSelectedCar} />

      {/* Green WhatsApp Floating Button (Bottom Right) */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        id="screen-action-sidebar"
      >
        {/* WhatsApp Fast Floater */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFastWhatsApp}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl cursor-pointer transition-all border-2 border-white group relative"
          title="Chat WhatsApp (085203217673)"
          id="floater-whatsapp"
        >
          <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </motion.button>

        {/* Back to Top Floater */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.08 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-gray-900 hover:bg-black text-white flex items-center justify-center shadow-xl cursor-pointer transition-colors border border-white/20 group relative"
              title="Kembali ke Atas"
              id="floater-scrolltop"
            >
              <ChevronUp className="w-6 h-6 shrink-0" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
