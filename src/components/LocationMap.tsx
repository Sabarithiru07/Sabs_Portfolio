'use client';
import { useState } from 'react';
import { MapPin, ExternalLink, MousePointerClick } from 'lucide-react';

const PLACE = 'Thathaiyangarpet, Tiruchirappalli, Tamil Nadu';
const EMBED = `https://www.google.com/maps?q=${encodeURIComponent(PLACE)}&z=14&output=embed`;
const OPEN = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLACE)}`;

/** Click-to-explore map card: the map is shown dimmed until you click it, so scrolling the page never gets stuck on the map. */
export function LocationMap() {
  const [active, setActive] = useState(false);
  return (
    <div className="map-card glass">
      <div className="map-info">
        <span className="map-pin"><MapPin size={26} /></span>
        <h3>Find me here</h3>
        <p className="sub">Thathaiyengarpet, Trichy<br />Tamil Nadu, India</p>
        <a className="btn btn-primary btn-sm" href={OPEN} target="_blank" rel="noopener noreferrer">Open in Google Maps <ExternalLink size={16} /></a>
      </div>
      <div className={`map-frame${active ? ' active' : ''}`}>
        <iframe title="Map showing Thathaiyengarpet, Trichy" src={EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        {!active && (
          <button type="button" className="map-cover" onClick={() => setActive(true)} aria-label="Click to explore the map">
            <span className="map-ping"><i /><i /><MapPin size={30} /></span>
            <span className="map-hint"><MousePointerClick size={16} /> Click to explore the map</span>
          </button>
        )}
      </div>
    </div>
  );
}
