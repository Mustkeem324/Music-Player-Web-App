// scripts.js
const songs = [
    { id: 1, name: "Song 1", artist: "Artist 1", img: "song1.jpeg", genre: "rock", source: "song1.mp3" },
    { id: 2, name: "Song 2", artist: "Artist 2", img: "song2.jpeg", genre: "pop", source: "song2.mp3" },
    { id: 3, name: "Song 3", artist: "Artist 3", img: "song3.jpeg", genre: "rock", source: "song3.mp3" },
    { id: 4, name: "Song 4", artist: "Artist 4", img: "song4.jpeg", genre: "pop", source: "song4.mp3" },
    { id: 5, name: "Song 5", artist: "Artist 5", img: "song5.jpeg", genre: "rock", source: "song5.mp3" },
    { id: 6, name: "Song 6", artist: "Artist 6", img: "song6.jpeg", genre: "pop", source: "song6.mp3" },
];



function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function showSongs(genre = 'all') {
    const songsList = document.getElementById('songsList');
    songsList.innerHTML = '';
    songs.filter(song => genre === 'all' || song.genre === genre).forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.name} - ${song.artist}`;
        li.dataset.id = song.id;
        li.addEventListener('click', () => renderCurrentSong(song));
        songsList.appendChild(li);
    });
}

function renderCurrentSong(song) {
    document.getElementById('songImg').src = song.img;
    document.getElementById('songName').textContent = song.name;
    document.getElementById('artistName').textContent = song.artist;
}

function addtoPlaylist(songId) {
    const selectedPlaylist = document.getElementById('playlistList').value;
    const playlist = playlists.find(p => p.name === selectedPlaylist);
    if (playlist) {
        const song = songs.find(s => s.id === parseInt(songId));
        if (song) {
            playlist.songs.push(song);
        }
    }
}

function createPlaylist() {
    const playlistName = prompt("Enter playlist name:");
    if (playlistName) {
        const playlist = { name: playlistName, songs: [] };
        playlists.push(playlist);
    }
}

document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);
document.getElementById('genreFilter').addEventListener('change', (event) => showSongs(event.target.value));
document.getElementById('addToPlaylistBtn').addEventListener('click', () => {
    const selectedSongId = document.getElementById('songCard').dataset.id;
    addtoPlaylist(selectedSongId);
});
document.getElementById('createPlaylistBtn').addEventListener('click', createPlaylist);

// Initial setup
showSongs();
