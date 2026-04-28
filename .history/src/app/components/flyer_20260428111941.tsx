import React from 'react';
import { Home, Users, Sofa, Utensils, Wifi, Shield, Car, Phone, MapPin, Globe, Leaf, Printer, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { toast } from 'sonner';

const AMENITIES = [
  { icon: Home, text: "5-Bedroom Private Home" },
  { icon: Users, text: "Sleeps up to 9 Guests" },
  { icon: Sofa, text: "Spacious living & dining areas" },
  { icon: Utensils, text: "Fully equipped kitchen" },
  { icon: Wifi, text: "Fast Wi-Fi" },
  { icon: Leaf, text: "Quiet, secure suburban location" },
  { icon: Car, text: "Ample parking" },
];

export function Flyer() {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#f1efe9] flex flex-col items-center py-8 md:py-16 px-4 print:p-0 print:bg-white overflow-x-hidden">
      {/* Controls - Hidden during print */}
      <div className="mb-10 flex gap-4 print:hidden sticky top-4 z-50">
        <button 
          onClick={handlePrint}
          className="px-6 py-2.5 bg-stone-800 text-stone-100 rounded-full hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
        >
          <Printer size={18} />
          Print / Save PDF
        </button>
        <button 
          onClick={handleShare}
          className="px-6 py-2.5 bg-white text-stone-800 border border-stone-200 rounded-full hover:bg-stone-50 transition-all shadow-md hover:shadow-lg flex items-center gap-2 font-medium"
        >
          <Share2 size={18} />
          Share
        </button>
      </div>

      {/* Main Flyer Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[850px] bg-[#fdfaf5] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] p-8 md:p-20 relative overflow-hidden print:shadow-none print:w-[210mm] print:h-[297mm] print:m-0 print:p-12 border border-stone-100"
        style={{
          fontFamily: '"Lora", serif',
          backgroundImage: `url("https://www.transparenttextures.com/patterns/handmade-paper.png")`,
          backgroundBlendMode: 'multiply',
        }}
      >
        {/* Top Header */}
        <header className="text-center mb-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl text-[#3d3d2f] mb-3 leading-tight" 
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
            The Suburban Escape
          </motion.h1>
          <div className="w-48 h-[1.5px] bg-[#d1cfc7] mx-auto mb-4" />
          <p className="italic text-stone-500 tracking-[0.1em] text-lg font-light">
            A private getaway just outside the city
          </p>
        </header>

        {/* Hero Image Section */}
        <div className="relative mb-14">
          <div className="aspect-[16/10] overflow-hidden rounded-[4px] shadow-2xl relative z-10 p-2 bg-white">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1679939153966-6ec05249db1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW9kZXJuJTIwbGl2aW5nJTIwcm9vbSUyMGFpcmJuYiUyMHN1YnVyYmFuJTIwZ2V0YXdheXxlbnwxfHx8fDE3NzE2NTc4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="The Suburban Escape Interior"
              className="w-full h-full object-cover rounded-[2px]"
            />
          </div>
          {/* Decorative Brush Edge Overlay (Simulated) */}
          <div className="absolute -inset-4 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-20 rounded-lg" />
        </div>

        {/* Main Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-3 tracking-tight">
            Space. Comfort. Privacy.
          </h2>
          <p className="text-stone-500 italic text-lg">
            Perfect for families, friends & weekend retreats.
          </p>
        </div>

        {/* Divider with subtle line */}
        <div className="flex items-center gap-4 mb-12 opacity-40">
          <div className="flex-grow h-[1px] bg-stone-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
          <div className="flex-grow h-[1px] bg-stone-300" />
        </div>

        {/* Amenities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-14 px-4 md:px-8">
          {AMENITIES.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-center gap-5 text-stone-700"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#f3f1eb]">
                <item.icon size={22} className="text-[#3d3d2f]" strokeWidth={1.5} />
              </div>
              <span className="text-[18px] leading-relaxed font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14 opacity-40">
          <div className="flex-grow h-[1px] bg-stone-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
          <div className="flex-grow h-[1px] bg-stone-300" />
        </div>

        {/* Description Body */}
        <div className="text-center mb-16 px-6 md:px-12">
          <p className="text-stone-700 leading-[1.8] text-[20px] font-light italic">
            "Whether you're planning a family staycation, a friends' weekend, or a <span className="text-[#3d3d2f] font-normal not-italic underline decoration-[#d1cfc7] decoration-2 underline-offset-4">peaceful work retreat</span>, 
            The Suburban Escape offers the perfect balance of comfort, privacy, and convenience."
          </p>
        </div>

        {/* Booking Section */}
        <div className="text-center mb-12 bg-[#f9f7f2] p-8 rounded-xl border border-[#edeae1]">
          <h3 className="text-5xl text-[#3d3d2f] mb-6" style={{ fontFamily: '"Dancing Script", cursive' }}>
            Book your escape today!
          </h3>
          
          <div className="flex flex-col items-center space-y-5 max-w-sm mx-auto">
            <div className="flex items-center gap-4 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer group w-full">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 group-hover:bg-stone-300">
                <Phone size={16} />
              </div>
              <span className="text-lg font-medium">+254 712 345 678</span>
            </div>
            
            <div className="flex items-center gap-4 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer group w-full p-2 hover:bg-white rounded-lg border border-transparent hover:border-stone-200">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200">
                <Globe size={16} className="text-orange-600" />
              </div>
              <span className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">Airbnb: <span className="underline underline-offset-2">The Suburban Escape</span></span>
            </div>
            
            <div className="flex items-center gap-4 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer group w-full">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 group-hover:bg-stone-300">
                <MapPin size={16} />
              </div>
              <span className="text-lg font-medium">Location: Just outside Nairobi</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-[#edeae1]">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-400 font-bold">
            Peace • Comfort • Privacy
          </p>
        </footer>

        {/* Artistic Corner Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#3d3d2f]" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5 pointer-events-none">
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#3d3d2f]" />
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { background: white !important; }
          .print-hidden { display: none !important; }
          @page { margin: 0; size: auto; }
        }
      `}} />
    </div>
  );
}
