import { useContext } from "react";
import { imageContext } from "../../../context/imageContext";
import { useSelector } from "react-redux";
function ImageCard(props) {
  // const data = useContext(imageContext);
  const { image, loading } = useSelector((state) => state.image);
  return (
    <>
      <img
        src={image === "" ? props.img : image}
        alt="Фон картинки"
        width={840}
        height={520}
      />
    </>
  );
}
export { ImageCard };
