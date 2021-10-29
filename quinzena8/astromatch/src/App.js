import {
  HomePage,
  MatchesPage
} from './pages';
import { useState } from 'react';

function App() {

  const [pageName, setPageName] = useState("home");
  
  const getPagina = () => {
    switch(pageName) {
      case "home":
        return <HomePage/>
      case "matches":
        return <MatchesPage />
      default:
        return <HomePage/>
    }
  };

  const changePage = () => {
    if(pageName === "home") {
      setPageName("matches");
    } else {
      setPageName("home");
    }
  }
  return (
   <div>
     {getPagina()}
     <button onClick={changePage}>{pageName === "home" ? "Ir para Matches" : "Ir para Home"}</button>
     <button>Limpar Matches</button>
   </div>
  );
}

export default App;

