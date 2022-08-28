import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName } from "../store/slices/nameTrainer.slice";
import "./css/home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value.trim();
    if (inputValue !== 0) {
      dispatch(setName(inputValue));
      navigate("/pokedex");
    }
    e.target.name.value = "";
  };

  return (
    <section className="home">
      <figure className=" home__logo">
        <img src="/imgs/pokedex.png" alt="Logo Pokedex" />
      </figure>
      <div className="home__welcome">
        <h1>Hello trainer!</h1>
        <p>Give me your name to start</p>
      </div>
      <form onSubmit={handleSubmit} action="">
        <input id="name" placeholder="Type your name" type="text" />
        <button>Start</button>
      </form>
      <section className="home__footer">
        <div></div>
        <div></div>
        <img src="/imgs/pokeball.png" alt="pokeball" />
      </section>
    </section>
  );
};

export default Home;
