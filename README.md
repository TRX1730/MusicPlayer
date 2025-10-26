
```markdown
# 🎵 React Music Player

![React](https://img.shields.io/badge/React-18.2.0-blue)
![CSS3](https://img.shields.io/badge/CSS3-Styles-green)
![GitHub](https://img.shields.io/badge/GitHub-Repository-lightgrey)

Modern, sleek music player built with React and custom CSS. Features a beautiful Spotify-inspired interface with full playback controls.

## ✨ Features

- 🎧 **Music Playback** - Play/pause functionality
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Beautiful UI** - Spotify-inspired dark theme
- 📊 **Progress Bar** - Interactive seek functionality
- 🔊 **Volume Control** - Smooth volume slider
- 🎵 **Playlist** - Clickable song selection
- ⏭️ **Track Controls** - Next/previous track navigation

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/TRX1730/MusicPlayer.git
cd MusicPlayer
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:3000
```

## 🎮 Controls

| Feature | Description |
|---------|-------------|
| ▶️/⏸️ | Play/Pause current track |
| ⏮️ | Previous track |
| ⏭️ | Next track |
| 🔈 | Volume control (0-100%) |
| 🎯 | Clickable progress bar |
| 📋 | Interactive playlist |

## 📁 Project Structure

```
music-player/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── MusicPlayer.js    # Main player component
│   │   ├── PlayerControls.js # Play/pause/next/prev buttons
│   │   ├── ProgressBar.js    # Interactive progress bar
│   │   ├── VolumeControl.js  # Volume slider
│   │   ├── Playlist.js       # Song list
│   │   └── SongInfo.js       # Current track display
│   ├── data/
│   │   └── songs.js          # Music library
│   ├── App.js               # Root component
│   ├── App.css              # Main styles
│   └── index.js             # Entry point
└── package.json
```

## 🎵 Adding Your Music

Edit `src/data/songs.js` to add your tracks:

```javascript
export const songs = [
  {
    id: 1,
    title: "Your Song Title",
    artist: "Artist Name",
    duration: 180, // in seconds
    cover: "https://image-url.com/cover.jpg",
    audio: "/music/your-song.mp3"
  },
  // ... more songs
];
```

## 🎨 Customization

### Colors
Modify `App.css` to change the color scheme:
```css
:root {
  --primary: #1DB954;    /* Spotify green */
  --secondary: #191414;  /* Dark background */
  --accent: #535353;     /* Gray elements */
}
```

### Styling
All styles are in `App.css` - easy to customize without external dependencies.

## 🔧 Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**TRX1730**
- GitHub: [@TRX1730](https://github.com/TRX1730)


