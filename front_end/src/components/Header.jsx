import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

import "../css/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img width="32" src={logoSpotify} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
