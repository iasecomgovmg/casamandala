import { Card } from "@/components/ui/card";

const AccommodationMap = () => {
  return (
    <Card className="p-6 bg-white rounded-xl shadow-sm">
      <div className="w-full h-full flex flex-col">
        <svg 
          viewBox="0 0 800 500" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background */}
          <rect x="0" y="0" width="800" height="500" fill="#f9faf8" rx="10" ry="10" />
          
          {/* Main Building */}
          <rect x="100" y="100" width="600" height="300" fill="#fff" stroke="#7d9178" strokeWidth="2" rx="5" ry="5" />
          
          {/* Corridor */}
          <rect x="250" y="100" width="300" height="300" fill="#f5f2ee" stroke="#7d9178" strokeWidth="2" />
          
          {/* Rooms - Left side */}
          <rect x="100" y="100" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="137" y="145" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">1A</text>
          <text x="137" y="165" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="175" y="100" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="212" y="145" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">1B</text>
          <text x="212" y="165" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="100" y="175" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="137" y="220" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">2A</text>
          <text x="137" y="240" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="175" y="175" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="212" y="220" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">2B</text>
          <text x="212" y="240" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="100" y="250" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="137" y="295" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">3A</text>
          <text x="137" y="315" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="175" y="250" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="212" y="295" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">3B</text>
          <text x="212" y="315" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="100" y="325" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="137" y="370" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">4A</text>
          <text x="137" y="390" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="175" y="325" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="212" y="370" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">4B</text>
          <text x="212" y="390" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          {/* Rooms - Right side */}
          <rect x="550" y="100" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="587" y="145" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">17A</text>
          <text x="587" y="165" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="625" y="100" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="662" y="145" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">17B</text>
          <text x="662" y="165" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="550" y="175" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="587" y="220" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">18A</text>
          <text x="587" y="240" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          <rect x="625" y="175" width="75" height="75" fill="#b4c4b0" stroke="#7d9178" strokeWidth="2" />
          <text x="662" y="220" fontSize="14" textAnchor="middle" fill="#3a4338" fontWeight="bold">18B</text>
          <text x="662" y="240" fontSize="12" textAnchor="middle" fill="#3a4338">1c</text>
          
          {/* Bathrooms */}
          <rect x="250" y="100" width="50" height="50" fill="#e8e1d9" stroke="#7d9178" strokeWidth="2" />
          <text x="275" y="130" fontSize="12" textAnchor="middle" fill="#3a4338" fontWeight="bold">WC</text>
          
          <rect x="300" y="100" width="50" height="50" fill="#e8e1d9" stroke="#7d9178" strokeWidth="2" />
          <text x="325" y="130" fontSize="12" textAnchor="middle" fill="#3a4338" fontWeight="bold">WC</text>
          
          <rect x="350" y="100" width="50" height="50" fill="#e8e1d9" stroke="#7d9178" strokeWidth="2" />
          <text x="375" y="130" fontSize="12" textAnchor="middle" fill="#3a4338" fontWeight="bold">WC</text>
          
          <rect x="400" y="100" width="50" height="50" fill="#e8e1d9" stroke="#7d9178" strokeWidth="2" />
          <text x="425" y="130" fontSize="12" textAnchor="middle" fill="#3a4338" fontWeight="bold">WC</text>
          
          <rect x="450" y="100" width="50" height="50" fill="#e8e1d9" stroke="#7d9178" strokeWidth="2" />
          <text x="475" y="130" fontSize="12" textAnchor="middle" fill="#3a4338" fontWeight="bold">WC</text>
          
          <rect x="500" y="100" width="50" height="50" fill="#e8e1d9" stroke="#7d9178" strokeWidth="2" />
          <text x="525" y="130" fontSize="12" textAnchor="middle" fill="#3a4338" fontWeight="bold">WC</text>
          
          {/* Other Rooms - Middle Bottom */}
          <rect x="275" y="325" width="100" height="75" fill="#c97c5d" stroke="#7d9178" strokeWidth="2" />
          <text x="325" y="370" fontSize="14" textAnchor="middle" fill="#ffffff" fontWeight="bold">Refeitório</text>
          
          <rect x="425" y="325" width="100" height="75" fill="#7d9178" stroke="#7d9178" strokeWidth="2" />
          <text x="475" y="370" fontSize="14" textAnchor="middle" fill="#ffffff" fontWeight="bold">Biblioteca</text>
          
          {/* Legend */}
          <rect x="250" y="425" width="300" height="50" fill="#ffffff" stroke="#7d9178" strokeWidth="2" rx="5" ry="5" />
          <text x="400" y="445" fontSize="16" textAnchor="middle" fill="#3a4338" fontWeight="bold">Legenda</text>
          
          <rect x="270" y="455" width="15" height="15" fill="#b4c4b0" />
          <text x="350" y="468" fontSize="14" textAnchor="start" fill="#3a4338">Quartos (1c = Uma cama)</text>
          
          <rect x="430" y="455" width="15" height="15" fill="#e8e1d9" />
          <text x="510" y="468" fontSize="14" textAnchor="start" fill="#3a4338">Banheiros (WC)</text>
        </svg>
      </div>
    </Card>
  );
};

export default AccommodationMap;
