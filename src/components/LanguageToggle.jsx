import React from 'react';

const LanguageToggle = ({ language, onToggle }) => {
  return (
    <div className="flex items-center bg-white/20 rounded-full p-0.5 backdrop-blur-sm">
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-[#4A90D9] shadow-sm'
            : 'text-white/80 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => onToggle('sw')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          language === 'sw'
            ? 'bg-white text-[#4A90D9] shadow-sm'
            : 'text-white/80 hover:text-white'
        }`}
        aria-label="Badilisha kwa Kiswahili"
      >
        SW
      </button>
    </div>
  );
};

export default LanguageToggle;