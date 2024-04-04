document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = new Plyr('.plyr__audio_1', {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
        volume: 0.5,
    });

    const playlist = [
        { title: 'Song 1', src: 'song1.mp3' },
        { title: 'Song 2', src: 'song2.mp3' },
        // Add more songs as needed
    ];

    const playlistContainer = document.getElementById('playlist');

    playlist.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" data-src="${song.src}">${song.title}</a>`;
        listItem.addEventListener('click', (event) => {
            event.preventDefault();
            const src = event.currentTarget.querySelector('a').getAttribute('data-src');
            audioPlayer.source = {
                type: 'audio',
                sources: [
                    {
                        src: src,
                        type: 'audio/mp3',
                    },
                ],
            };
            audioPlayer.play();
        });
        playlistContainer.appendChild(listItem);
    });
});
