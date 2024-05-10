import { ImageCard } from "./image/Image";
import { Felicitation } from "./felicitation/Felicitation";
import style from "./card.module.css";
import CardBG from "../../img/card-bg.jpg";
function Card() {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <ImageCard img={CardBG} />
          <Felicitation className={style.felicitation} />
        </div>
      </div>
    </div>
  );
}
export { Card };
