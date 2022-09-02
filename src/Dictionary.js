import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("sunrise");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
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
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <nav className="navbar">
          <div className="container-fluid">
            <p className="title">Dictionary App</p>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
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
        <div className="container">
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return <div className="Dictionary">Loading...</div>;
  }
}
