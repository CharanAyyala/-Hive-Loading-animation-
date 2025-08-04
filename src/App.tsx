import React, { useState, useEffect } from 'react';
import Hlogo from './assets/Hlogo.png'; // Make sure this path is correct

function App() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0084FF]/90 relative overflow-hidden">
      {/* Hexagon loader */}
      <div className="relative w-40 h-40">
        <svg width="160" height="160" viewBox="0 0 160 160" className="absolute inset-0">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Pure white hexagon with bottom-right open */}
          <path
            d="
              M80 10
              L135 45
              L135 100
              M135 100
              L95 130
              M65 130
              L25 100
              L25 45
              L80 10
            "
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-path"
            filter="url(#glow)"
          />
        </svg>

        {/* Smooth logo animation */}
        {showLogo && (
          <img
            src={Hlogo}
            alt="Logo"
            className="w-18 h-20 object-contain absolute inset-0 m-auto animate-fade-in"
          />
        )}
      </div>
    </div>
  );
}

export default App;
