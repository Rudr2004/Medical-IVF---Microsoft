import { useState } from 'react';
import { LOCATIONS_DATA } from '../data/locations';
import worldMapImg from '../assets/world_map_vector.png';

export default function LocationsMapPreview({ navigateTo }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div 
      className="map-container"
      onMouseLeave={() => setHoveredLocation(null)}
      style={{ maxWidth: '800px', margin: '2rem auto' }}
    >
      <svg viewBox="0 0 1000 480" className="world-map-svg" style={{ borderRadius: '8px', overflow: 'hidden' }}>
        <defs>
          <pattern id="preview-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(15, 61, 92, 0.04)" stroke-width="1" />
          </pattern>
        </defs>
        
        {/* Modern Vector Map Background Image */}
        <image 
          href={worldMapImg} 
          width="1000" 
          height="480" 
          opacity="0.9"
        />

        {/* Technical Grid Overlay */}
        <rect width="1000" height="480" fill="url(#preview-grid)" pointerEvents="none" />

        {LOCATIONS_DATA.map((loc) => (
          <g 
            key={loc.id} 
            className="map-marker"
            onMouseEnter={() => setHoveredLocation(loc)}
            onMouseLeave={() => setHoveredLocation(null)}
            onClick={() => navigateTo('/locations')}
          >
            {/* Animating ripple rings (staggered double pulses) */}
            <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-1" />
            <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-2" />
            {/* Solid core pin */}
            <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-core" />
            {/* Large invisible interactive shield to prevent hover flicker */}
            <circle cx={loc.coords.x} cy={loc.coords.y} r="25" fill="transparent" style={{ cursor: 'pointer' }} />
          </g>
        ))}

        {/* Dynamic Tooltip inside SVG Coordinate Space */}
        {hoveredLocation && (
          <foreignObject 
            x={hoveredLocation.coords.x - 120} 
            y={hoveredLocation.coords.y - 140} 
            width="240" 
            height="135" 
            style={{ pointerEvents: 'none' }}
          >
            <div 
              className="map-tooltip"
              style={{ 
                position: 'static',
                opacity: 1,
                transform: 'none',
                width: '100%',
                boxSizing: 'border-box',
                pointerEvents: 'none'
              }}
            >
              <div className="map-tooltip-city">{hoveredLocation.city}</div>
              <div className="map-tooltip-country">{hoveredLocation.country}</div>
              <div className="map-tooltip-text" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                Procedures: {hoveredLocation.procedures.join(', ')}
              </div>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}
