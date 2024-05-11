import { useContext } from "react";
import { imageContext } from "../../../context/imageContext";
function ImageCard(props) {
  const {img} = useContext(imageContext);
  
  return <img src={props.img} alt="Фон картинки" width={840} height={520} />;
}
export { ImageCard };
