/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../css/main.css";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./ItemList";

const Main = ({ type }) => {
  return (
    <section className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Main;
