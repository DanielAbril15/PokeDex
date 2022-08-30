import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./Pokedex/PokemonCard";
import "./css/pokedex.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import FormPokedex from "./Pokedex/FormPokedex";
import { useParams } from "react-router-dom";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    axios
      .get(URL)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  }, []);

  const user = useSelector((state) => state.nameTrainer);
  return (
    <section>
      <Header />
      <div className="pokedex__welcome">
        <p>
          <span>Welcome {user},</span> here you can find your favorite pokemon.
        </p>
      </div>
      <FormPokedex pokemons={pokemons} />
      <div className="cards__container">
        {pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </section>
  );
};

export default Pokedex;
