import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./Pokedex/PokemonCard";
import "./css/pokedex.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import FormPokedex from "./Pokedex/FormPokedex";
import TypeList from "./Pokedex/TypeList";
import Pagination from "./Pokedex/Pagination";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [optionType, setOptionType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(20);
  console.log(pokemons);
  useEffect(() => {
    if (optionType !== "All") {
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
      axios.get(URL).then((res) => {
        const arr = res.data.pokemon.map((e) => e.pokemon);
        setPokemons({ results: arr });
      });
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data))
        .catch((err) => console.log(err));
    }
  }, [optionType]);

  const user = useSelector((state) => state.nameTrainer);

  const indexOfLastPoke = currentPage * pokePerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
  const currentPokemons = pokemons?.results.slice(
    indexOfFirstPoke,
    indexOfLastPoke
  );
  console.log(pokemons?.results.length);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
        {currentPokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      <section className="pagination">
        <Pagination
          pokePerPage={pokePerPage}
          totalPokemons={pokemons?.results.length}
          paginate={paginate}
        />
      </section>
    </section>
  );
};

export default Pokedex;
