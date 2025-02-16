/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../css/songItem.css";

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p> {index + 1} </p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Capa da música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name"> {name} </p>
        </div>
      </div>

      <p className="song-item_duration"> {duration} </p>
    </Link>
  );
};

export default SongItem;
