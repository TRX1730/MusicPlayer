import React, { useState, useEffect } from 'react';
import './App.css';
import { songs } from './data/songs';  
import VolumeControl from './components/VolumeControl';
import ProgressBar from './components/ProgressBar'; 

function App() {
  return (
    <div className="app">
      <MusicPlayer />
    </div>
  );
}

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  
  const currentSong = songs[currentSongIndex];
  const duration = currentSong.duration;

  useEffect(() => {
    let interval;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prevTime => {
          if (prevTime >= duration) {
            handleNextSong();
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = (newTime) => {
    setCurrentTime(newTime);
  };

  const handleSongChange = (index) => {
    setCurrentSongIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleNextSong = () => {
    const nextIndex = currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
    handleSongChange(nextIndex);
  };

  const handlePrevSong = () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    handleSongChange(prevIndex);
  };

  const handleSongSelect = (index) => {
    handleSongChange(index);
  };

  return (
    <div className="music-player">
      <div className="player-header">
        <div className="album-cover">
          <img src={currentSong.cover} alt="Album cover" />
        </div>
        
        <div className="song-title">{currentSong.title}</div>
        <div className="song-artist">{currentSong.artist}</div>
        
        <ProgressBar 
          currentTime={currentTime}
          duration={duration}
          onTimeUpdate={handleTimeUpdate}
        />
        
        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        
        <div className="controls">
          <button className="control-btn" onClick={handlePrevSong}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          
          <button className="play-btn" onClick={handlePlayPause}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d={isPlaying ? "M6 19h4V5H6v14zm8-14v14h4V5h-4z" : "M8 5v14l11-7z"}/>
            </svg>
          </button>
          
          <button className="control-btn" onClick={handleNextSong}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>
        
        <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
      </div>

      <div className="playlist">
        <div className="playlist-title">Playlista</div>
        
        <div className="playlist-item playing">
          <div className="song-name">Aktualnie odtwarzane</div>
          <div className="song-details">{currentSong.artist} - {currentSong.title}</div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span>Teraz odtwarzane</span>
            <div className="playing-indicator"></div>
          </div>
        </div>
        
        {songs.slice(1).map((song, index) => (
          <div 
            key={song.id} 
            className="playlist-item"
            onClick={() => handleSongSelect(index + 1)}
          >
            <div className="song-name">{song.title}</div>
            <div className="song-details">{song.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;