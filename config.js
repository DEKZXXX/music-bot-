module.exports = {
    app: {
        px: '-',
        token: 'ODg1MjYxNTA0NTYyMjA4ODg4.YTkeBg.I7Aqx17ByoZ5_ImIjqUQsbkShRo',
        playing: 'Valorant | -help',
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: 'DJ', //DJ
            commands: ['back', 'clear', 'filter', 'loop', 'nowplaying', 'pause', 'play', 'progress', 'queue', 'resume', 'save', 'search', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
