/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artists/Artist";
import Artists from "./pages/Artists/Artists";
import Songs from "./pages/Songs/Songs";
import Song from "./pages/Songs/Song";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/vars.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
