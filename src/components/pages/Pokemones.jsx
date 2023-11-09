import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      setPokemones(data.results);
    };
    getPokemones();
  }, []);

  console.log(pokemones);

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const goToResults = () => {
    navigate(`/pokemones/${selectedPokemon}`);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gap-8">
      <h1 className="text-4xl">Selecciona un pokemon</h1>
      <select
        className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
        onChange={handleSelectChange}
      >
        <option value="">Selecciona un pokemon</option>
        {pokemones.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button
        className={`font-bold py-2 px-4 rounded ${
          selectedPokemon
            ? "bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
        onClick={goToResults}
        disabled={!selectedPokemon}
      >
        Ver detalle
      </button>
    </div>
  );
};

export default Pokemones;
