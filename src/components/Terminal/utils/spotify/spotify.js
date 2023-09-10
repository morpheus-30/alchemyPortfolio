import axios from "axios";
let username = "morpheus954"
let apiKey = "33f74723ab885abe1d9b216dfe057456"

export default async function getRecentTracks() {
    let response = await axios({
        method: "GET",
        url: `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`
    })
    let tracks = []

    for (let i = 0; i < 5; i++) {
        let track = response.data.recenttracks.track[i]
        tracks.push({
            name: track.name,
            artist: track.artist["#text"],
            album: track.album["#text"],
            image: track.image[3]["#text"],
            url: track.url
        })
    }
    console.log(tracks);
    return tracks
}
