import "./styles/bar_styles.css";
import { About } from "./About";

const scrollToBottom = () => {
  window.scrollTo({
    top: "400",
    behavior: "smooth",
  });
};

export function Bar() {
  return (
    <div className="Bar">
      <h2> Charles NGUYEN </h2>
      <h2 onClick={scrollToBottom}> About </h2>
      <h2> Project </h2>
      <h2> Cv </h2>
      <h2> Contact </h2>
    </div>
  );
}
