import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import PokemonInfo from "./components/PokemonInfo";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<PokemonInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
