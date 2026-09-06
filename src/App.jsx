import React from 'react';
import ChatBot from './components/ChatBot.jsx';
import KenyaFlag from './components/KenyaFlag.jsx';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      
      {/* Decorative subtle elements */}
      <div className="absolute top-6 left-6 opacity-20">
        <KenyaFlag className="w-12 h-8" />
      </div>
      <div className="absolute bottom-6 right-6 opacity-20 transform rotate-180">
        <KenyaFlag className="w-12 h-8" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Title with tiny flag */}
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-2.5 mb-1.5">
            <KenyaFlag className="flag-small" />
            <h1 className="text-3xl font-semibold text-[#2A3A4A]">
              GHRIS Msaidizi
            </h1>
          </div>
          <p className="text-[#4A5A6A] text-sm">
            Your friendly GHRIS customer service assistant
          </p>
          <div className="flex items-center justify-center gap-2 mt-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E1EDF5] text-[#4A90D9] rounded-full text-xs font-medium">
              <span className="status-dot"></span>
              Available
            </span>
            <span className="text-[#94A3B8]">|</span>
            <span className="text-xs text-[#6B7A8A]">24/7 Support</span>
          </div>
        </div>

        {/* Chatbot */}
        <ChatBot />

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Pius Gitonga.
          </p>
          <p className="text-xs text-[#6B7A8A] mt-0.5">
            Need help? Call <span className="font-semibold text-[#4A90D9]">0715086262</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;