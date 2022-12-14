import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/typeList.css";

const TypeList = ({ setOptionType, paginate }) => {
  const [listType, setListType] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setListType(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setOptionType(e.target.value);
    paginate(1);
  };

  return (
    <select className="selector" onChange={handleChange}>
      <option value="All">All Pokemons</option>
      {listType?.map((type) => (
        <option key={type.name} value={type.name}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default TypeList;
