import React from 'react';

const PlayerControls = () => {
  return (
    <div className="flex items-center justify-center space-x-8">
      {/* Previous */}
      <button className="text-accent hover:text-white transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
        </svg>
      </button>
      
      {/* Play/Pause */}
      <button className="bg-primary text-white rounded-full p-3 hover:bg-green-600 transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
      
      {/* Next */}
      <button className="text-accent hover:text-white transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
        </svg>
      </button>
    </div>
  );
};

export default PlayerControls;