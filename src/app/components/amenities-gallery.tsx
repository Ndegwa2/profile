import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import imgBedroom from "../assets/3d7dcd653130501c009bb13ac3ed271fea878180.png";
import imgBathroom from "../assets/e986ea14a9867696f2e0e379962d0f776d18fc72.png";
import imgStairway from "../assets/142ae600e573ea3abb135ae98f3ab60c2b347cfd.png";
import imgDining from "../assets/9ddb132af6aef1dbd6998d3fa4f863c157e2ba09.png";
import imgLivingRoom1 from "../assets/a67efee691bb260836841d7097ff4257d04b7e22.png";
import imgLivingRoom2 from "../assets/e9aa3f4aab3712baf1a2f24183571ed6f6482a51.png";
import imgGarden1 from "../assets/797de31d3f4c81be46470ce7abf8ff9ad3e179d3.png";
import imgGarden2 from "../assets/b1bfd76f7ced35723129ab124befd5604e53d826.png";

const imgExteriorNew = "https://images.unsplash.com/photo-1708526676835-81b744ec205e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvdXNlJTIwZXh0ZXJpb3IlMjBncmVlbiUyMGxhd258ZW58MXx8fHwxNzczODMxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080";

interface AmenityPhoto {
  image: string;
  title: string;
  description: string;
  category: string;
}

const AMENITY_PHOTOS: AmenityPhoto[] = [
  {
    image: imgExteriorNew,
    title: "Property Exterior",
    description: "Lush green lawns and a peaceful atmosphere surrounding the main house",
    category: "Exterior"
  },
  {
    image: imgBedroom,
    title: "Comfortable Bedrooms",
    description: "Spacious rooms with premium bedding, ample wardrobe space, and natural light",
    category: "Sleeping"
  },
  {
    image: imgBathroom,
    title: "Modern Bathrooms",
    description: "Clean, well-appointed bathrooms with hot water showers and elegant tilework",
    category: "Facilities"
  },
  {
    image: imgStairway,
    title: "Designer Interiors",
    description: "Thoughtfully designed spaces with modern lighting and elegant finishes",
    category: "Design"
  },
  {
    image: imgDining,
    title: "Dining Area",
    description: "Beautiful dining space perfect for shared meals and gatherings",
    category: "Living"
  },
  {
    image: imgLivingRoom1,
    title: "Living Room",
    description: "Warm and inviting living space with elegant chandelier lighting and cozy fireplace ambiance",
    category: "Living"
  },
  {
    image: imgLivingRoom2,
    title: "Main Living Area",
    description: "Spacious living room with designer ceiling lighting, large windows, and comfortable seating for gatherings",
    category: "Living"
  },
  {
    image: imgGarden1,
    title: "Garden View",
    description: "Lush landscaping with manicured hedges, vibrant flowers, and serene green spaces",
    category: "Outdoor"
  },
  {
    image: imgGarden2,
    title: "Outdoor Grounds",
    description: "Beautiful paved walkways surrounded by tropical plants, palm trees, and manicured lawns",
    category: "Outdoor"
  }
];

export function AmenitiesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const showPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + AMENITY_PHOTOS.length) % AMENITY_PHOTOS.length);
    }
  };
  
  const showNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % AMENITY_PHOTOS.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] py-16 px-4 md:px-8 print:p-6 print:bg-white print:min-h-0 print:h-[210mm] print:w-[297mm] print:overflow-hidden print:flex print:flex-col print:justify-center">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center print:mb-4 print:pt-0 print:break-inside-avoid print:max-w-none print:flex-shrink-0">
        <div className="w-16 h-1 bg-stone-800 mx-auto mb-6 print:mb-2 print:w-8 print:h-0.5" />
        <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] text-stone-800 mb-4 font-bold print:text-2xl print:mb-1">
          Photo Gallery
        </h1>
        <p className="text-stone-600 font-['Montserrat'] text-lg max-w-2xl mx-auto leading-relaxed print:text-xs print:max-w-none print:m-0 print:leading-tight">
          Explore the comfort and elegance of The Suburban Escape through our curated collection of amenity photos
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto print:max-w-none print:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 print:gap-2 print:grid-cols-4 print:w-full">
          {AMENITY_PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer print:break-inside-avoid print:mb-0 print-no-transform"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-stone-200 hover:shadow-2xl transition-all duration-300 print:shadow-none print:border print:border-stone-200 print:rounded-lg flex flex-col h-full">
                {/* Image */}
                <div className="aspect-[4/3] print:aspect-[3/2] overflow-hidden">
                  <img 
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 print:hidden" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 print:hidden">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <ImageIcon size={24} className="text-stone-800" />
                    </div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6 print:p-2 flex-grow flex flex-col justify-start">
                  <div className="flex items-center justify-between mb-3 print:mb-0.5">
                    <span className="text-xs print:text-[7px] font-['Montserrat'] uppercase tracking-[0.15em] text-stone-500 font-bold">
                      {photo.category}
                    </span>
                  </div>
                  <h3 className="text-2xl print:text-[11px] font-['Playfair_Display'] text-stone-800 mb-2 print:mb-0.5 font-bold leading-tight">
                    {photo.title}
                  </h3>
                  <p className="text-stone-600 font-['Montserrat'] text-sm print:text-[8px] leading-relaxed print:leading-snug">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center p-12 border-2 border-dashed border-stone-300 rounded-2xl bg-white/50 print:hidden"
        >
          <ImageIcon size={48} className="mx-auto text-stone-400 mb-4" />
          <h3 className="text-2xl font-['Playfair_Display'] text-stone-600 mb-2">More Photos Coming Soon</h3>
          <p className="text-stone-500 font-['Montserrat'] text-sm">
            We're adding more beautiful shots of our amenities and spaces
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors z-10"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrevious(); }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors z-10"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors z-10"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Image and Info */}
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={AMENITY_PHOTOS[selectedImage].image}
                    alt={AMENITY_PHOTOS[selectedImage].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-8 bg-[#fdfaf5]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-['Montserrat'] uppercase tracking-widest text-stone-500 font-bold">
                      {AMENITY_PHOTOS[selectedImage].category}
                    </span>
                    <span className="text-sm font-['Montserrat'] text-stone-400">
                      {selectedImage + 1} / {AMENITY_PHOTOS.length}
                    </span>
                  </div>
                  <h3 className="text-3xl font-['Playfair_Display'] text-stone-800 mb-3 font-bold">
                    {AMENITY_PHOTOS[selectedImage].title}
                  </h3>
                  <p className="text-stone-600 font-['Montserrat'] leading-relaxed">
                    {AMENITY_PHOTOS[selectedImage].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}