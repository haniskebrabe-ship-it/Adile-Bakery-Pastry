import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, Instagram, MapPin } from 'lucide-react';

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D2B1F] font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-[#E5DCD5]">
        <h1 className="text-2xl font-serif font-bold tracking-tighter">Adile</h1>
        
        {/* Contact info in the header for desktop */}
        <div className="hidden md:flex items-center gap-6 font-medium text-sm">
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0915835745</span>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0923678241</span>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-[#C46D45] font-semibold tracking-widest uppercase text-sm">Adile Bakery & Pastry</span>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">Crafting Memories, One Bite at a Time.</h2>
          <p className="text-lg text-[#5D4B3F] max-w-lg">Experience the finest cakes, breads, and pastries in Addis Ababa. Handmade daily with love and the purest ingredients.</p>
          <div className="flex gap-4 pt-4">
            <button className="bg-[#3D2B1F] text-white px-8 py-4 rounded-full font-medium hover:bg-[#C46D45] transition-all">Order Custom Cake</button>
            <button className="border border-[#3D2B1F] px-8 py-4 rounded-full font-medium hover:bg-[#E5DCD5] transition-all flex items-center gap-2">
              Explore Menu <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full h-[400px] md:h-[600px] bg-[#E5DCD5] rounded-3xl overflow-hidden relative shadow-2xl rotate-2">
          {/* Placeholder for high-end photography */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000')] bg-cover bg-center" />
        </div>
      </header>

      {/* Featured Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-4xl font-serif">Daily Favorites</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Signature Croissant', img: 'https://i.pinimg.com/736x/36/36/be/3636be880017592d2fe6edd332d7d40e.jpg', desc: 'Butter-rich, flaky perfection.' },
            { name: 'Artisan Sourdough', img: 'https://i.pinimg.com/1200x/52/70/08/5270083d9ade37cd63a923a302160775.jpg', desc: 'Warm, crusty, artisan loaves.' },
            { name: 'Sweet Delights', img: 'https://i.pinimg.com/1200x/17/96/6e/17966e168c38a501a575b2aa7badbf2c.jpg', desc: 'Exquisite flavors in every bite.' }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-80 bg-[#E5DCD5] rounded-2xl mb-4 overflow-hidden relative">
                 <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold">{item.name}</h4>
              <p className="text-[#5D4B3F]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <a href="https://wa.me/251915835745" className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl shadow-xl font-bold">
          <Phone className="w-5 h-5" /> Order via WhatsApp
        </a>
      </div>

      <footer className="py-12 px-6 bg-[#3D2B1F] text-[#E5DCD5] mt-20 text-center">
        <p className="font-serif text-2xl mb-6">Adile Bakery & Pastry</p>
        <p className="mb-6 opacity-80">0915835745 | 0923678241</p>
        <div className="flex justify-center gap-6">
          <Instagram />
          <MapPin />
        </div>
        <p className="mt-8 text-sm opacity-60">© 2026 Adile Bakery. Addis Ababa, Ethiopia.</p>
      </footer>
    </div>
  );
}