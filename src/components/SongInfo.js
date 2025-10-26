import React from 'react';

const SongInfo = ({ title, artist, cover, duration }) => {
  const formatTime = (seconds) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="text-center">
      <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
        <img 
          src={cover} 
          alt="Album cover"
          className="w-full h-full object-cover"
        />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
      <p className="text-accent text-lg">{artist}</p>
      
      <div className="flex justify-between items-center mt-2 text-accent text-sm">
        <span>0:00</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default SongInfo;