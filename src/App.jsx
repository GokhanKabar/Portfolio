import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio"
import Competence from "./component/competance/Competence";
import "./app.scss";
import { useState } from "react";
import Menu from "./menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
    <Intro/>
    <Portfolio/>
    <Competence/>
    </div>
    </div>
  );
}

export default App;
