/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/singleItem.css";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, image, banner, artist, idPath}) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">

      <div className="single-item__div-image-button">

        <div className="single-item__div-image">
          <img src={ image } alt={`Imagem do cantor ${ name }`} className="" />
        </div>

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{ name }</p>
        </div>

        <p className="single-item__type"> {artist ?? "Artista"} </p>
        {/* <p className="single-item__type"> {artist ? artist : "Artista"} </p>
        <p className="single-item__type"> {artist === undefined ? "Artista" : artist} </p> */}
      </div>

    </Link>
  );
};

export default SingleItem;
