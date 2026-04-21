'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { TerminalText } from '../ui/TerminalText';
import { RetroCard } from '../ui/RetroCard';
import { MapPin, Navigation, Map as MapIcon } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

import { locations } from '../../data/mapData';

export const TheMap: React.FC = () => {
  useEffect(() => {
    // Fix for leaflet default icons in Next.js - Client side only
    const fixLeafletIcons = async () => {
      const L = (await import('leaflet')).default;
      const DefaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    };
    
    if (typeof window !== 'undefined') {
      fixLeafletIcons();
    }
  }, []);

  return (
    <section id="map" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <TerminalText 
          text="GEOGRAPHICAL_DISTRIBUTION"
          as="h2"
          className="text-3xl md:text-5xl font-vt323 text-phosphor glow-text"
        />
        <p className="text-phosphor/50 max-w-2xl mx-auto font-jetbrains text-xs md:text-sm">
          Tracking global operations and personal points of interest. 
          Real-time GPS coordinates of ventures and faith retreats.
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:h-[500px]">
        {/* Map Information Sidebar */}
        <div className="order-2 lg:order-1 lg:col-span-1 space-y-4 flex flex-col h-[300px] lg:h-full">
          <RetroCard title="LOCATION_LOG" className="flex-grow flex flex-col gap-4 overflow-y-auto">
            {locations.map((loc) => (
              <div key={loc.id} className="p-2 border-b border-phosphor/10 space-y-1 group">
                <div className="flex items-center justify-between">
                  <span className="text-phosphor font-vt323 text-lg tracking-widest">{loc.name}</span>
                  <MapPin size={14} className={loc.type === 'BUSINESS' ? "text-phosphor" : "text-amber"} />
                </div>
                <div className="text-[10px] font-jetbrains text-phosphor/40">
                  LAT: {loc.lat.toFixed(4)} | LNG: {loc.lng.toFixed(4)}
                </div>
                <p className="text-[12px] font-jetbrains text-phosphor/60 group-hover:text-phosphor transition-colors">
                  {loc.description}
                </p>
                <div className="flex gap-2 pt-2">
                   <span className={loc.type === 'BUSINESS' ? "text-[8px] px-1 border border-phosphor text-phosphor" : "text-[8px] px-1 border border-amber text-amber"}>
                      {loc.type}
                   </span>
                </div>
              </div>
            ))}
            
            <div className="mt-auto pt-4 border-t border-phosphor/20 flex flex-col gap-2">
               <div className="flex justify-between items-center text-[10px] font-vt323 text-phosphor/40">
                  <span>GPS_SIGNAL</span>
                  <span className="text-phosphor animate-pulse">LOCK_STABLE</span>
               </div>
               <div className="h-1 bg-phosphor/10 w-full overflow-hidden">
                  <motion.div 
                    animate={{ x: [-100, 400] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-20 h-full bg-phosphor/40"
                  />
               </div>
            </div>
          </RetroCard>
        </div>

        {/* The Map Component */}
        <div className="order-1 lg:order-2 lg:col-span-3 h-[400px] lg:h-full rounded-sm overflow-hidden border-2 border-phosphor/30 relative">
          <div className="absolute inset-0 z-0 grayscale invert contrast-[1.2] brightness-[0.7] hue-rotate-90">
             {/* Map styles (dark/retro) are applied via CSS filters and provider */}
             <MapContainer 
              center={[13.4967, 39.4717]} 
              zoom={13} 
              style={{ height: '100%', width: '100%', background: '#050505' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map(loc => (
                <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                  <Popup>
                    <div className="font-vt323 bg-retro-black text-phosphor p-2">
                       <h4 className="text-lg uppercase">{loc.name}</h4>
                       <p className="text-xs">{loc.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          {/* Map Overlay Elements */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
             <div className="bg-retro-black/80 border border-phosphor p-2 flex items-center gap-2">
                <Navigation size={16} className="text-phosphor animate-spin-slow" />
                <span className="text-[10px] font-vt323 text-phosphor">TRACKING_LIVE</span>
             </div>
          </div>
          
          {/* Compass / Radar decoration */}
          <div className="absolute bottom-4 left-4 z-10 opacity-20 pointer-events-none">
             <div className="w-24 h-24 border border-phosphor/50 rounded-full relative flex items-center justify-center">
                <div className="w-px h-full bg-phosphor/50 absolute" />
                <div className="h-px w-full bg-phosphor/50 absolute" />
                <div className="w-16 h-16 border border-phosphor/30 rounded-full" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-full h-px bg-phosphor absolute origin-center"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
