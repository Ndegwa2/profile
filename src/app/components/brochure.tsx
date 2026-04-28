import React from 'react';
import { 
  Home, Users, Sofa, Utensils, Wifi, Shield, Car, Phone, MapPin, 
  Globe, Check, Printer, Share2, MessageSquare, ExternalLink, QrCode
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { toast } from 'sonner';

const imgExterior = "https://images.unsplash.com/photo-1708526676835-81b744ec205e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvdXNlJTIwZXh0ZXJpb3IlMjBncmVlbiUyMGxhd258ZW58MXx8fHwxNzczODMxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
import imgLivingWide from "figma:asset/f0958eef109f7eec7c8f8dab5ebb8c3794d3b50c.png";
import imgLivingClose from "figma:asset/ad869ff85508a57ecf0150372ff1b66ef19653c2.png";

const AMENITIES = [
  { icon: Home, text: "5-Bedroom Home + Standalone Studios" },
  { icon: Users, text: "Collectively sleeps up to 20 guests" },
  { icon: Sofa, text: "Spacious living & dining areas" },
  { icon: Utensils, text: "Fully equipped kitchen access" },
  { icon: Wifi, text: "Fast Wi-Fi" },
  { icon: Shield, text: "Quiet, secure suburban location" },
  { icon: Car, text: "Ample parking for large groups" },
];

const IDEAL_FOR = [
  "Corporate getaways & team building",
  "Official getaway meetings",
  "Family staycations",
  "Friends’ weekend getaways",
  "Small retreats",
  "Work-from-home escapes"
];

const PanelWrapper = ({ children, className = "" }) => (
  <div className={`w-full h-full p-8 md:p-10 print:p-6 flex flex-col bg-[#fdfaf5] border-x border-stone-100/50 print:border-none relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] mix-blend-multiply" />
    <div className="relative z-10 flex flex-col h-full items-stretch">{children}</div>
  </div>
);

export function Brochure() {
  const handleShare = async () => {
    const url = window.location.href;
    
    try {
      // Try the Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      } else {
        // Fallback method for older browsers or restricted environments
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          toast.success("Link copied to clipboard!");
        } catch (err) {
          toast.error("Unable to copy. Please copy manually: " + url);
        }
        
        document.body.removeChild(textArea);
      }
    } catch (err) {
      // If all else fails, show the URL
      toast.info("Share this link: " + url, { duration: 5000 });
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center py-8 md:py-16 px-4 print:p-0 print:bg-white overflow-x-hidden">
      {/* Controls */}
      <div className="mb-10 flex flex-wrap justify-center gap-4 print:hidden sticky top-4 z-50">
        <button 
          onClick={handleShare}
          className="px-6 py-2.5 bg-white text-stone-800 border border-stone-200 rounded-full hover:bg-stone-50 transition-all shadow-md flex items-center gap-2 font-medium font-['Montserrat']"
        >
          <Share2 size={18} />
          Share Digital Version
        </button>
      </div>

      <div className="w-full max-w-[1200px] print:max-w-none print:w-[297mm] flex flex-col gap-16 print:gap-0">
        
        {/* PAGE 1: OUTSIDE PANELS (Inside Left | Back | Front) */}
        <div className="flex flex-col mb-4 print:mb-0 print:break-after-page print:h-[210mm] print:overflow-hidden print:p-0 print:m-0">
          <h3 className="text-stone-400 uppercase tracking-widest text-xs mb-4 font-['Montserrat'] font-bold text-center print:hidden">Side A: Outside (Foldable)</h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 print:grid-cols-3 md:grid-cols-3 aspect-none md:aspect-[3/1.414] shadow-2xl print:shadow-none bg-white border border-stone-200 print:border-none print:w-[297mm] print:h-[210mm] overflow-hidden print-no-transform"
          >
            {/* PANEL 5: INSIDE LEFT FLAP (Ideal For) */}
            <PanelWrapper className="order-2 print:order-1 md:order-1 border-r border-stone-200/40">
              <div className="flex flex-col h-full">
                <h2 className="text-3xl print:text-2xl font-['Playfair_Display'] text-stone-800 mb-8 print:mb-4 border-b border-stone-200 pb-2">Perfect For</h2>
                <div className="space-y-6 print:space-y-4 flex-grow">
                  {IDEAL_FOR.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 print:gap-2">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 print:w-5 print:h-5 rounded-full bg-stone-800 flex items-center justify-center">
                        <Check size={14} className="text-white print:w-3 print:h-3" />
                      </div>
                      <span className="text-stone-700 font-['Montserrat'] font-medium text-[16px] print:text-[14px] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-8 print:pt-4 border-t border-stone-200 text-center">
                  <p className="font-['Playfair_Display'] italic text-stone-600 text-lg print:text-base">Space to breathe.<br/>Comfort to stay longer.</p>
                </div>
              </div>
            </PanelWrapper>

            {/* PANEL 6: BACK PANEL (Contact) */}
            <PanelWrapper className="order-3 print:order-2 md:order-2 bg-[#f9f7f2] border-x border-stone-200/40 text-center">
              <div className="flex flex-col h-full items-center">
                <h2 className="text-3xl print:text-2xl font-['Playfair_Display'] text-stone-800 mb-8 print:mb-4">Book Your Escape</h2>
                <div className="flex-grow flex flex-col items-center justify-center space-y-6 print:space-y-4 w-full max-w-[260px]">
                  <div className="space-y-4 print:space-y-2 w-full">
                    <div className="flex items-center gap-4 print:gap-2 text-stone-700 justify-center p-3 print:p-2 bg-white rounded-lg border border-stone-100 shadow-sm">
                      <Phone size={18} className="text-stone-800 print:w-4 print:h-4" />
                      <span className="font-['Montserrat'] font-bold text-lg print:text-base tracking-tight">0721245646</span>
                    </div>
                    <div className="flex items-center gap-4 print:gap-2 text-stone-700 justify-center p-3 print:p-2 bg-white rounded-lg border border-stone-100 shadow-sm">
                      <Globe size={18} className="text-stone-800 print:w-4 print:h-4" />
                      <span className="font-['Montserrat'] text-sm print:text-xs">Available on Airbnb</span>
                    </div>
                    <div className="flex items-center gap-4 print:gap-2 text-stone-700 justify-center p-3 print:p-2 bg-white rounded-lg border border-stone-100 shadow-sm">
                      <MapPin size={18} className="text-stone-800 print:w-4 print:h-4" />
                      <span className="font-['Montserrat'] text-sm print:text-xs">Rongai Rimpa</span>
                    </div>
                  </div>
                  
                  {/* Enhanced QR Code */}
                  <div className="relative mt-4 print:mt-2 group">
                    <div className="absolute -inset-2 bg-gradient-to-br from-stone-400/20 to-stone-600/20 rounded-2xl blur-sm group-hover:blur-md transition-all" />
                    <div className="relative p-6 print:p-4 bg-white border-2 border-stone-800 rounded-2xl shadow-xl">
                      <div className="bg-white p-3 print:p-2 rounded-lg flex justify-center">
                        <QRCodeSVG 
                          value="https://www.airbnb.com/rooms/1536694774949759520" 
                          size={140}
                          className="print:w-[100px] print:h-[100px]"
                          level="M"
                          includeMargin={true}
                          fgColor="#000000"
                          bgColor="#ffffff"
                        />
                      </div>
                      <div className="mt-3 print:mt-2 text-center">
                        <div className="flex items-center justify-center gap-2 print:gap-1 mb-1">
                          <QrCode size={14} className="text-stone-800 print:w-3 print:h-3" />
                          <p className="text-xs print:text-[10px] font-['Montserrat'] font-bold text-stone-800 uppercase tracking-widest">Scan to Book</p>
                        </div>
                        <p className="text-[10px] print:text-[8px] font-['Montserrat'] text-stone-500 italic mb-2">Instant Airbnb Access</p>
                        <div className="hidden print:block border-t border-stone-200/50 pt-2 mt-2">
                          <p className="text-[8px] font-['Montserrat'] text-stone-400 break-all w-full text-center">
                            Or visit: https://8fc3599b.figma-make.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PanelWrapper>

            {/* PANEL 1: FRONT COVER */}
            <PanelWrapper className="order-1 print:order-3 md:order-3 bg-stone-900 text-white !p-0">
              <div className="absolute inset-0 pointer-events-none">
                <ImageWithFallback 
                  src={imgExterior}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
              </div>
              <div className="flex flex-col h-full text-center py-8 px-6 relative z-10">
                <div className="mb-6 print:mb-4">
                  <div className="w-12 h-1 bg-white/60 mx-auto mb-6 print:mb-3" />
                  <h1 className="text-4xl md:text-5xl print:text-3xl font-['Playfair_Display'] mb-3 print:mb-2 font-bold leading-tight drop-shadow-lg">The Suburban Escape</h1>
                  <p className="text-base print:text-sm font-['Montserrat'] italic text-stone-100 font-medium tracking-widest drop-shadow-md">Your home away from home</p>
                </div>
                
                <div className="flex-grow flex items-center justify-center p-2">
                  <div className="border border-white/40 p-2 rounded-lg w-full max-w-[280px] print:max-w-[200px] bg-white/10 backdrop-blur-sm mx-auto shadow-2xl">
                    <ImageWithFallback 
                      src={imgLivingWide}
                      className="aspect-square object-cover rounded shadow-lg"
                    />
                  </div>
                </div>

                <div className="mt-8 print:mt-4 space-y-4 print:space-y-2 drop-shadow-md">
                  <p className="text-[11px] print:text-[9px] font-['Montserrat'] tracking-[0.3em] text-stone-100 font-bold uppercase leading-relaxed">Peace • Comfort • Privacy</p>
                  <p className="text-[11px] print:text-[8px] font-['Montserrat'] tracking-[0.2em] text-stone-300 uppercase leading-relaxed">Slow mornings. Shared meals. Quiet evenings.</p>
                  <div className="flex items-center justify-center gap-2 text-white pt-4 print:pt-2">
                    <MapPin size={14} className="opacity-90 print:w-3 print:h-3" />
                    <span className="font-['Montserrat'] text-xs print:text-[10px] tracking-widest font-semibold uppercase">Rongai Rimpa</span>
                  </div>
                </div>
              </div>
            </PanelWrapper>
          </motion.div>
        </div>

        {/* PAGE 2: INSIDE PANELS (Inside Flap | Center Inside | Inside Right) */}
        <div className="flex flex-col print:h-[210mm] print:overflow-hidden print:p-0 print:m-0">
          <h3 className="text-stone-400 uppercase tracking-widest text-xs mb-4 font-['Montserrat'] font-bold text-center print:hidden">Side B: Inside (Main Content)</h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 print:grid-cols-3 md:grid-cols-3 aspect-none md:aspect-[3/1.414] shadow-2xl print:shadow-none bg-white border border-stone-200 print:border-none print:w-[297mm] print:h-[210mm] overflow-hidden print-no-transform"
          >
            {/* PANEL 2: INSIDE LEFT (Intro) */}
            <PanelWrapper className="border-r border-stone-200/40">
              <div className="flex flex-col h-full">
                <h2 className="text-3xl print:text-2xl font-['Playfair_Display'] text-stone-800 mb-6 print:mb-4 border-b border-stone-200 pb-2">Step Into Comfort</h2>
                <div className="flex-grow space-y-4 print:space-y-3">
                  <p className="text-stone-600 font-['Montserrat'] leading-relaxed text-[15px] print:text-[13px]">
                    Whether you're escaping city noise or creating memories with loved ones, The Suburban Escape offers a warm, peaceful space designed for rest, connection, and privacy.
                  </p>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl border-4 border-white">
                     <ImageWithFallback 
                      src={imgLivingClose}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-['Playfair_Display'] italic text-stone-800 text-base print:text-sm leading-relaxed">
                      "This is more than a stay — <br/>it's a place to feel at home."
                    </p>
                  </div>
                </div>
              </div>
            </PanelWrapper>

            {/* PANEL 3: CENTER INSIDE (Main Story) */}
            <PanelWrapper className="border-x border-stone-200/40 bg-[#faf9f6]">
              <div className="flex flex-col h-full text-center">
                <h2 className="text-3xl print:text-2xl font-['Playfair_Display'] text-stone-800 mb-6 print:mb-4">Welcome Home</h2>
                <div className="flex-grow flex flex-col items-center justify-center space-y-6 print:space-y-4">
                  <p className="text-stone-600 font-['Montserrat'] leading-relaxed text-[16px] print:text-[13px]">
                    The Suburban Escape is a versatile property featuring a <span className="font-bold text-stone-800">5-bedroom main home plus standalone studios</span>. We can collectively accommodate <span className="font-bold text-stone-800">up to 20 guests</span>.
                  </p>
                  <div className="w-16 h-[1px] bg-stone-300 mx-auto" />
                  <p className="text-stone-600 font-['Montserrat'] leading-relaxed text-[16px] print:text-[13px]">
                    Ideal for large family reunions, corporate retreats, and official meetings, our setup offers the perfect blend of communal spaces and private sanctuary.
                  </p>
                  <div className="pt-4 print:pt-2">
                     <p className="font-['Playfair_Display'] font-bold text-stone-800 text-lg print:text-base tracking-tight flex flex-wrap justify-center gap-2">
                       <span>Gather together.</span> <span className="text-stone-300">•</span> <span>Sleep soundly.</span> <span className="text-stone-300">•</span> <span>Space for everyone.</span>
                     </p>
                  </div>
                </div>
              </div>
            </PanelWrapper>

            {/* PANEL 4: INSIDE RIGHT (Features) */}
            <PanelWrapper className="border-l border-stone-200/40">
              <div className="flex flex-col h-full">
                <h2 className="text-3xl print:text-2xl font-['Playfair_Display'] text-stone-800 mb-6 print:mb-4 border-b border-stone-200 pb-2">What You'll Love</h2>
                <div className="space-y-4 print:space-y-3 flex-grow">
                  {AMENITIES.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 print:gap-3 group">
                      <div className="flex-shrink-0 w-9 h-9 print:w-7 print:h-7 border border-stone-200 rounded-lg flex items-center justify-center group-hover:bg-stone-50 transition-colors">
                        <item.icon size={18} className="text-stone-700 print:w-4 print:h-4" strokeWidth={1.5} />
                      </div>
                      <span className="text-stone-700 font-['Montserrat'] text-[14px] print:text-[12px] font-medium leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4 print:pt-2 text-center opacity-30">
                  <div className="flex justify-center gap-4 print:gap-2">
                     <div className="w-2 h-2 print:w-1.5 print:h-1.5 rounded-full bg-stone-400" />
                     <div className="w-2 h-2 print:w-1.5 print:h-1.5 rounded-full bg-stone-400" />
                     <div className="w-2 h-2 print:w-1.5 print:h-1.5 rounded-full bg-stone-400" />
                  </div>
                </div>
              </div>
            </PanelWrapper>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          * { 
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          body { 
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          @page { 
            margin: 0mm;
            size: A4 landscape;
          }
          /* Prevent motion div transforms from breaking print layout */
          .print-no-transform {
            transform: none !important;
          }
        }
      `}} />
    </div>
  );
}