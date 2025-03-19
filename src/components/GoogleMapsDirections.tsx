
import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

const GoogleMapsDirections = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState<string>('');
  const mapIframeRef = useRef<HTMLIFrameElement>(null);
  
  // Event destination (fixed)
  const destination = "Caminho de Emaus, Rua RI 38, Residencial Itaipu, Goiânia, GO";
  const encodedDestination = encodeURIComponent(destination);
  
  // Google Maps API Key
  const GOOGLE_MAPS_API_KEY = "AIzaSyAcAoIMIBx2tSKS-y_oRdQtgPTkjE3Ocgs";
  
  const updateDirections = () => {
    if (!origin) return;
    
    const encodedOrigin = encodeURIComponent(origin);
    const directionsUrl = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=${encodedOrigin}&destination=${encodedDestination}&mode=driving`;
    
    if (mapIframeRef.current) {
      mapIframeRef.current.src = directionsUrl;
    }
  };

  // Initial map setup
  useEffect(() => {
    // Default map URL (location view)
    const defaultMapUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodedDestination}&zoom=14`;
    
    if (mapIframeRef.current) {
      mapIframeRef.current.src = defaultMapUrl;
    }
  }, [encodedDestination]);

  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="h-5 w-5 text-sage" />
          <h3 className="font-medium text-sage-dark">Onde você está?</h3>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Digite seu endereço de origem"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="flex-1 border-sage-light"
          />
          <Button 
            onClick={updateDirections}
            className="bg-sage hover:bg-sage-dark"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Ver rota
          </Button>
        </div>
      </div>
      
      <div ref={mapRef} className="relative w-full h-[350px] rounded-lg overflow-hidden border border-sage-light">
        <iframe
          ref={mapIframeRef}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodedDestination}`}
        ></iframe>
        
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 text-xs text-sage-darkest">
          <p className="font-medium">Chácara Caminho de Emaús</p>
          <p>Rua RI 38, s/n, Residencial Itaipu - Goiânia/GO</p>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage-dark hover:underline text-sm"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
};

export default GoogleMapsDirections;
