import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./Pokedex/PokemonCard";
import "./css/pokedex.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import FormPokedex from "./Pokedex/FormPokedex";
import TypeList from "./Pokedex/TypeList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [optionType, setOptionType] = useState("All");

  useEffect(() => {
    if (optionType !== "All") {
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
      axios.get(URL).then((res) => {
        const arr = res.data.pokemon.map((e) => e.pokemon);
        setPokemons({ results: arr });
      });
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data))
        .catch((err) => console.log(err));
    }
  }, [optionType]);
  const user = useSelector((state) => state.nameTrainer);

  return (
    <section>
      <Header />
      <div className="pokedex__welcome">
        <p>
          <span>Welcome {user},</span> here you can find your favorite pokemon.
        </p>
      </div>
      <div className="inputs__container">
        <FormPokedex pokemons={pokemons} />
        <TypeList setOptionType={setOptionType} />
      </div>

      <div className="cards__container">
        {pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </section>
  );
};

export default Pokedex;
