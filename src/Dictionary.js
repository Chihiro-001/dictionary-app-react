import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    alert(`Searching ${keyword} definition`);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary App</h1>
      <h2>What word do you want to search?</h2>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
