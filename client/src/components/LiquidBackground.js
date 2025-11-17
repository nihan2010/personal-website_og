import React from 'react';
import './LiquidBackground.css';

const LiquidBackground = () => {
  return (
    <div className="liquid-background">
      <div className="liquid-blob liquid-blob-1"></div>
      <div className="liquid-blob liquid-blob-2"></div>
      <div className="liquid-blob liquid-blob-3"></div>
      <div className="liquid-blob liquid-blob-4"></div>
      <div className="liquid-blob liquid-blob-5"></div>
      <div className="liquid-blob liquid-blob-6"></div>
      <div className="liquid-blob liquid-blob-7"></div>
      <div className="liquid-blob liquid-blob-8"></div>
      
      {/* Animated particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${i * 0.1}s`,
            '--duration': `${8 + Math.random() * 4}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>
      
      {/* Liquid waves */}
      <div className="liquid-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
    </div>
  );
};

export default LiquidBackground;