import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("sunrise");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch(errorFunction);
    // alert(`Searching ${keyword} definition`);
    //load pictures
    const pexelsApiKey =
      "563492ad6f917000010000010d5d84caf2274429a535d31dddc67939";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function errorFunction() {
    alert(
      "Sorry, that word is not recognised. Please check the spelling and try again"
    );
  }
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    // if (response.data[0]) {
    //   setResults(response.data[0]);
    // }
  }
  function handlePexelsResponse(response) {
    // console.log(response.data);
    // if (response.data[0]) {
    //   setPhotos(response.data.photos);
    // }
    setPhotos(response.data.photos);
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
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return <div className="Dictionary">Loading...</div>;
  }
}
