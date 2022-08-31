import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>
      <footer>
        This is coded by Chihiro Ismail and open-sourced on
        <a
          href="https://github.com/Chihiro-001/dictionary-app-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        and is hosted on{" "}
        <a
          href="https://incomparable-quokka-38a228.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
