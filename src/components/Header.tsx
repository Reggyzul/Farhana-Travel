import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Rute & Layanan', id: 'services' },
    { label: 'Armada & Tarif', id: 'cars' },
    { label: 'Keunggulan', id: 'advantages' },
    { label: 'Kontak', id: 'contact' },
  ];

  const handleWhatsAppOrder = () => {
    const waNumber = '6285203217673';
    const text = encodeURIComponent('Halo Farhana Travel, saya berminat memesan travel/sewa mobil Suzuki Ertiga.');
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Text Branding Only (Logo image removed) */}
          <div 
            onClick={() => handleItemClick('home')}
            className="flex flex-col cursor-pointer group"
            id="header-logo"
          >
            <span className="font-display font-black text-xl sm:text-2xl text-gray-900 leading-tight tracking-tight uppercase group-hover:text-[#dc2626] transition-colors">
              FARHANA <span className="text-[#dc2626]">TRAVEL</span>
            </span>
            <span className="font-sans text-[10px] text-gray-500 font-bold tracking-wide">
              Menemani Sepenuh Hati
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navItems.map((item) => {
              const isItemActive = activeSection === item.id;
                
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`font-sans text-sm font-semibold transition-colors cursor-pointer relative py-2 ${
                    isItemActive
                      ? 'text-[#dc2626]'
                      : 'text-gray-600 hover:text-[#dc2626]'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {isItemActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dc2626]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Red CTA Button: Pesan */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsAppOrder}
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>Pesan</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#dc2626] transition-colors cursor-pointer rounded-xl bg-gray-100"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isItemActive = activeSection === item.id;
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left px-4 py-3 font-sans text-sm font-bold rounded-xl transition-colors cursor-pointer ${
                      isItemActive
                        ? 'bg-red-50 text-[#dc2626] border-l-4 border-[#dc2626] pl-3'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#dc2626]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    handleWhatsAppOrder();
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-sm py-3 rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pesan Sekarang via WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
