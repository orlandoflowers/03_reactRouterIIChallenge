import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import Pokemones from "./components/pages/Pokemones";
import Home from "./components/pages/Home";
import PokemonDetail from "./components/pages/PokemonDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:pokemonName" element={<PokemonDetail />} />
      </Routes>
    </>
  );
};

export default App;
