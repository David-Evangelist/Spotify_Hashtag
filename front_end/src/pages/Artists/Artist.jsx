/* eslint-disable no-unused-vars */
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongList from "./SongList";
import "../../css/artist.css";
import { Link } from "react-router-dom";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";
import { useParams } from "react-router-dom";

const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  const randomIndex = Math.floor(
    Math.random() * songsArrayFromArtist.length - 1
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <section className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title"> {name} </h2>

        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>
    </section>
  );
};

export default Artist;
