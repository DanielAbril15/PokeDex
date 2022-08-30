import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/formPokedex.css";
import { setPokemon } from "../../store/slices/namePokemon.slice";
const FormPokedex = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let inputValue = e.target.searchpokemon.value.trim().toLowerCase();
    dispatch(setPokemon(inputValue));
    navigate(`/pokedex/${inputValue}`);
  };

  return (
    <section className="search">
      <form onSubmit={handleSearch} className="search__pokemon">
        <input type="text" placeholder="Pokemon" id="searchpokemon" />
        <button>Search</button>
      </form>
    </section>
  );
};

export default FormPokedex;
