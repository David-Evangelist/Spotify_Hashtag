/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Player from "../../components/Player";
import "../../css/song.css";
import { useParams } from "react-router-dom";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * songsArrayFromArtist.length - 1
  );

  const randomIndex2 = Math.floor(
    Math.random() * songsArrayFromArtist.length - 1
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <section className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={image}
            alt={`Imagem de capa da música ${name}`}
            className="song__image"
            width="300"
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div className="song__info">
          <p className="song__name"> {name} </p>
          <p> {artist} </p>
        </div>
      </div>
    </section>
  );
};

export default Song;
