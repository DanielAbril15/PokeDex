import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/pokemonCard.css";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const imagePokemon =
    pokemon?.sprites.other["official-artwork"]["front_default"];

  const handleClick = () => navigate(`/pokedex/${pokemon.name}`);

  return (
    <div
      onClick={handleClick}
      className={`card__container ${pokemon?.types[0].type.name}-border`}
    >
      <div className={`card__header ${pokemon?.types[0].type.name}`}>
        <img src={imagePokemon} alt={pokemon?.name} />
      </div>
      <div className="card__body">
        <p className="body__name">{pokemon?.name}</p>
        <div className="card__type">
          {pokemon?.types.map((typePokemon) => (
            <p key={typePokemon.type.name}>{typePokemon.type.name}</p>
          ))}
        </div>
        <span>Type</span>
      </div>
      <div className="card__footer">
        <ul>
          {pokemon?.stats.map((statPokemon) => (
            <li key={statPokemon.stat.name}>
              <span>{statPokemon.stat.name.toUpperCase()}</span>
              <p>{statPokemon["base_stat"]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
