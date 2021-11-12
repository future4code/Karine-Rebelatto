import React, {useState, useEffect} from "react";
import CharacterDetailPage from './CharacterDetailPage/detalhePersonagem';
import CharacterListPage from './CharacterListPage/listaPersonagens';

import axios from "axios";

const App = () => {

  const [currentPage, setCurrentPage] = useState("list");

    function selectPage(currentPage) {

      switch(currentPage){
        case "list":
          return <CharacterListPage />
        case "detail":
          return <CharacterDetailPage />
        default:
          return <CharacterListPage />

      };
   };

   
  return (
    <div>
    <h1>STAR WARS</h1>
    {selectPage}
    </div>
  );
}

export default App;
