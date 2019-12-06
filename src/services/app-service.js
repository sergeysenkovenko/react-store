export default class AppService {
    data = [
        {
            id: 1,
            title: 'PLAYERUNKNOWN\'S BATTLEGROUNDS',
            developer: 'PUBG Corporation',
            publisher: 'PUBG Corporation',
            cover: 'https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg',
            releaseDate: 'December 21, 2017',
            price: 10
        },
        {
            id: 2,
            title: 'Grand Theft Auto V',
            developer: 'Rockstar North',
            publisher: 'Rockstar Games',
            cover: 'https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg',
            releaseDate: 'April 13, 2015',
            price: 15
        },
        {
            id: 3,
            title: 'Counter-Strike: Global Offensive',
            developer: 'Valve',
            publisher: 'Valve',
            cover: 'https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg',
            releaseDate: 'August 21, 2012',
            price: 5
        },
        {
            id: 4,
            title: 'The Witcher 3: Wild Hunt',
            developer: 'CD PROJEKT RED',
            publisher: 'CD PROJEKT RED',
            cover: 'https://steamcdn-a.akamaihd.net/steam/apps/292030/header.jpg',
            releaseDate: 'May 18, 2015',
            price: 25
        },
        {
            id: 5,
            title: 'Rust',
            developer: 'Facepunch Studios',
            publisher: 'Facepunch Studios',
            cover: 'https://steamcdn-a.akamaihd.net/steam/apps/252490/header.jpg',
            releaseDate: 'February 8, 2018',
            price: 12
        },
    ]
    
    getGames = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
               resolve(this.data)
            }, 700)
        })
    }
}