import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./Pokedex/PokemonCard";
import "./css/pokedex.css";
import Header from "./Header";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    axios
      .get(URL)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <div className="cards__container">
        {pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </section>
  );
};

export default Pokedex;
