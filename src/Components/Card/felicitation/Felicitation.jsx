import { useContext } from "react";
import { textContent } from "../../../context/TextContext";
import { useSelector } from "react-redux";
function Felicitation(props) {
  // const text = useContext(textContent);
  const { text, loading } = useSelector((state) => state.text);
  return (
    <p className={props.className}>
      {loading === "loading"
        ? "Загрузка"
        : text === ""
        ? "Выберите повод для поздравления"
        : text}
    </p>
  );
}
export { Felicitation };
