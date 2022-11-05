import React from "react";
import "../StyleSheets/SearchBox.css";
import { useState } from "react";

const SearchBox = () => {
  let [input, setInput] = useState("");
  let [print, setPrint] = useState(false);

  let getData = (e) => {
    setInput(e.target.value);
    setPrint(false);
  };

  return (
    <>
      <div className="search__input">
        <span className="material-icons"> search </span>
        <input type="text" value={input} onChange={getData} />
        <span className="material-icons"> mic </span>
      </div>

      {print && input.length > 0 ? (
        <p className="ConditionalPara"> {input.toUpperCase()} </p>
      ) : null}

      <div className="search__buttons">
        <button>Google Search</button>
        <button onClick={() => setPrint(true)}>To UpperCase</button>
      </div>
    </>
  );
};

export default SearchBox;
