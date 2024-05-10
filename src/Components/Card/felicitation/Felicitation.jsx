import { useContext } from "react";
import { textContent } from "../../../context/TextContext";
function Felicitation(props) {
  const { text } = useContext(textContent);
  return <p className={props.className}>{text}</p>;
}
export { Felicitation };
