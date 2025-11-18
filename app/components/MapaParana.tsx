
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordenadas dos municípios (mock)
const municipios = [
  { id: 1, nome: 'Curitiba', lat: -25.4195, lng: -49.2646, pop: '1.963.726' },
  { id: 2, nome: 'Cascavel', lat: -24.9555, lng: -53.4552, pop: '348.051' },
  { id: 3, nome: 'Foz do Iguaçu', lat: -25.5478, lng: -54.5882, pop: '258.823' },
  { id: 4, nome: 'Londrina', lat: -23.3045, lng: -51.1696, pop: '575.377' },
  { id: 5, nome: 'Maringá', lat: -23.4253, lng: -51.9383, pop: '430.157' },
  { id: 6, nome: 'Ponta Grossa', lat: -25.0916, lng: -50.1668, pop: '358.838' },
  { id: 7, nome: 'Guarapuava', lat: -25.3933, lng: -51.4617, pop: '182.644' },
  { id: 8, nome: 'Paranaguá', lat: -25.5163, lng: -48.5090, pop: '156.174' },
];

// Fix para os ícones do Leaflet
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Componente para ajustar o zoom do mapa
function MapController() {
  const map = useMap();
  
  useEffect(() => {
    // Ajustar o mapa para mostrar todos os marcadores
    const bounds = L.latLngBounds(municipios.map(m => [m.lat, m.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);
  
  return null;
}

export default function MapaParana() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return (
      <div className="w-full h-[600px] bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🗺️</div>
          <p className="text-slate-400">Carregando mapa...</p>
        </div>
      </div>
    );
  }
  
  // Centro do Paraná (aproximado)
  const center: [number, number] = [-25.0, -51.5];
  
  return (
    <div className="w-full h-[600px] bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tissot_mercator.png/400px-Tissot_mercator.png"
        />
        <MapController />
        {municipios.map((municipio) => (
          <Marker 
            key={municipio.id} 
            position={[municipio.lat, municipio.lng]}
            icon={icon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-1">{municipio.nome}</h3>
                <p className="text-sm text-gray-600">População: {municipio.pop}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
