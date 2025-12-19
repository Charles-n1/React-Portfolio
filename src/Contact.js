import "./styles/contact_styles.css";
import { Contact_data } from "./data/Contact_data";

function Little_contact() {
  return (
    <div className="Contact_data">
      {Contact_data.map((cont) => (
        <img
          src={cont.logo}
          onClick={() => (window.location.href = cont.src)}
          className="Logo"
        />
      ))}
    </div>
  );
}

function Little_man() {
  return (
    <div className="Little_man">
      <h3> Little man </h3>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1 className="Contact"> Contact </h1>
      <Little_contact />
      <Little_man />
    </div>
  );
}
