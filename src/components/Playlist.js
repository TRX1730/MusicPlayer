import React from 'react';

const Playlist = () => {
  const songs = [
    { id: 1, title: "Aktualnie odtwarzane", artist: "Autor - tytuł", isPlaying: true },
    { id: 2, title: "Autor - tytuł", artist: "", isPlaying: false },
    { id: 3, title: "Autor - tytuł", artist: "", isPlaying: false },
    { id: 4, title: "Następne", artist: "next_title", isNext: true },
  ];

  return (
    <div className="p-4 bg-gray-800">
      <h3 className="text-white font-semibold mb-3">Playlista</h3>
      <div className="space-y-2">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`p-3 rounded-lg cursor-pointer transition-all ${
              song.isPlaying 
                ? 'bg-primary text-white' 
                : song.isNext
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-600 text-gray-300 hover:bg-gray-550'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className={`font-medium ${song.isPlaying ? 'text-white' : 'text-gray-200'}`}>
                  {song.title}
                </div>
                {song.artist && (
                  <div className="text-sm opacity-75">{song.artist}</div>
                )}
              </div>
              {song.isPlaying && (
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;