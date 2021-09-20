import "./App.css";
import Characters from "./components/Characters";
import { useEffect, useState } from "react";

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=1`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((error) => console.log(error));
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty characters</h1>

        <main>
          <Characters characterList={characterList} />
        </main>
      </header>
    </div>
  );
};

export default App;
