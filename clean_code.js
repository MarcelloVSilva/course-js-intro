const value = "1440";
const mws = "1440";
const maxWidthScreen = "1440";

let boolean = true
let volume = true
let isMute = true

function stack(i, stk){
  stacks[stk.id].items.push(i)
}

function addSongInPlaylist(newSong, playlist){
  playlists[playlist.id].songs.push(newSong)
}
