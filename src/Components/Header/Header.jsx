import styles from "./header.module.css";
import { Container } from "../Container/Container";
import { Choose } from "./choices/Choose";
import { useDispatch, useSelector } from "react-redux";
import { fetchText } from "../../redux/TextSlice";
import { fetchImage } from "../../redux/ImageSlice";
function Header() {
  const dispatch = useDispatch();
  const { holiday } = useSelector((state) => state.holiday);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchText(holiday));
              }}
            >
              Поменять поздравление
            </button>
            <button
              className={styles.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchImage(holiday));
              }}
            >
              Поменять фон
            </button>
            <Choose />
          </div>
        </div>
      </Container>
    </header>
  );
}
export { Header };
