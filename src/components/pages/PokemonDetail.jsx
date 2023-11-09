import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setPokemon(data);
    };
    getPokemon();
  }, [pokemonName]);

  if (!pokemon) {
    return (
      <div className="w-full items-center justify-center">Cargando...</div>
    );
  }

  return (
    <div
      className="flex justify-center items-center bg-slate-100 py-12 gap-12"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <img
        className="w-1/3 items-center"
        src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl">{pokemonName}</h1>
        <ul>
          {pokemon.stats.map((stat) => (
            <li className="text-2xl" key={stat.stat.name}>
              - {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to={"/pokemones"}
        >
          Volver a la lista de pokemones
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
