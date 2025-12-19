import "./styles/styles.css";
import { Bar } from "./Bar";
import { About } from "./About";
import { Project } from "./Project";
import { Contact } from "./Contact";

function Main_page() {
  //Les fonctions, c'est avec des majuscules
  return (
    <div>
      <Bar />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export function App() {
  return (
    <div>
      <Main_page />
    </div>
  );
}
