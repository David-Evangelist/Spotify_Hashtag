import { artistArray } from "../../front_end/src/assets/database/artists.js";
import { songsArray } from "../../front_end/src/assets/database/songs.js";

import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtist = await db
  .collection("artists")
  .insertMany(newArtistArray);

  
// console.log(responseArtist);
// console.log(responseSongs);
