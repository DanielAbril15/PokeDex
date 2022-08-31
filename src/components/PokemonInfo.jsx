import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import "./css/pokemonInfo.css";
import { useNavigate, useParams } from "react-router-dom";

const PokemonInfo = () => {
  const [searchPokemon, setSearchPokemon] = useState();

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/pokedex");
  };

  const pokemon = useSelector((state) => state.namePokemon);

  const { name } = useParams();

  useEffect(() => {
    let URL;
    if (name) {
      URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    } else {
      URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    }
    axios
      .get(URL)
      .then((res) => setSearchPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(searchPokemon);

  const imagePokemon =
    searchPokemon?.sprites.other["official-artwork"]["front_default"];
  console.log(searchPokemon);
  return (
    <article className="info__container">
      <button onClick={handleBack} className="btn-back">
        &#60;
      </button>
      <Header />
      <section className="info__principal">
        <section
          className={`info__header ${searchPokemon?.types[0].type.name}`}
        >
          <img src={imagePokemon} alt={searchPokemon?.name} />
        </section>
        <section className="info">
          <p className={`info__id ${searchPokemon?.types[0].type.name}-lt`}>
            #{searchPokemon?.id}
          </p>
          <p className={`info__name ${searchPokemon?.types[0].type.name}-lt`}>
            {searchPokemon?.name}
          </p>
          <div className="info__attribute">
            <div className="attribute">
              <span>Weight</span>
              <p>{searchPokemon?.weight}</p>
            </div>
            <div className="attribute">
              <span>Weight</span>
              <p>{searchPokemon?.height}</p>
            </div>
          </div>
        </section>
        <section className="info__feature">
          <div className="feature__type">
            <p>Type</p>
            <div>
              {searchPokemon?.types.map((pokemon) => (
                <span key={pokemon.type.name} className={pokemon.type.name}>
                  {pokemon.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className="feature__ability">
            <p>Abilities</p>
            <div>
              {searchPokemon?.abilities.map((pokemon) => (
                <p key={pokemon.ability.name} className="ability">
                  {pokemon.ability.name}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="stats">
          <p className="stats__title">Stats</p>

          {searchPokemon?.stats.map((statPokemon) => (
            <div key={statPokemon.stat.name} className="stat__container">
              <div className="stat">
                <span>{statPokemon.stat.name.toUpperCase()}:</span>
                <span>{statPokemon["base_stat"]}/150</span>
              </div>

              <p className="stat__percent">
                <span
                  style={{
                    width: `${(statPokemon["base_stat"] * 100) / 150}%`,
                  }}
                ></span>
              </p>
            </div>
          ))}
        </section>
      </section>
      <section className="movements">
        <p>Movements</p>
        <div>
          {searchPokemon?.moves.map((movePokemon) => (
            <span key={movePokemon.move.name}>{movePokemon.move.name}</span>
          ))}
        </div>
      </section>
    </article>
  );
};

export default PokemonInfo;
