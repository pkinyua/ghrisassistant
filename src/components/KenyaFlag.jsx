import React from 'react';

const KenyaFlag = ({ className = "flag-tiny", showShield = false }) => {
  return (
    <svg 
      viewBox="0 0 600 400" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Kenyan Flag"
    >
      {/* Black stripe */}
      <rect width="600" height="400" fill="#000000"/>
      
      {/* Red stripe */}
      <rect y="100" width="600" height="200" fill="#BB0000"/>
      
      {/* Green stripe */}
      <rect y="100" width="600" height="80" fill="#006600"/>
      <rect y="220" width="600" height="80" fill="#006600"/>
      
      {/* White borders */}
      <rect y="100" width="600" height="20" fill="#FFFFFF"/>
      <rect y="280" width="600" height="20" fill="#FFFFFF"/>
      
      {showShield && (
        <g transform="translate(300, 200) scale(0.6)">
          <path d="M-80,80 L-40,-80 L40,-80 L80,80 L40,120 L-40,120 Z" 
                fill="#FFFFFF" stroke="#000000" strokeWidth="4"/>
          <path d="M-60,60 L-30,-60 L30,-60 L60,60 L30,100 L-30,100 Z" 
                fill="#BB0000" stroke="#000000" strokeWidth="3"/>
          <circle cx="0" cy="0" r="15" fill="#006600"/>
          <circle cx="0" cy="0" r="8" fill="#FFFFFF"/>
          <line x1="-90" y1="-120" x2="-70" y2="90" 
                stroke="#000000" strokeWidth="4"/>
          <line x1="90" y1="-120" x2="70" y2="90" 
                stroke="#000000" strokeWidth="4"/>
        </g>
      )}
    </svg>
  );
};

export default KenyaFlag;