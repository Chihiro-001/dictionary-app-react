import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    // alert(`Searching ${keyword} definition`);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <nav className="navbar">
        <div className="container-fluid">
          <p className="title">Dictionary App</p>
          <form className="d-flex" role="search" onSubmit={search}>
            <input
              className="form-control"
              type="search"
              placeholder="Enter a word"
              onChange={handleKeywordChange}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </nav>
      {/* Show deefinitions and examples */}
      <Results results={results} />
    </div>
  );
}
