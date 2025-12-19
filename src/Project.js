import "./styles/project_styles.css";
import { project_data } from "./data/Project_data";

function Little_man() {
  return <h1>hi</h1>;
}

function Little_project() {
  return (
    <div className="Project_position">
      {project_data.map((proj) => (
        <span className="Project_data"> {proj.name} </span>
      ))}
    </div>
  );
}

export function Project() {
  return (
    <div>
      <Little_project />
      <Little_man />
    </div>
  );
}
